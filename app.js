let express = require('express');

let app = express();

app.use(express.json());
//Adding a log to check if my reposity is getting updated or not.
app.get('/api/data',(req,res)=>{
    console.log(req.body);
    res.json({name : req.body.name, surename : req.body.titte});
})

app.listen(3000,()=>{
    console.log(`Server Listening at http://localhost:3000`);
})