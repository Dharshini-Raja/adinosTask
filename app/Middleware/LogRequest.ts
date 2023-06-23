import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LogRequest {
  public async handle({request, response}: HttpContextContract, next: () => Promise<void> ){
    // code for middleware goes here. ABOVE THE NEXT CALL
    const appKey = request.header('app-key')
    if(appKey !== 'oIvkoCrH_PUb1gUEZDKAIyEPcHerWSIV'){
      return response.status(401).json({error: 'Invalid app key'});
    }
    await next()
  }
}
