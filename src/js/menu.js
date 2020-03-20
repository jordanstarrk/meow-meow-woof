//Show/hide menu on click
$(".menuButton").click(function(){
    keepStateForMenuSelection();
    $(".menu").toggle();
});

$(".menuButton").hover(function(){
    $(this).css('cursor', 'hand');
});

//x toggle to hide at top of menu
$("#closeIcon").click(function(){
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

$('#share-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$('#donate-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$('#feedback-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$('#closeIcon').hover(function(){
    $(this).toggleClass('close_hover');
});

$('.category').hover(function(){
    $(this).toggleClass('close_hover');
});


$("#toggle-button").html( "<img src='src/assets/toggle-on.svg'>");
$("#toggle-button").click(function(){
    if (localStorage.getItem("meow disabled") == null)  {
        $("#toggle-button").html( "<img src='src/assets/toggle-off.svg'>");
        localStorage.setItem("meow disabled", "true");
        return 1
    }

    if (localStorage.getItem("meow disabled") == "true")  {
        $("#toggle-button").html( "<img src='src/assets/toggle-on.svg'>");
        localStorage.setItem("meow disabled", "false");
        return 0 
    }

    if (localStorage.getItem("meow disabled") == "false") {
        $("#toggle-button").html( "<img src='src/assets/toggle-off.svg'>");
        localStorage.setItem("meow disabled", "true");
        return 1
    }
});


$("#share-button").click(function(){
    window.open('https://chrome.google.com/webstore/detail/new-tab-cat-video-extensi/lcpipfmjdfelofldlehfiogoogpkjiea?hl=en');
});

$("#feedback-button").click(function(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe5MW0-fM7FNtu3LgnYvhgDJUaMjmLUSNZsipVoUCKgtqfvRA/viewform?usp=sf_link');
});

$("#donate-button").click(function(){
    window.open('https://paypal.me/pools/c/8nwH780H4m');
});
