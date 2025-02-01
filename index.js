const express = require('express')

const {getBlogs} = require('./blogDataHandler');

const app = express();
const PORT = process.env.PORT;


app.get('/', (req, res)=>{
   res.end("Hello world !!!")
})

app.get('/about', (req, res)=>{
    res.status(404)
   res.send("<h1>Hello from about page !!!</h1>")
})
app.get('/getBlogs', (req, res))

app.listen(PORT, ()=>{
    console.log(`listening on express server on port ${PORT}`);

})
