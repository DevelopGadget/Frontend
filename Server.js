const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'Assets')))
  .set('Pages', path.join(__dirname, '/Assets/Pages'))
  .get('/', (req, res) => res.sendfile(__dirname+'/Assets/Pages/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
