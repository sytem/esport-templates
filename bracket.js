$(function() {
	 console.log( "ready!" );

	// parsitaan json
	//var bracket = jQuery.parseJSON('{"Bracket":{"id":"26","name":"Playoffs","size":"8","best_of_params":"grand_final:5;ro2:7;ro4:5;ro8:3;ro16:3;ro32:1;ro64:1;ro128:1;bronze:3;ro2s2:3;ro2s1:3;ro4s2:3;ro4s1:3;ro8s2:3;ro8s1:3;ro16s2:1;ro16s1:1;ro32s2:1;ro32s1:1;ro64s2:1;ro64s1:1;","public":"1","league_id":"2","related_bracket_id":null,"bracket_type_id":"1"},"League":{"id":"2","name":"ASUS ROG Summer 2015 StarCraft II","controller":"tournaments","slug":"asus-rog-starcraft-ii-summer-2015"},"OwnerBracket":{"id":null,"name":null},"RelatedBracket":{"id":null,"name":null,"size":null,"best_of_params":null,"public":null,"league_id":null,"related_bracket_id":null,"bracket_type_id":null},"Matches":[[{"Match":{"id":"2084","round_of":"8","row":"1","stage":"1","bye":"0"},"MatchContestant1":{"score":"2","contestant_id":"2573"},"MatchContestant2":{"score":"0","contestant_id":"2804"},"Contestant1":{"id":"2573","name":"HyuN","country_iso":"KR"},"Contestant2":{"id":"2804","name":"TRUE","country_iso":"KR"},"0":{"played":"1"}},{"Match":{"id":"2085","round_of":"8","row":"2","stage":"1","bye":"0"},"MatchContestant1":{"score":"2","contestant_id":"1649"},"MatchContestant2":{"score":"0","contestant_id":"1925"},"Contestant1":{"id":"1649","name":"PtitDrogo","country_iso":"FR"},"Contestant2":{"id":"1925","name":"Apocalypse","country_iso":"KR"},"0":{"played":"1"}},{"Match":{"id":"2086","round_of":"8","row":"3","stage":"1","bye":"0"},"MatchContestant1":{"score":"1","contestant_id":"2809"},"MatchContestant2":{"score":"2","contestant_id":"1650"},"Contestant1":{"id":"2809","name":"Fantasy","country_iso":"KR"},"Contestant2":{"id":"1650","name":"BBoongBBoong","country_iso":"KR"},"0":{"played":"1"}},{"Match":{"id":"2087","round_of":"8","row":"4","stage":"1","bye":"0"},"MatchContestant1":{"score":"2","contestant_id":"2762"},"MatchContestant2":{"score":"0","contestant_id":"1923"},"Contestant1":{"id":"2762","name":"Losira","country_iso":"KR"},"Contestant2":{"id":"1923","name":"KeeN","country_iso":"KR"},"0":{"played":"1"}},{"Match":{"id":"2088","round_of":"4","row":"1","stage":"1","bye":null},"MatchContestant1":{"score":"0","contestant_id":"2573"},"MatchContestant2":{"score":"3","contestant_id":"1649"},"Contestant1":{"id":"2573","name":"HyuN","country_iso":"KR"},"Contestant2":{"id":"1649","name":"PtitDrogo","country_iso":"FR"},"0":{"played":"1"}},{"Match":{"id":"2089","round_of":"4","row":"2","stage":"1","bye":null},"MatchContestant1":{"score":"1","contestant_id":"1650"},"MatchContestant2":{"score":"3","contestant_id":"2762"},"Contestant1":{"id":"1650","name":"BBoongBBoong","country_iso":"KR"},"Contestant2":{"id":"2762","name":"Losira","country_iso":"KR"},"0":{"played":"1"}},{"Match":{"id":"2090","round_of":"2","row":"1","stage":"1","bye":null},"MatchContestant1":{"score":"2","contestant_id":"1649"},"MatchContestant2":{"score":"4","contestant_id":"2762"},"Contestant1":{"id":"1649","name":"PtitDrogo","country_iso":"FR"},"Contestant2":{"id":"2762","name":"Losira","country_iso":"KR"},"0":{"played":"1"}}]]}');
	
	// lataus maailmalta http://api.jquery.com/jQuery.getJSON/
	var JSONurl = "https://tournaments.insomnia.fi/brackets/view/15/ro:8.json"
	//var JSONurl = "http://tournaments.peliliiga.fi/summer15/tournaments/asus-rog-starcraft-ii-summer-2015/brackets/26.json"

	var bracket = "";
	$.getJSON( JSONurl, function(bracket){ 

	//make grid
	var output = "<table> <tr> <td id=\"8-1\"></td> <td id=\"4-1\"></td><td id=\"2-1\"></td> </tr>\n";
	output += "<tr> <td id=\"8-2\"></td> <td id=\"4-2\"></td> </tr>\n";
	output += "<tr> <td id=\"8-3\"></td></tr>\n";
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

