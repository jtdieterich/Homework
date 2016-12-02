$( document ).ready(function() {

	$(".readmore a").click(expandMore);

	$(".readless_hide").hide();

	$(".learnmore").click(expandAside)


	function expandMore(event) {
		event.preventDefault();
		//alert('here');
		$("#show-this-on-click").slideDown();
		$(".readmore").hide();
		$(".readless_hide").show();
	}		

	$(".readless_hide a").click(showLess)

	function showLess(event) {
		event.preventDefault();
		$(".hide").slideUp();
		$(".readless_hide").hide();
		$(".readmore").show();
	}

	function expandAside(event) {
		event.preventDefault();
		$("#learnmoretext").show();
		$(".learnmore").hide();
	}	

 });


