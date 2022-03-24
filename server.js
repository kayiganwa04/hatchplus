const express = require('express');
const app = express();
const sgMail = require('@sendgrid/mail')



require('dotenv').config()
sgMail.setApiKey(process.env.SENDGRID_API_KEY)



const PORT = process.env.PORT || 5000

//Middleware 
app.use(express.static('public'));
app.use(express.json())

app.get('/',(req,res)=>{
    res.sendFile(__dirname + 'public/index.html')
})
// app.post('/',(req,res)=>{

// })
app.get('*',(req,res)=>{
  res.sendFile('public/404.html' , { root : __dirname});
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})