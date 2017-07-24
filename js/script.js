//var removeApartID = function (apart) {
//    var apartElem = document.getElementById(apart);
//    document.body.innerHTML=('');
//    document.body.appendChild(apartElem);
//}
//removeApartID('weather-daily');
//var news=document.getElementById('weather-news');
//var weather= document.getElementById('weather-daily');
//var weather=weather.parentElement.removeChild(weather);
//var news=news.parentElement.removeChild(news);




function showMsg() {
    alert('hallo');
}
var first = document.getElementsByName('first');
first[0].addEventListener('click', showMsg);



function showConsole() {
    console.log('hallo');
}
var second = document.getElementsByName('second');
second[0].addEventListener('click', showConsole);




var parentElem = document.body;

function addSpan() {
    var span = document.createElement('span');
    span.className = "alert alert-success";
    span.innerHTML = "Hello";

    document.body.appendChild(span);
}

var third = document.getElementsByName('third');
third[0].addEventListener('click', addSpan);




function setValue() {
    var prom = prompt('write something');
    document.body.children[3].value = prom;
}
var fourth = document.getElementsByName('fourth');
fourth[0].addEventListener('click', setValue);



function HdeSeventh(){
	document.body.children[6].style.display='none';
}

var fifth = document.getElementsByName('fifth');
fifth[0].addEventListener('click', HdeSeventh);


function showBut(){
	document.body.children[6].style.display='inline-block';
}

var sixth = document.getElementsByName('sixth');
sixth[0].addEventListener('click',showBut );


function dellAll(){
	var inp = document.querySelectorAll('input');
    for(i=0;i<inp.length;i++){
		inp[i].style.display='none';
     }
}
var seventh = document.getElementsByName('seventh');
seventh[0].addEventListener('click', dellAll);

