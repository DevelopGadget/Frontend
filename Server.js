'use strict'

const express = require('express');
const path = require('path');
const app = express();
//
app.use(express.static(path.join(__dirname, 'Assets')));
//
app.get('/', (req, res) =>{
  res.sendfile(__dirname+'/Assets/pages/index.html');
});
app.listen(process.env.PORT || 2500, () => {
  console.log('Server Frontend Runing');
});