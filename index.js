
const express=require('express');
const  mongoose  = require('mongoose');
const app=express();
const cors=require('cors');
const TodoRouter=require('./Router/TodoRouter')

app.use(express.json());
// databse
app.use(cors());
connect().catch(err=>console.log(err))

 async function connect(){
  await   mongoose.connect('mongodb://127.0.0.1:27017/todo')
  console.log("database is connectd")
}


app.use('/',TodoRouter.router);



app.listen(8080,(req,res)=>{
    console.log("server is running on port 8080")
})
