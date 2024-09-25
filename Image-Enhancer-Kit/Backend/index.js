
const express = require('express');
const app = express();
const ImageKit = require('imagekit');
require("dotenv").config()
const bodyParser = require('body-parser')


app.use(bodyParser.json());


const imagekit = new ImageKit({
  urlEndpoint: process.env.URL_ENDPOINT,
  publicKey: process.env.API_PUBLIC_KEY,
  privateKey: process.env.API_PRIVATE_KEY
});

console.log()



// allow cross-origin requests
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", 
    "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/auth', function (req, res) {
  var result = imagekit.getAuthenticationParameters();
  res.send(result);
});


app.post('/getid',(req,res)=>{
  console.log("Tagging Started...")
  imagekit.updateFileDetails( req.body.fileId, { 
    extensions: [
        {
            name: "google-auto-tagging",
            maxTags: 5,
            minConfidence: 50
        },
        {
            name: "aws-auto-tagging",
            maxTags: 5,
            minConfidence: 50
        }
    ]
}, function(error, result) { 
    if(error) console.log(error);
    else {
      res.json(result);
    }
});
  
})


app.post('/download',(req,res)=>{
  console.log("Tagging Started...")
  let url = req.path_url;

});

app.listen(3001, function () {
  console.log('Live at Port 3001');
});