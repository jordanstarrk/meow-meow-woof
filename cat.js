/*********************************************
Replace the main html page with a random video
**********************************************/
//1. Create an array of videos that map to the video endpoints in AWS 
var videoList = [];
for (var video=1; video<28; video++) { 
	videoList.push("https://s3.amazonaws.com/meowmeoww00f/Videos/"+video+".mp4");
}

//2. Select a random video from the list & return the random video number wrapped in HTML content to autoplay the video in a loop
var randomVideo = videoList[Math.floor(Math.random() * videoList.length)]; //
var pickaVideo = function() {
	//2a. Create the HTML code to autoplay a video and insert the reference to the randomized video number
	var HtmlVideoString = "<video class=\"fullscreen-video\" loop muted autoplay poster=\"" + randomVideo + "\"><source src=\"" + randomVideo + "\" type=\"video/mp4\"></video>";
	return HtmlVideoString;
};

//3. Replace the innerHTML of the main page div with the randomly chosen video
document.getElementById("arrayString").innerHTML=pickaVideo();

/*********************************************
Redirect users to a feedback form on uninstall
**********************************************/
chrome.runtime.setUninstallURL('https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link');