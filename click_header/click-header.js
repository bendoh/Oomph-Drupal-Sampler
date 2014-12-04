
jQuery(function($) {
	$('#site-name a').click(function(ev) {
		// I want to show this message in a better way. How can I do that?
		alert("Da header was clicked!");

		ev.preventDefault();
		ev.stopPropagation();
	});

});
