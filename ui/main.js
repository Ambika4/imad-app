
//change the text

var button = document.getElementById('counter');

button.onclick =function(){
    
    var request = new XMLHttpRequest();
    request.onreadystatechange=function(){
        if (request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
               varcounter= request.responseText;
            }
        }
        
    };
    request.open('GET',"https://kambika1309.imad.hasura-app.io/counter",true);
    request.send(null);
};
    
