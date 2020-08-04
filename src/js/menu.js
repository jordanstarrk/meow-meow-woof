/////Main Page Buttons//////////
//Home Button
$('.homeButton').hover(function(){
    $(this).toggleClass('forum_hover');
});

$(".homeButton").click(function(){
    window.open('chrome-search://local-ntp/local-ntp.html');
});

//Meow Menu --> Show/hide menu on click
$(".menuButton").hover(function(){
    $(this).toggleClass('forum_hover');
});

$(".menuButton").click(function(){
    keepStateForMenuSelection();
    $(".menu").toggle();
});

/////Menu-Popup Buttons////////
//Categories
$('.category').hover(function(){
    $(this).toggleClass('close_hover');
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

//When a user clicks on cats category item it should deselect
$("#cats").click(function() {
    if ($(this).css("opacity") == 0.4) {
        $(this).css("opacity", 1);
    }else {
        $(this).css("opacity", 0.4);
    }
    updateLocalStorageWithCategorySelection();
});

//Share
$('#share-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$("#share-button").click(function(){
    window.open('https://chrome.google.com/webstore/detail/new-tab-cat-video-extensi/lcpipfmjdfelofldlehfiogoogpkjiea?hl=en');
});

//Feedback
$('#feedback-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$("#feedback-button").click(function(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe5MW0-fM7FNtu3LgnYvhgDJUaMjmLUSNZsipVoUCKgtqfvRA/viewform?usp=sf_link');
});


//Donate
$('#donate-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$("#donate-button").click(function(){
    window.open('https://paypal.me/pools/c/8nwH780H4m');
});

//Close button
$('#closeIcon').hover(function(){
    $(this).toggleClass('close_hover');
});

$("#closeIcon").click(function(){
    updateLocalStorageWithCategorySelection();
    $(".menu").hide();
});


