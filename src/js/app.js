var catsOnlyVideoList = [];
const INSERT_VIDEO_COUNT_HERE_CATS = 87;
const NUMBER_OF_CAT_VIDEOS = INSERT_VIDEO_COUNT_HERE_CATS + 1;
for (var video=1; video<NUMBER_OF_CAT_VIDEOS; video++) {
	catsOnlyVideoList.push("https://d9m01xi7ip4je.cloudfront.net/categories/cats/"+video+".mp4");
};

var dogsOnlyVideoList = [];
const INSERT_VIDEO_COUNT_HERE_DOGS = 61;
const NUMBER_OF_DOG_VIDEOS = INSERT_VIDEO_COUNT_HERE_DOGS + 1;
for (var video=1; video<NUMBER_OF_DOG_VIDEOS; video++) {
	dogsOnlyVideoList.push("https://d9m01xi7ip4je.cloudfront.net/categories/dogs/"+video+".mp4");
};

var tempDisablePicture = ["src/assets/images/tempDisable.jpg"];

var chooseRandomVideoListBetweenDogsAndCats = function(){
	if ((Math.floor(Math.random() * 2)) == 0){
		return catsOnlyVideoList;
	} else {
		return dogsOnlyVideoList;
	}
};

var getSavedUserCategoryListPreference = function(){
	if (localStorage.getItem("category") == null) {
		$("#dogs").css("opacity") == 0.4;
		return catsOnlyVideoList;
	}

	if (localStorage.getItem("category") == "noneSelected") {
		return tempDisablePicture;

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
		// console.log("CATS AND DOGS");
	}
	if ($("#cats").css("opacity") == 0.4 && $("#dogs").css("opacity") == 0.4){
		localStorage.setItem("category", "noneSelected");
		// console.log("None?");
	}
	if ($("#cats").css("opacity") == 1 && $("#dogs").css("opacity") == 0.4){
		localStorage.setItem("category", "catsOnly");
		// console.log("CATS ONLY");
	}
	if ($("#cats").css("opacity") == 0.4 && $("#dogs").css("opacity") == 1){
		localStorage.setItem("category", "dogsOnly");
		// console.log("DOGS ONLY");
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

var playAPicture = function() {
	var HtmlVideoString = "<img src=\"assets\"images\"tempDisable.jpg\" id=\"tempDisable\">";
	return HtmlVideoString;
};

var playOfflineVideo = function() {
	offlineVideo = "src/assets/images/offlineCat.mp4";
	var HtmlVideoString = "<video class=\"fullscreen-video\" loop muted autoplay poster=\"" + offlineVideo + "\"><source src=\"" + offlineVideo + "\" type=\"video/mp4\"></video>";
	return HtmlVideoString;
};

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

	if (localStorage.getItem("category") == null){
		$("#dogs").css("opacity", 0.4);
	}
};

var run = function(){
	listToPlay = getSavedUserCategoryListPreference();
	if (checkIfUserOnline() == true && getSavedUserCategoryListPreference() == "tempDisablePicture"){
		document.getElementById("arrayString").innerHTML=playAPicture();
		keepStateForMenuSelection();

	} else if (checkIfUserOnline() == true){
		numberInListToPlay = getRandomNumberInChosenList(listToPlay);
		document.getElementById("arrayString").innerHTML=playAVideo(listToPlay, numberInListToPlay);
		keepStateForMenuSelection();
	}
	 else {
		document.getElementById("arrayString").innerHTML=playOfflineVideo();
	};
};

run();

/*********************************************
Redirect users to a feedback form on uninstall
**********************************************/
chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link');
