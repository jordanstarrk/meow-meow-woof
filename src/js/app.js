/*********************************************
Replace the main html page with a random video
**********************************************/
//1. Create an array of videos that map to the video endpoints in AWS 
var catsOnlyVideoList = [];
const INSERT_VIDEO_COUNT_HERE_CATS = 73; 
const NUMBER_OF_CAT_VIDEOS = INSERT_VIDEO_COUNT_HERE_CATS + 1; 
for (var video=1; video<NUMBER_OF_CAT_VIDEOS; video++) { 
	catsOnlyVideoList.push("https://d9m01xi7ip4je.cloudfront.net/categories/cats/"+video+".mp4");
};


var dogsOnlyVideoList = [];
const INSERT_VIDEO_COUNT_HERE_DOGS = 35; 
const NUMBER_OF_DOG_VIDEOS = INSERT_VIDEO_COUNT_HERE_DOGS + 1; 
for (var video=1; video<NUMBER_OF_DOG_VIDEOS; video++) { 
	dogsOnlyVideoList.push("https://d9m01xi7ip4je.cloudfront.net/categories/dogs/"+video+".mp4");
};

var chooseRandomVideoListBetweenDogsAndCats = function(){
	if ((Math.floor(Math.random() * 2)) == 0){
		return catsOnlyVideoList;
	} else {
		return dogsOnlyVideoList;
	}  
}

var getSavedUserCategoryListPreference = function(){
	if (localStorage.getItem("category") == null) {
		updateLocalStorageWithCategorySelection();
	}

	if (localStorage.getItem("category") == "noneSelected") {
		disableMeow();

	} else if (localStorage.getItem("category") == "catsAndDogs"){
		return chooseRandomVideoListBetweenDogsAndCats();

	} else if (localStorage.getItem("category") == "catsOnly"){
		return catsOnlyVideoList;

	} else if (localStorage.getItem("category") == "dogsOnly"){
		return dogsOnlyVideoList;
	}
}

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

// var keepStateForTempOff = function (){
// 	if (localStorage.getItem("disableMeowMeowW00f") == "yes") {
// 		toggleTempOffIconOff();
// 	}

// 	if (localStorage.getItem("disableMeowMeowW00f") == "no") {
// 		toggleTempOffIconOn();
// 	}
// }

// var toggleTempOffIconOn = function() {
// 	$(".toggleIcon").attr("src", "src/assets/toggle-on");
// }

// var toggleTempOffIconOff = function() {
// 	$(".toggleIcon").attr("src", "src/assets/toggle-off");
// }

var checkIfMeowDisabled = function(){
	if (localStorage.getItem("disableMeowMeowW00f") == null) {
		return false;
	}
	if (localStorage.getItem("disableMeowMeowW00f") == true) {
		return true;
	}

	if (localStorage.getItem("disableMeowMeowW00f") == false) {
		return false;
	}
}

var displayTempDisablePage = function() {
	document.getElementById("arrayString").innerHTML="<img src='tempDisable.jpg' style='position: fixed; left: 0; top: 0; max-width: 100%;  z-index: -1;'/>";

}

var disableMeow = function(){	
	// $(".toggleIcon").attr("src", "src/assets/toggle-off.svg");	
	$("#cats").css("opacity", 0.5);
	$("#dogs").css("opacity", 0.5);
	$("#cats").off('click');
	$("#dogs").off('click');
    localStorage.setItem("disabledMeowMeowW00f", "yes");
	displayTempDisablePage();
}

var enableMeow = function() {
	// $(".toggleIcon").attr("src", "src/assets/toggle-on.svg");	
	$("#cats").css("opacity", 1);
	$("#dogs").css("opacity", 1);
	$("#cats").off('click');
	$("#dogs").off('click');
	localStorage.setItem("disabledMeowMeowW00f", "no");
	run();
	keepStateForMenuSelection();
	keepStateForTempOff();
}


var run = function(){
	if (localStorage.getItem("disabledMeowMeowW00f") == "yes"){
		disableMeow();
	
	} else if (checkIfUserOnline() == true && (localStorage.getItem("disabledMeowMeowW00f") == "no") || (localStorage.getItem("disabledMeowMeowW00f") == null)) {
		listToPlay = getSavedUserCategoryListPreference();
		numberInListToPlay = getRandomNumberInChosenList(listToPlay);
		document.getElementById("arrayString").innerHTML=playAVideo(listToPlay, numberInListToPlay);
	} else {
		displayTempDisablePage();
	}

};


// var run = function(){
// 	if (checkIfUserOnline() == true){
// 		listToPlay = getSavedUserCategoryListPreference();
// 		numberInListToPlay = getRandomNumberInChosenList(listToPlay);
// 		document.getElementById("arrayString").innerHTML=playAVideo(listToPlay, numberInListToPlay);
// 	} else {
// 		offlineVideo = "offlineCat.mp4";
// 		document.getElementById("arrayString").innerHTML=playAVideo(offlineVideo);	
// 	}
// };

run();
keepStateForMenuSelection();

/*********************************************
Redirect users to a feedback form on uninstall
**********************************************/
chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link');

