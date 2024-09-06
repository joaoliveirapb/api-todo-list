import { FastifyInstance } from 'fastify'

export async function tasksRoutes(app: FastifyInstance) {
  app.get('/', async () => {
    return 'Hello Tasks!'
  })
}
