// need in settings:
/* 
hsingame : {
		f0: "Torso",
		f1: "norage",
		f2: "Final B07"
	},
*/	

//fix to browser
function templatePlay() {
	templateUpdate();
}


function templateUpdate() {
	//var left = $('<img>').attr('src',"http://elderx.fi/lan/insomnia-xvii/ins-hs/" + settings.hsLeft + ".JPG" );
	var left = $('<img>').attr('src',"http://sytem.fi/pelaajat/" + $('#f0').text() + ".jpg" );
	left.appendTo('#vasen')

	//var right = $('<img>').attr('src',"http://elderx.fi/lan/insomnia-xvii/ins-hs/" +  settings.hsRight + ".JPG" );
	var right = $('<img>').attr('src',"http://sytem.fi/pelaajat/" +  $('#f1').text() + ".jpg" );
	right.appendTo('#oikea')
}
	

function templateNext() {
	console.log('next');
	$("#vasen").addClass("active");	
}


