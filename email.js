const express=require('express')

const bodyParser=require('body-parser');

const nodemailer=require('nodemailer');

const app=express();

const cors=require('cors')
app.use(cors());

app.use(express.json())

app.use(bodyParser.urlencoded({

    extended:true

}))
var transporter = nodemailer.createTransport({
    service: 'Outlook365',
    auth: {
      user: 'kunali.21ads@sonatech.ac.in',
      pass: 'kun@2003'
    },
    tls : { rejectUnauthorized: false }
  });

app.post("/computeMarks",function(req,res){

    let regno=req.body.regno;
    let email=req.body.email;
    let machinelearning=req.body.machinelearning;
    let fullstackdevelopment=req.body.fullstackdevelopment;
    let agile=req.body.agile;
    let totalqualitymanagement=req.body.totalqualitymanagement;
    let mllab=req.body.mllab;
    let fsdlab=req.body.fsdlab;

    let totalmarks=machinelearning+fullstackdevelopment+agile+totalqualitymanagement+mllab+fsdlab;

    let result=(machinelearning>=50 && fullstackdevelopment>=50 && agile>=50 && totalqualitymanagement>=50 && mllab>=50 && fsdlab>=50)?"pass":"fail";

    let avg=totalmarks/6;

    let message="<h1> Hai, "+email+",with Reg No.:"+regno +" ,You exam result is "+result+" Avg is "+avg+"</h1>"

    var mailOptions = {
        from: 'kunali.21ads@sonatech.ac.in', 
        to: email,
        subject: 'Semester Result',
        html: message
      }
  
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
  
  res.send(message)

})


app.listen(5000,function(){
    console.log("Server is running on port number 5000")
})