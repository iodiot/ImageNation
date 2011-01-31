$(document).ready(function() {

$("#submit_form").css("opacity", "0");

$(".button").click(function() {
	$("#user_image").click();
});

$("#user_image").change(function() {
	$("#submit_form").submit();
});

});

