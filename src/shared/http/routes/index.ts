import { Router } from 'express'

const routes = Router()

routes.get('/', (request, response) => {
  const query = request.query

  return response.json({
    message: 'Bora dominar o mundo!',
    name: query.name,
    email: query.email,
  })
})

export { routes }
