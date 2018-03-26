const express = require('express');
const app = express();
//
app.use(express.static('assets'));
//
app.get('/', (req, res) =>{
  res.sendfile(__dirname+'/assets/pages/index.html');
});
app.listen(process.env.PORT || 2500, () => {

  console.log('Server Frontend Runing');

});
