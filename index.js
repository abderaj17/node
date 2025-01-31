const express = require('express')

const app = express();
const PORT = 8000;


app.get('/', (req, res)=>{
   res.end("Hello world !!!")
})

app.get('/about', (req, res)=>{
    res.status
   res.send("<h1>Hello from about page !!!</h1>")
})

app.listen(PORT, ()=>{
    console.log(`listening on express server on port ${PORT}`);

})
