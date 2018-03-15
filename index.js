'use strict'

const express = require('express');
const app = express();
//
app.use(express.static('views'));
//

app.get('/', (req, res) =>{
  res.sendfile(__dirname+'/views/index.html');
});

app.listen(process.env.PORT || 2500, () => {
  console.log('Server Frontend Runing');
});