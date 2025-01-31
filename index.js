const express = require('express')

const app = express();
const PORT = 8000;


app.get('/', (req, res)=>{
   res.end("Hello world !!!")
})

app.listen(PORT, ()=>{
    console.log(`listening on express server on port ${PORT}`);

})
