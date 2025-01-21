import express from 'express'
import 'express-async-errors'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json())

app.get('/', (request, response) => {
  const query = request.query

  return response.status(404).json({
    message: 'Bora dominar o mundo!',
    name: query.name,
    email: query.email,
  })
})

app.listen(3000, () => {
  console.log('🔥 Server started on port 3000')
})
