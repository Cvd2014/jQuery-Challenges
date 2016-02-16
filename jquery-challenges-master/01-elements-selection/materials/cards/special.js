jQuery(document).on("click", function(e) {
	
	var element = e.target;
​
	if (element.tagName == "A" || element.tagName == "SPAN") {
		element.style.background = "yellow";
		e.preventDefault();
	}
​
})