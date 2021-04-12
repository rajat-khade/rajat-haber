var scroll = window.requestAnimationFrame || function(callback){
    winow.setTimeout(callback,1000/60);
};
var elementToShow= document.querySelectorAll('.show-on-scroll');
function loop(){
  elementToShow.forEach(function(element){
    if(isElementInViewport(element)){
      element.classList.add('is-visible');
    } else {
      element.classList.remove('is-visible');
    }
  });
  scroll(loop);
}
