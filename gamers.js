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
		var left = $('<img>').attr('src',"http://elderx.fi/lan/insomnia-xvii/ins-hs/" + $.urlParam('left') + ".JPG" );
		left.appendTo('#vasen')
	}

	if ( $.urlParam('right') != null) {
		var right = $('<img>').attr('src',"http://elderx.fi/lan/insomnia-xvii/ins-hs/" + $.urlParam('right') + ".JPG" );
		right.appendTo('#oikea')
	}		
}

function templateStop() {
	
}

