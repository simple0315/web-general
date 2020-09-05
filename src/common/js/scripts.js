$(function() {

	$("#first").rlAccordion();

	$("#second").rlAccordion('single', {
		childNum: 0
	});

	$("#thirth").rlAccordion('mix', {
		childNum: 2
	});

});