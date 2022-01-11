export class ServerError extends Error {
  constructor () {
    super('Invernal Server Error')
    this.name = 'ServerError'
  }
}
