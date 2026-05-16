require("dotenv").config()
const express=require ('express')
const app= express()

app.use(express.json())
const port=process.env.PORT ||3000

//simple logger
if (process.env.NODE_ENV==="dev"){
    app.use((req,res,next)=>{
    console.log(`${req.method} ${req.originalUrl}`);
    next()
    }
)}

app.get("/test",(req,res)=>{
    res.json({msg:"test route"})
})


const connectedDB=require('./config/db')
connectedDB();










app.listen(port,()=>{
    console.log(`app is running ${port}  `);
    
})