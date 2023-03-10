// import {MongoClient} from 'mongodb'
const {MongoClient}=require('mongodb')

let dbConnection
module.exports={
   connectToDb:(cb)=>{
       MongoClient.connect(process.env.MONGO_URL)
       .then((client)=>{
        dbConnection=client.db()
        return cb()
       }).catch((err)=>{
        console.log(err);
        return cb(err)
       })
    },
    getDb:()=>dbConnection
}