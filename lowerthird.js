function templatePlay() {
	document.getElementById('box').className = 'animationMoveIn';
	document.getElementById('boxContent').className = 'animationFadeIn';	
}

function templateStop() {
	document.getElementById('box').className = 'animationMoveOut';
	document.getElementById('boxContent').className = 'animationFadeOut';
}
