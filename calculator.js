	$(document).ready(function() {
		
	$("button").click(function() {
		var num = $('#output-value').val();
		console.log(num);
		
		var button = $(this).attr("value");
		console.log(button);
		
		$('#output-value').val( num + button);
		
		})
	})