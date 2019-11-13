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

//2. Select a random video from the list & return the random video number wrapped in HTML content to autoplay the video in a loop
var onlineRandomVideo = videoList[Math.floor(Math.random() * videoList.length)];
var pickaVideo = function(online_or_offline) {
	var HtmlVideoString = "<video class=\"fullscreen-video\" loop muted autoplay poster=\"" + online_or_offline + "\"><source src=\"" + online_or_offline + "\" type=\"video/mp4\"></video>";
	// console.log(online_or_offline) //Uncomment for testing purposes to display what video is selected.
	return HtmlVideoString;
};

//3. Replace the innerHTML of the main page div with the randomly chosen video
if (window.navigator.onLine == true){
	document.getElementById("arrayString").innerHTML=pickaVideo(onlineRandomVideo);
} else {
	offlineVideo = "offlineCat.mp4"
	document.getElementById("arrayString").innerHTML=pickaVideo(offlineVideo);	
}

/*********************************************
Redirect users to a feedback form on uninstall
**********************************************/
chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link');