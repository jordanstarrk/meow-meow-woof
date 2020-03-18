/*********************************************
Replace the main html page with a random video
**********************************************/
//1. Create an array of videos that map to the video endpoints in AWS 
var videoList = [];
const INSERT_VIDEO_COUNT_HERE = 56 
const NUMBER_OF_VIDEOS = INSERT_VIDEO_COUNT_HERE + 1; 
for (var video=1; video<NUMBER_OF_VIDEOS; video++) { 
	videoList.push("https://d9m01xi7ip4je.cloudfront.net/Videos/"+video+".mp4");
}

var dogsOnlyVideoList = ["https://d9m01xi7ip4je.cloudfront.net/categories/dogs/02.mp4", "https://d9m01xi7ip4je.cloudfront.net/categories/dogs/02.mp4", "https://d9m01xi7ip4je.cloudfront.net/categories/dogs/02.mp4"];
var catsOnlyVideoList = ["https://d9m01xi7ip4je.cloudfront.net/categories/cats/01.mp4", "https://d9m01xi7ip4je.cloudfront.net/categories/cats/01.mp4", "https://d9m01xi7ip4je.cloudfront.net/categories/cats/01.mp4"];

var chooseRandomVideoListBetweenDogsAndCats = function(){
	if ((Math.floor(Math.random() * 2)) == 0){
		console.log("should be cat");
		return catsOnlyVideoList;
	} else {
		console.log("should be dog");
		return dogsOnlyVideoList;
	}  
}

var getSavedUserCategoryListPreference = function(){
	if (localStorage.getItem("category") == "noneSelected") {
		alert("need to put something here");

	} else if (localStorage.getItem("category") == "catsAndDogs"){
		return chooseRandomVideoListBetweenDogsAndCats();

	} else if (localStorage.getItem("category") == "catsOnly"){
		return catsOnlyVideoList;

	} else if (localStorage.getItem("category") == "dogsOnly"){
		return dogsOnlyVideoList;
	}
}; 

var updateLocalStorageWithCategorySelection = function (){
	if ($("#cats").css("opacity") == 1 && $("#dogs").css("opacity") == 1){
		localStorage.setItem("category", "catsAndDogs");
		console.log("CATS AND DOGS");
	}
	if ($("#cats").css("opacity") == 0.4 && $("#dogs").css("opacity") == 0.4){
		localStorage.setItem("category", "noneSelected");
		console.log("None?");
	}
	if ($("#cats").css("opacity") == 1 && $("#dogs").css("opacity") == 0.4){
		localStorage.setItem("category", "catsOnly");
		console.log("CATS ONLY");
	}
	if ($("#cats").css("opacity") == 0.4 && $("#dogs").css("opacity") == 1){
		localStorage.setItem("category", "dogsOnly");
		console.log("DOGS ONLY");
	}
};

var getRandomNumberInChosenList = function(chosenList){
	var numberInList = chosenList[Math.floor(Math.random() * chosenList.length)];
	return numberInList;
};

var playAVideo = function(listToPlay, numberInChosenList) {
	var HtmlVideoString = "<video class=\"fullscreen-video\" loop muted autoplay poster=\"" + numberInChosenList + "\"><source src=\"" + numberInChosenList + "\" type=\"video/mp4\"></video>";
	return HtmlVideoString;
};

//3. Replace the innerHTML of the main page div with the randomly chosen video
var checkIfUserOnline = function(){
	if (window.navigator.onLine == true){
		return true;
	} else {
		return false;
	}
};

var keepStateForMenuSelection = function(){
	if (localStorage.getItem("category") == "catsOnly"){
		$("#cats").css("opacity", 1);
		$("#dogs").css("opacity", 0.4);
	}

	if (localStorage.getItem("category") == "dogsOnly"){
		$("#cats").css("opacity", 0.4);
		$("#dogs").css("opacity", 1);
	}

	if (localStorage.getItem("category") == "noneSelected"){
		$("#cats").css("opacity", 0.4);
		$("#dogs").css("opacity", 0.4);
	}

	if (localStorage.getItem("category") == "catsAndDogs"){
		$("#cats").css("opacity", 1);
		$("#dogs").css("opacity", 1);
	}

}

var run = function(){
	if (checkIfUserOnline() == true){
		listToPlay = getSavedUserCategoryListPreference();
		numberInListToPlay = getRandomNumberInChosenList(listToPlay);
		document.getElementById("arrayString").innerHTML=playAVideo(listToPlay, numberInListToPlay);
	} else {
		offlineVideo = "offlineCat.mp4";
		document.getElementById("arrayString").innerHTML=playAVideo(offlineVideo);	
	}
}

run();
keepStateForMenuSelection();

/*********************************************
Redirect users to a feedback form on uninstall
**********************************************/
chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link');

