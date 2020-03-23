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
  for(let i = 0; i < text.length; i++){
    charcode = (text[i].charCodeAt() + shift);
    result += String.fromCharCode(charcode);
  }
  res.send('this is the result: ' + result);
});

//third drill
app.get('/lotto', (req,res)=>{
  const numbers =req.query.numbers.map(number => Number(number));
  let newArray = [];
  let randomArray = [];
  for(let i = 0; i < 6;i++){
    randomArray.push(Math.floor(Math.random()*20 +1));
  }
  for(let i = 0; i < numbers.length; i++){
    if(randomArray.includes(numbers[i])){
      newArray.push(numbers[i]);
    }
  }
  console.log('user array' +numbers);
  console.log('random array' + randomArray);
  console.log('matching array :' + newArray);
  if(newArray.length === 6){
    res.send('Congratulations! You win $100!');
  } else if(newArray.length >= 5){
    res.send('Congratulations, you win a free ticket');
  } else{
    res.send('Sorry, you lose');
  }
});


app.listen(3000, () => {
  console.log('Express server is listening on port 3000!');
});