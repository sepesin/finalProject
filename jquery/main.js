$(function() {


	$("input:checkbox").val();

	if ($('#check_id').is(":checked"))
	{
	  // it is checked
	}


	$('.popup').click(function() {
		$('.form').css({visibility:"visible"});

	});


	// When the user clicks on <div>, open the popup
	function myFunction() {
	    var popup = document.getElementById('myPopup');
	    popup.classList.toggle('show');
	}


});


