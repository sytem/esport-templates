$(function(){
	
	//http://stackoverflow.com/questions/18480550/how-to-load-all-the-images-from-one-of-my-folder-into-my-web-page-using-jquery
	var dir = "http://sytem.fi/esports-templates/adrotate/";
	var fileextension = [".png", ".jpg"];
	$.ajax({
		//This will retrieve the contents of the folder if the folder is configured as 'browsable'
		url: dir,
		success: function (data) {
			//List all .png file names in the page
			$(data).find("a:contains(" + (fileextension[0]) + "), a:contains(" + (fileextension[1]) + ")").each(function () {
				var filename = this.href.replace(window.location.host, "").replace("http://", "");
				$(".fadein").append("<img src='" + dir + filename + "'>");
			});
		}
	});

	//from: http://snook.ca/archives/javascript/simplest-jquery-slideshow by Jonathan Snook
    $('.fadein img:gt(0)').hide();
    setInterval(function(){
      $('.fadein :first-child').fadeOut()
         .next('img').fadeIn()
         .end().appendTo('.fadein');}, 
      5000);
});


