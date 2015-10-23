$(function() {
	 console.log( "ready!" );
	 
});

	
// need: groupID: 9, in settings

function templatePlay() {
	 var url = "https://tournaments.insomnia.fi/tournaments/starcraft-ii/groups/" + settings.groupID;
	 var headerUrl = url + " h2";
	 //var contentUrl =  url + " .brackets_view";
	 var contentUrl =  url + " .group_scores";
	 console.log(contentUrl);

	$("#header").load(headerUrl);
    $("#boxContent").load(contentUrl, function() {
 		$("td img").remove();
 		$("tr :nth-child(5)").remove();
 		$("tr :nth-child(6)").remove();
 		$("tr :nth-child(7)").remove();
 		$("tr :nth-child(8)").remove();
		$("tr :nth-child(1)").addClass("pelaaja");

	});



	document.getElementById('box').className = 'animationMoveIn';
	document.getElementById('boxContent').className = 'animationFadeIn';	
}

function templateStop() {
	document.getElementById('box').className = 'animationMoveOut';
	document.getElementById('boxContent').className = 'animationFadeOut';
}

