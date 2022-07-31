/////Main Page Buttons//////////
//Home Button
$('.homeButton').hover(function(){
    $(this).toggleClass('forum_hover');
});

$(".homeButton").click(function(){
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
        var active = tabs[0].id;
        chrome.tabs.update(active, { url: "chrome-search://local-ntp/local-ntp.html" }, function() { });
    });
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
    window.open('https://chrome.google.com/webstore/detail/lcpipfmjdfelofldlehfiogoogpkjiea');
});

//Feedback
$('#feedback-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$("#feedback-button").click(function(){
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe5MW0-fM7FNtu3LgnYvhgDJUaMjmLUSNZsipVoUCKgtqfvRA/viewform?usp=sf_link');
});


//Donate
$('#support-button').hover(function(){
    $(this).toggleClass('forum_hover');
});

$("#support-button").click(function(){
    window.open('https://www.buymeacoffee.com/meow.meow.woof');
});

//Close button
$('#closeIcon').hover(function(){
    $(this).toggleClass('close_hover');
});

$("#closeIcon").click(function(){
    updateLocalStorageWithCategorySelection();
    $(".menu").hide();
});