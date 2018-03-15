'use strict'

const express = require('express');
const app = express();
//
app.use(express.static('Assets'));
//

app.get('/', (req, res) =>{
  res.sendfile(__dirname+'/Assets/pages/index.html');
});

app.listen(process.env.PORT || 2500, () => {
  console.log('Server Frontend Runing');
});