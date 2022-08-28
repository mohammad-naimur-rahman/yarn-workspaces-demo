const express = require('express')

const app = express()
const port = process.env.PORT || 5000

app.listen(port, () => {
  console.log('listening on port' + port)
})

app.get('/', (req, res) => {
  res.send('I am on')
})

app.get('/data', (req, res) => {
  res.json({ data: 'DEMO DATA' })
})
