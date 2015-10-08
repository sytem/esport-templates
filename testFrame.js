$(function() {
	//testinapit
	$( "#testPlay" ).click(function() {
	  console.log('press play on tape');
	  document.getElementById("testbed").contentWindow.play();

	});

	$( "#testStop" ).click(function() {
	  document.getElementById("testbed").contentWindow.stop();
	});

	$( "#testUpdate" ).click(function() {
	// ### need fix to same format caspar uses
	  document.getElementById("testbed").contentWindow.update(escapeHtml(document.getElementById("updateString").value));
	});

	$( "#testNext" ).click(function() {
	  document.getElementById("testbed").contentWindow.next();
	});

	$( "#testRemove" ).click(function() {
	  document.getElementById("testbed").contentWindow.remove();
	});

	// xss-hazard, enable only on private enviroment
	// not possible to clean javascript because need to insert js to templates
	//$( "#testInvoke" ).click(function() {
	//  document.getElementById("testbed").contentWindow.invoke(document.getElementById("invokeString").value);
	//});

	$( "#templateSelect" ).change(function() {
  		$('#testbed').attr('src', document.getElementById("templateSelect").value);
	});

});	

//from http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/

function escapeHtml(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};