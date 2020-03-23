const express = require('express');
const morgan  = require('morgan');

const app = express();

app.use(morgan('dev')); //mount middleware!

app.get('/sum', (req,res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  console.log(sum);
  res.send('sum = ' + sum);
    
});

app.listen(3000, () => {
  console.log('Express server is listening on port 3000!');
});