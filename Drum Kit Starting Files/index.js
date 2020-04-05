
//this.style.color='blue';
// var audio=new Audio('sounds/crash.mp3');
//   var x=document.querySelector(".a");
// for(var i=0;i<7;i++){
// document.querySelectorAll('.drum')[i].addEventListener("click",function(){
//
// if(this.textContent=="w"){
//   var audio=new Audio('sounds/crash.mp3');
//   this.onkeypress = function(){myScript};
//   audio.play();
// }
// if(this.textContent=="a"){
//   var audio=new Audio('sounds/kick-bass.mp3');
//   audio.play();
// }
// if(this.textContent=="s"){
//   var audio=new Audio('sounds/snare.mp3');
//   audio.play();
// }
// if(this.textContent=="d"){
//   var audio=new Audio('sounds/tom-1.mp3');
//   audio.play();
// }
// if(this.textContent=="j"){
//   var audio=new Audio('sounds/tom-2.mp3');
//   audio.play();
// }
// if(this.textContent=="k"){
//   var audio=new Audio('sounds/tom-3.mp3');
//   audio.play();
// }
// if(this.textContent=="l"){
//   var audio=new Audio('sounds/tom-4.mp3');
//   audio.play();
// }
// });}


for(var i=0;i<7;i++){
document.querySelectorAll('.drum')[i].addEventListener("click", function() {
music(this.textContent);
pressAnimation(this.textContent);
});}

document.addEventListener("keypress", function(event) {
music(event.key);
pressAnimation(event.key);
});


function music(key){

  switch (key) {
    case "w":
    var audio=new Audio('sounds/crash.mp3');
      audio.play();
      break;

    case 'a':
    var audio=new Audio('sounds/kick-bass.mp3');
    audio.play();
      break;

    case 's':
    var audio=new Audio('sounds/snare.mp3');
    audio.play();
      break;
   case "d":
   var audio=new Audio('sounds/tom-1.mp3');
   audio.play();
     break;
  case "j":
  var audio=new Audio('sounds/tom-2.mp3');
  audio.play();
    break;
  case "k":
  var audio=new Audio('sounds/tom-3.mp3');
  audio.play();
    break;

   case "l":
   var audio=new Audio('sounds/tom-4.mp3');
   audio.play();

     break;

}}


function pressAnimation(button){
  var activeButton=document.querySelector("."+button);
  activeButton.classList.add("pressed");
  setTimeout(function(){ activeButton.classList.remove("pressed"); },100);

}
