function templatePlay() {
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		if (results==null){
			return null;
		}
		else{
			return results[1] || 0;
		}
	}
	
	if ( $.urlParam('left') != null) {
		var left = $('<img>').attr('src',"http://sytem.fi/pelaajat/" + $.urlParam('left') + ".jpg" );
		left.appendTo('#vasen')
	}

	if ( $.urlParam('right') != null) {
		var right = $('<img>').attr('src',"http://sytem.fi/pelaajat/" + $.urlParam('right') + ".jpg" );
		right.appendTo('#oikea')
	}		
}

function templateStop() {
	
}

