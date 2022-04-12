const express=require('express')
const port=process.env.PORT|| 8000
const path = require('path')
const app = express()

app.get("/",(req,res)=>{
    res.send("add")
});


app.listen(port,()=>{
    console.log("success")
})