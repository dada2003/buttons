function showMsg(){
   alert('hallo');
}
var first = document.getElementsByName('first');
first[0].addEventListener('click',showMsg);
