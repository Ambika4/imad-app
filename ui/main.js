console.log('Loaded!');
//change the text

var button = document.getElementById('counter');
var counter =0;
button.onclick =function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if(request.readystate=== XMLhttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span= document.getElementById('count');
                 span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://kambika1309.imad.hasura-app.io/counter');
    request.send(null);
    
};