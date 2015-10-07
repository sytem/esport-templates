$(function() {
	 // console.log('load');
	 //debug at browser
	 play();
});	

/* These are JavaScript commands that can be called throught the AMCP interface 
Command examples are based on the assumption that demo.html is running on channel 1-1
I.e. PLAY 1-1 DEMO
*/
		
// CALL 1-1 PLAY
function play() {
	//console.log('play');
	document.getElementById("demo").innerHTML="play";

	//check if we have included template-specific function from another file
  	if (typeof templatePlay == 'function') { 
		templatePlay(); 
	}
}
// CALL 1-1 STOP
function stop() {

 	document.getElementById("demo").innerHTML="stop";
	//check if we have included template-specific function from another file
  	if (typeof templateStop == 'function') { 
		templateStop(); 
	}
}


function update(xml) {
	console.log('update1');
    var parser = new DOMParser();
    var valueList = parser.parseFromString(xml, "text/xml");
	// ### make loop here

    f0 = valueList.evaluate("/templateData/componentData[@id='f0']/data/@value", valueList, null, XPathResult.STRING_TYPE, null).stringValue;
	f1 = valueList.evaluate("/templateData/componentData[@id='f1']/data/@value", valueList, null, XPathResult.STRING_TYPE, null).stringValue;
	f2 = valueList.evaluate("/templateData/componentData[@id='f2']/data/@value", valueList, null, XPathResult.STRING_TYPE, null).stringValue;
	f3 = valueList.evaluate("/templateData/componentData[@id='f3']/data/@value", valueList, null, XPathResult.STRING_TYPE, null).stringValue;	

	// ### check if div exists
	if (document.getElementById('f0') !=null) {
		document.getElementById("f0").innerHTML=f0; 
	}	
    if (document.getElementById('f1') !=null) {
		document.getElementById("f1").innerHTML=f1; 
	}	
	if (document.getElementById('f2') !=null) {
		document.getElementById("f2").innerHTML=f2; 
	}	
	if (document.getElementById('f3') !=null) {
		document.getElementById("f3").innerHTML=f3; 
	}	

}


// CALL 1-1 NEXT
function next() {
	document.getElementById("demo").innerHTML="next";
}
// CALL 1-1 REMOVE
function remove() {
  document.getElementById("demo").innerHTML="remove";
}

// CALL 1-1 INVOKE STRING
function invoke(str) {
  eval(str);
}
// CALL 1-1 INVOKE "otherFunction('testing');"
function otherFunction(str) {
  document.getElementById("demo").innerHTML="Other function called with: " + str;
}
		
// Send a log message to CasparCG
//console.log('This message will end up in CCG logs');
//alert('Alerts do also');		 		 			 		 											 /* Alerts also end up in CCG logs */

// Call a function in CCG through JS
if(!window.AMCP) {AMCP = function(str){ console.log(str); };}			 /* This creates a dummy window.AMCP function so testing in regular browsers doesn't throw an error */
//window.AMCP('This is a AMCP log message from a HTML template');

// Define onEnterFrame() to minimize errors in CCG logs
function onEnterFrame() {}
