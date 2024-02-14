const express = require('express')
const app = express()
const port = 8000
app.get('/',(req,res) => {
    res.send("This is a sample for CICD Pipeliens")
})

app.listen(port,()=>{
    console.log('Application is listening at http://localhost:${port}')
})

