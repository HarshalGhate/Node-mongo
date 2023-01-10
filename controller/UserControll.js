const express =require('express')

const USER = require('../model/user')

exports.USERPost=async (req,res)=>{
    const data=  new USER(req.body);
    const d = await data.save()
    res.send("Data Successfully")

}

exports.get = async (req,res)=>{
    // const data= new USER(req.body)
    const d=  await USER.find()
    res.send(d)
}

exports.getUserById = async (req,res)=>{
    const d = await USER.find(req.params)
    res.send(d)
}

exports.delete = async (req,res)=>{
    const d = await USER.deleteOne(req.params)
    res.send("Record Deleted !!!")
}

