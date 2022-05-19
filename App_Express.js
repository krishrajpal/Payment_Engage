const express = require('express');
//Express App
const app = express();
/*Register View Engine*/
app.set('view engine', 'ejs');
app.listen(3000); /*Listening for Requests on localhost:3000*/
app.get('/',(req,res)=>{
    res.render('Index_Web');
});
app.get('/about',(req,res)=>{
    res.render('About_Web');
});
app.get('/blogs/create',(req,res)=>{
    res.render('create');
});
app.use((req,res)=>{
   res.status(404).render('Error_Web');
});