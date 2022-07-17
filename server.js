const express =require('express');
const path=require('path');
const app=express();
app.use(express.static('./dist/elearning'));
app.get('/*',(req,res)=>res.sendFile('index.html',{root:'dist/elearning'}),
);
app.listen(process.env.PORT || 8080);