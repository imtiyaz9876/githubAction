const express=require("express");

    const app = express();
    
    app.get("/",async(req,res)=>{
        res.send({
            message:"api is working fine+++++++ "
        })
    })


    const PORT=3000
    
    app.listen(PORT,()=>{
        console.log(`server is listing on port ${PORT}`)
    })