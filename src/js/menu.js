//Show/hide menu on click
$(".menuButton").click(function(){
  $(".menu").toggle();
});

//x toggle to hide at top of menu
$(".closeIcon").click(function(){
    $(".menu").hide();
})

//Feedback - click to go to feedback form
$("p").click(function(){
    window.open('https://goo.gl/forms/T9hSIDhhrp4Bgnqg2', 'Feedback'); 
})

//When a user clicks on animals category item it should deselect
$("#animals").click(function() {
    if ($(this).css("opacity") == 0.1) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.1);
    }
})

//When a user clicks on nature category item it should deselect
$("#nature").click(function() {
    if ($(this).css("opacity") == 0.1) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.1);
    }
})

//When a user clicks on city category item it should deselect
$("#city").click(function() {
    if ($(this).css("opacity") == 0.1) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.1);
    }
})

//When a user clicks on other category item it should deselect
$("#other").click(function() {
    if ($(this).css("opacity") == 0.1) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.1);
    }
})
