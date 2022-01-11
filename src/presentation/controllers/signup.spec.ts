import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  const name = 'any_name'
  const email = 'any_email@email.com'
  const password = 'any_password'
  const passwordConfirmation = 'any_password'

  test('Should return 400 if no name is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email,
        password,
        passwordConfirmation
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missin param: name'))
  })

  test('Should return 400 if no name is provided', async () => {
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        name,
        password,
        passwordConfirmation
      }
    }
    const httpResponse = await sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('Missin param: email'))
  })
})
