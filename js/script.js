function showMsg(){
   alert('hallo');
}
var first = document.getElementsByName('first');
first[0].addEventListener('click',showMsg);



function showConsole(){
   console.log('hallo');
}
var second = document.getElementsByName('second');
second[0].addEventListener('click',showConsole);




var parentElem = document.body;
function addSpan(){
 var span = document.createElement('span');
  span.className = "alert alert-success";
  span.innerHTML = "Hello";

  document.body.appendChild(span);
}

var third = document.getElementsByName('third');
third[0].addEventListener('click',addSpan);