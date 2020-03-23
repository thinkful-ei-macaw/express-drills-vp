const express = require('express');
const morgan  = require('morgan');

const app = express();

app.use(morgan('dev')); //mount middleware!
//first drill
app.get('/sum', (req,res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);
  const sum = a + b;
  res.send('sum = ' + sum);
});

//second drill
app.get('/cipher', (req,res)=>{
  const text = req.query.text.toLowerCase();
  const shift = Number(req.query.shift);
  let charcode = 0;
  let result = '';
  console.log(req.query.text, req.query.shift);
  for(let i = 0; i < text.length; i++){
    charcode = (text[i].charCodeAt() + shift);
    result += String.fromCharCode(charcode);
  }
  res.send('this is the result: ' + result);
});


app.listen(3000, () => {
  console.log('Express server is listening on port 3000!');
});