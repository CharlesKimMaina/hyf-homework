const express = require("express");
const app = express();
const port =  process.env.API_PORT || 3000 ;

app.use(express.json());
app.use(  express.urlencoded({extended: true})
);


app.get("/calculator/add", (req, res) =>{
  const firstNum = parseInt(req.query.firstNum);
  const secondNum = parseInt(req.query.secondNum);
  const sum = firstNum + secondNum;
  res.send(`The sum is ${sum}`);
}) 

app.get("/calculator/sub", (req, res) =>{
  const firstNum = parseInt(req.query.firstNum);
  const secondNum = parseInt(req.query.secondNum);
  const subtraction = firstNum - secondNum;
  res.send(`The subtraction is ${subtraction}`);
}) 

app.get("/calculator/div", (req, res) =>{
  const firstNum = parseInt(req.query.firstNum);
  const secondNum = parseInt(req.query.secondNum);
  const division = firstNum/secondNum;
  res.send(`The division is ${division}`);
}) 

///calculator/multiply?firstParam=1&secondParam=2
app.get("/calculator/mul", (req, res) =>{
  const firstNum = parseInt(req.query.firstNum);
  const secondNum = parseInt(req.query.secondNum);
  const multiplication = firstNum * secondNum;
  res.send(`The product is ${multiplication}`);
}) 

//Working with more than 2 params at a go.

///calculator/add?firstParam=1&secondParam=2&secondParam=4
app.get("/add", (req,res)=>{
  const num = req.query   
  const [first,second,third ] = [num.first,num.second,num.third]
  const numbers = [Number(first), Number(second),Number(third)]
  
  const sum = numbers.reduce((acc, curr)=>{
  return acc + curr
  },1)
  
      res.send([sum])
      console.log(numbers);
  })


  ///calculator/multiply?firstParam=1&secondParam=2&secondParam=4
  app.get("/multi", (req,res)=>{
    const num = req.query   
    const [first,second,third ] = [num.first,num.second,num.third]
    const numbers = [Number(first), Number(second),Number(third)]
    
    const multiProducts = numbers.reduce((acc, curr)=>{
    return acc * curr
    },1)
    
        res.send([multiProducts])
        console.log(numbers);
    })
  

// POST- /calculator/multiply with the following key values: firstParam=1, secondParam=2. 
    app.post("/calculator/multiply", (req,res)=>{
      const num = req.body   
      const [first,second,third ] = [num.first,num.second,num.third]
      const numbers = [Number(first), Number(second),Number(third)]
      
      const multiProducts = numbers.reduce((acc, curr)=>{
      return acc * curr
      },1)      
          res.json([multiProducts])
          console.log(numbers);
      })



      //POST- /calculator/division with the following key values: firstParam=1, secondParam=2.
      app.post("/calculator/division", (req,res)=>{
        const num = req.body   
        const [first,second] = [num.first,num.second]
        const numbers = [Number(first), Number(second)]
        
        const dividedProducts = first/second        
            res.json([dividedProducts])
            console.log(numbers);
        })


app.listen(port, () => console.log(`Server listening on port ${port}!`));
