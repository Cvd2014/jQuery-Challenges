$(document).ready(function() {

 	$("#stream1_btn").on("click", function() {
 		$(".card").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".card").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
	$("p").on("click", function(){
		$('p').css("color", "red");	
	});
	$('h2').hover( function(){
		$("h2").css("color", "lightblue");
	});
	$("#html").hover(function(){
		$("h2").removeClass("active");
		$("#html").addClass("active")
	});
	$("#mySql").hover(function(){
		$("h2").removeClass("active");
		$("#mySql").addClass("active")
	});
	$("#python").hover(function(){
		$("h2").removeClass("active");
		$("#python").addClass("active")
	});
	$("#jQuery").hover(function(){
		$("h2").removeClass("active");
		$("#jQuery").addClass("active")
	});
	$("#css").hover(function(){
		$("h2").removeClass("active");
		$("#css").addClass("active")
	});
	$("#django").hover(function(){
		$("h2").removeClass("active");
		$("#django").addClass("active")
	});
	$(".bottom_button").hover(function(){
		$("body").css("background-color", "black");},
		function(){
			$("body").css("background-color","grey");
		});

});