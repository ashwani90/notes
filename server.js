const express = require('express');
const app = express();


app.get('/',function(req,res){
   res.send('Hello This was called');
});


app.listen(3000);