	$(document).ready(function() {
		

	function calculate(equ){

		$("#output-value").val(eval(equ));

	}

	// $("#equals").click(function() {
	// 	calculate();
	// })

		$("button").click(function() {

			var num = $('#output-value').val();
			var button = $(this).attr("value");

			if(button === "=") {
				calculate(num);
			} else if(button === "AC") {
				$('#output-value').val("");
			} else if(button === "CE") {
				$('#output-value').val(function() {
					return num.slice(0, num.length-1)
				});
			} else {

			$('#output-value').val( num + button);
		}
		});


	})