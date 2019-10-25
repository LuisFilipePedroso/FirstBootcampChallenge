import server from './app'

const PORT = 3333

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
