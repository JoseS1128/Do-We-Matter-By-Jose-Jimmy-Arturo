$(".question").fadeIn(5000);

$(".space").delay(3000).fadeIn(1000);

$(".space").delay(9000).fadeOut(1000);

$(".question").delay(300).fadeOut(1000);

$(".statement").delay(14000).fadeIn();

$(".proceed").delay(17000).fadeIn();

$(".proceed").click(function() {
$(".proceed").fadeOut();
$(".statement").fadeOut();
$("#buttons").fadeIn(3000);
});

$(".mercury_button").click(function() {
    $(".mercuryInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".venus_button").click(function() {
     $(".venusInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".earth_button").click(function() {
     $(".earthInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".mars_button").click(function() {
     $(".marsInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".jupiter_button").click(function() {
     $(".jupiterInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".saturn_button").click(function() {
     $(".saturnInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".uranus_button").click(function() {
     $(".uranusInfo").fadeIn();
    $("#buttons").fadeOut();
});

$(".neptune_button").click(function() {
     $(".neptuneInfo").fadeIn();
    $("#buttons").fadeOut();
});