var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;



var app = express();
app.use(morgan('combined'));
/*
var articleOne={
    title:'Article One | Ambika Kumari',
    heading:'Article One ',
    date:'2nd sept 2017',
    content : ` <p> 
        This is first content.I m in 3rd year . A lot of things I need to do to make my life better .I m interseted in coding field .It takes time but at the end result is awesome.
        </p>
         <p> 
        This is first content.I m in 3rd year . A lot of things I need to do to make my life better .I m interseted in coding field .It takes time but at the end result is awesome.
        </p>
         <p> 
        This is first content.I m in 3rd year . A lot of things I need to do to make my life better .I m interseted in coding field .It takes time but at the end result is awesome.
        </p> 
        `
};
function createTemplate(data){
    var title =data.title;
    var heading = data.heading;
    var date = data.date;
    var content =data.content;
var htmlTemplate=`
<html>
  <head>
     <tiltle>
       ${title}
       </title>
       <meta name="viewport" content="width-device-width,initial-scale-1"/>
        <link href="/ui/style.css" rel="stylesheet"/>
        </head>
        <body>
          <div class="container">
          <div>
          <a href ="/">Home</a>
          </div>
          <hr/>
          <h3>
          ${heading}
          </h3>
          <div>
          ${date}
          </div>
          <div>
          ${content}
          </div>
          </body>
          </html>
          `;
          return htmlTemplate;
}
`*/
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});



var counter=0;
app.get('/counter', function (req, res) {
  counter = counter +1;
  res.send(counter.toString());
});


var names = [];
app.get('/submit-name/',function (req, res){
    //get the name for the request
    var name = req.query.name;
    
    names.push(name);
    //JSON
    res.send(JSON.stringify(names));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80
var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
