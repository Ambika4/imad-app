console.log('Loaded!');
//change the text
var element = document.getElementById('main-text');
element.innerHTML='New value';
//now move  the element

var element = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft + 10;
    madi.style.marginLeft=marginLeft + 'px';
}
madi.onclick =function()
{
    var interval = setinterval(moveRight,100);
};