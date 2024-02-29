const express =  require("express")
const path = require("path")

const app = express()

const PORT = process.env.PORT || 3000

app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname , "./index.html"))
})
app.get("/name",(req,res)=>{
    res.sendFile(path.join(__dirname , "./method.html"))
})

app.listen(PORT, ()=>{
    console.log(`app listening to port :${PORT}`)
})