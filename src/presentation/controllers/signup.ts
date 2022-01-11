export class SignUpController {
  async handle (httpRequest: any): Promise<any> {
    return {
      statusCode: 400,
      body: new Error('Missin param: name')
    }
  }
}
