export class SignUpController {
  async handle (httpRequest: any): Promise<any> {
    if (!httpRequest.body.name) {
      return {
        statusCode: 400,
        body: new Error('Missin param: name')
      }
    }
    if (!httpRequest.body.email) {
      return {
        statusCode: 400,
        body: new Error('Missin param: email')
      }
    }
  }
}
