// need in settings:
/* 
hsingame : {
		f0: "Janetzky",
		f1: "RCTIC.eSports<br>Kufdon",
		f2: "0",
		f3: "0",
		f4: "Finals BO7"
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
	//var right = $('<img>').attr('src',"http://sytem.fi/pelaajat/" +  $('#f1').text() + ".jpg" );
	var right = $('<img>').attr('src',"http://sytem.fi/pelaajat/Kufdon.jpg" );
	right.appendTo('#oikea')
}
	

function templateNext() {
	console.log('next');
	if ( $("#f0").hasClass( "active" ) ){
		$("#f1").addClass("active");	
		$("#f0").removeClass("active");	
		$("#rightActive").addClass("barActive");	
		$("#leftActive").removeClass("barActive");	
	}	
	else {
		$("#f0").addClass("active");	
		$("#f1").removeClass("active");	
		$("#leftActive").addClass("barActive");	
		$("#rightActive").removeClass("barActive");	
	}
}


