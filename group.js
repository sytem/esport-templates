$(function() {
	 console.log( "ready!" );

	// parsitaan json
	
	// lataus maailmalta http://api.jquery.com/jQuery.getJSON/
	var JSONurl = "https://tournaments.insomnia.fi/tournaments/starcraft-ii/groups/index.json"
	

	var bracket = "";
	$.getJSON( JSONurl, function(bracket){ 

	//make grid
	var output = "<table> <tr> <td id=\"8-1\"></td> <td id=\"4-1\" rowspan=2></td><td id=\"2-1\" rowspan=4></td> </tr>\n";
	output += "<tr> <td id=\"8-2\"></td></tr>\n";
	output += "<tr> <td id=\"8-3\"></td> <td id=\"4-2\" rowspan=2></td>  </tr>\n";
	output += "<tr> <td id=\"8-4\"></td></tr>\n";
	output += "</table>" ;
	document.getElementById("boxContent").innerHTML = output;

	$.each( bracket.Matches[0], function( key, value ) {
    	//console.log( value );

    	var id = value.Match.round_of + "-" + value.Match.row ;
    	console.log(id);
    	var cellOut = value.Contestant1.name + " : ";

    	if ( value[0].played == "1") {
    		cellOut += value.MatchContestant1.score +  "\n";
    	}
		cellOut += "<br>" + value.Contestant2.name + " : ";

    	if ( value[0].played == "1") {
    		cellOut += value.MatchContestant2.score + "\n";
    	}

    	document.getElementById(id).innerHTML = cellOut;


	});
	
	});
});	


function templatePlay() {
	document.getElementById('box').className = 'animationMoveIn';
	document.getElementById('boxContent').className = 'animationFadeIn';	
}

function templateStop() {
	document.getElementById('box').className = 'animationMoveOut';
	document.getElementById('boxContent').className = 'animationFadeOut';
}

