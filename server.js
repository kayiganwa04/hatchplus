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

    


app.post('/',function(req,res,next){
    console.log(req.body);
    const msg = {
        to: 'eddycletis90@gmail.com', // Change to your recipient
        from: 'kayiganwa04@gmail.com', // Change to your verified sender
        subject: `${req.body.subject}`,
        text: 'and easy to do anywhere, even with Node.js',
        html: `${req.body.message}`,
      }
      sgMail
        .send(msg)
        .then(() => {
          console.log('Email sent successfully');
        })
        .catch((error) => {
          console.error(error)
        })

})
app.get('*',(req,res)=>{
  res.sendFile('public/404.html' , { root : __dirname});
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})