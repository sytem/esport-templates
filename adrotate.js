$(function(){
	//from: http://snook.ca/archives/javascript/simplest-jquery-slideshow by Jonathan Snook
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      10000);
});

function templatePlay() {
	
}

function templateStop() {
	//hide
	document.getElementById('fadein').style.setProperty('display','none','');
}

