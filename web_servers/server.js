var express=require('express');
var app=express();

const fs = require('fs');

const hbs = require('hbs');
app.set('view_engine','hbs');//adding template engine for express

hbs.registerPartials(__dirname + '/views/');
//now we can use the getCurrentYear to get the year anywhere so we don't need to do this at every page
hbs.registerHelper('getCurrentYear',() => {
    return new Date().getFullYear()
})
hbs.registerHelper('screamIt',(text) => {
    return text.toUpperCase();
})
app.use(express.static(__dirname + '/public/'));


//regiseting middleware
app.use((req,res,next) => {
    var now = new Date().toString();
    var log = `${now}: ${req.method} ${req.url}`;
    fs.appendFile('server.log', log + '\n' ,(err) => {
        if(err){
            console.log('Unable to append to server.log.');
        }
    });
    next();
})



app.get('/',function(req,res)
{
    res.send('Hello World!');
});

 app.get('/about', function(req,res)
 {
    res.render('about.hbs',{
        pageTitle: 'About Page',
        currentTime: '24-45-45',
        name: 'Ashwani'
    });
 });
app.get('/home', function(req,res)
{
    res.render('home.hbs');
});

app.listen(3000);