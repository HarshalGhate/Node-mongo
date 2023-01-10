const express=require('express')

const app=express()

app.listen(3000,(req,res)=>{
    console.log("Serever Started!!!");
})

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const UserRoutes=require('./Routes/Users')
app.use('/user',UserRoutes)

const mongoose =require('./config/config')

app.post('/',(req,res)=>{
    console.log("req.body=",req.body);
    res.send(req.body)
})