const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'Assets')))
  .set('Pages', path.join(__dirname, '/Assets/Pages'))
  .set('js', path.join(__dirname, '/Assets/js'))
  .set('Css', path.join(__dirname, '/Assets/Css'))
  .set('font', path.join(__dirname, '/Assets/font'))
  .set('scss', path.join(__dirname, '/Assets/scss'))
  .get('/', (req, res) => res.sendfile(__dirname+'/Assets/Pages/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
