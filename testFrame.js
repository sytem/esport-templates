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
	  document.getElementById("testbed").contentWindow.update(document.getElementById("updateString").value);
	});

	$( "#testNext" ).click(function() {
	  document.getElementById("testbed").contentWindow.next();
	});

	$( "#testRemove" ).click(function() {
	  document.getElementById("testbed").contentWindow.remove();
	});

	$( "#testInvoke" ).click(function() {
	  document.getElementById("testbed").contentWindow.invoke(document.getElementById("invokeString").value);
	});

	$( "#templateSelect" ).change(function() {
  		$('#testbed').attr('src', document.getElementById("templateSelect").value);
	});

});	