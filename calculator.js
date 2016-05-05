$(document).ready(function() {
	$('#output-value').focus();
	document.addEventListener('keyup', enterUpHandler, false);
	function enterUpHandler (e) {
		if (e.keyCode === 13) {
			calculate ($('#output-value').val());
		}
	}
	function calculate(equ){

		$("#output-value").val(eval(equ));

	}

	$("button").click(function() {

		var num = $('#output-value').val();
		var button = $(this).attr("value");

		if(button === "=") {
			calculate(num);
		} else if(button === "AC") { //Clear all
			$('#output-value').val("");
		} else if(button === "CE") { //Backspace
			$('#output-value').val(function() {
				return num.slice(0, num.length-1)
			});
		} else { //Numbers and operators
			$('#output-value').val( num + button);
		}

	});


})