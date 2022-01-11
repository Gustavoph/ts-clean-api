import { InvalidParamError, MissingParamError } from '../errors'
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../protocols'
import { badRequest, serverError } from '../helpers'
import { AddAccount } from '../../domain/usecases/add-account'
export class SignUpController implements Controller {
  constructor (
    private readonly emailValidator: EmailValidator,
    private readonly addAccount: AddAccount
  ) {
    this.emailValidator = emailValidator
    this.addAccount = addAccount
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
      const { name, email, password, passwordConfirmation } = httpRequest.body
      for (const filed of requiredFields) {
        if (!httpRequest.body[filed]) return badRequest(new MissingParamError(filed))
      }
      if (password !== passwordConfirmation) return badRequest(new InvalidParamError('passwordConfirmation'))
      const isvalid = this.emailValidator.isValid(email)
      if (!isvalid) return badRequest(new InvalidParamError('email'))
      this.addAccount.add({
        name,
        email,
        password
      })
    } catch (err) {
      return serverError()
    }
  }
}
