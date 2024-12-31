const express= require("express")
const app=express()
app.post("/", (req, res)=>{
    res.send("welcome") 
})
app.get("/", (req, res)=>{
    res.send("<p> welcome </p>") 
})



app.listen(3000,()=>
    { console.log("app running")}   
      
    );
    
