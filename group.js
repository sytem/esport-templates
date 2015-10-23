$(function() {
	 console.log( "ready!" );
	 

});

	


function templatePlay() {

	});

    
function update(xml) {
	console.log('update1');    

	 // = 8;
	 f0 = valueList.evaluate("/templateData/componentData[@id='f0']/data/@value", valueList, null, XPathResult.STRING_TYPE, null).stringValue;
	 console.log(f0);

	 var url = "https://tournaments.insomnia.fi/tournaments/starcraft-ii/groups/" + f0;
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

};

	document.getElementById('box').className = 'animationMoveIn';
	document.getElementById('boxContent').className = 'animationFadeIn';	
}

function templateStop() {
	document.getElementById('box').className = 'animationMoveOut';
	document.getElementById('boxContent').className = 'animationFadeOut';
}

