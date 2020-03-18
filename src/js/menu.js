//Show/hide menu on click
$(".menuButton").click(function(){
    keepStateForMenuSelection();
    $(".menu").toggle();
});

$(".menuButton").hover(function(){
    $(this).css('cursor', 'hand');
});

//x toggle to hide at top of menu
$(".closeIcon").click(function(){
    updateLocalStorageWithCategorySelection();
    $(".menu").hide();
});

//Feedback - click to go to feedback form
$("p").click(function(){
    window.open('https://goo.gl/forms/T9hSIDhhrp4Bgnqg2', 'Feedback'); 
});

//When a user clicks on cats category item it should deselect
$("#cats").click(function() {    
    if ($(this).css("opacity") == 0.4) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.4);
    }
    updateLocalStorageWithCategorySelection();

});

//When a user clicks on dogs category item it should deselect
$("#dogs").click(function() {
    if ($(this).css("opacity") == 0.4) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.4);
    }
    updateLocalStorageWithCategorySelection();
});

