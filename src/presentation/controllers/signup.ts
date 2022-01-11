import { InvalidParamError, MissingParamError } from '../errors'
import { Controller, EmailValidator, HttpRequest, HttpResponse } from '../protocols'
import { badRequest } from '../helpers'
export class SignUpController implements Controller {
  constructor (private readonly emailValidator: EmailValidator) {
    this.emailValidator = emailValidator
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    const requiredFields = ['name', 'email', 'password', 'passwordConfirmation']
    for (const filed of requiredFields) {
      if (!httpRequest.body[filed]) {
        return badRequest(new MissingParamError(filed))
      }
    }
    const isvalid = this.emailValidator.isValid(httpRequest.body.email)
    if (!isvalid) {
      return badRequest(new InvalidParamError('email'))
    }
  }
}
