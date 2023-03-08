// import express from 'express'
// import {connectedToDb,getDb} from './mongoDB/connectDB.js' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import

const express=require('express')
const {connectToDb,getDb}=require('./mongoDB/connectDB.js')
const cors = require('cors')
require('dotenv').config()

const app=express()
 
app.use(cors())

/// db connection
let db
connectToDb((err)=>{
if(!err){
    app.listen(7090,()=>{
        console.log("Port Listen to http://localhost:7090")
    })
    db=getDb()
    console.log('connect to db');
}
 })
//Port


app.get('/products',(req,res)=>{
    let product=[]
    db.collection('products')
    .find()
    .sort({name:1})
    .forEach((prod)=>product.push(prod))
    .then(()=>{
        res.status(200).json(product)
    }).catch(()=>{
        res.status(500).json({error:'could Not Fetch'})

    })
//  res.json({message:"welcome to api"})
})