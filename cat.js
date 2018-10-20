// array of all mp4 videos in extension file
var videos = ["https://s3.amazonaws.com/meowmeoww00f/01.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/02.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/03.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/04.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/05.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/06.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/07.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/08.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/09.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/10.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/11.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/12.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/13.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/14.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/15.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/16.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/17.mp4", 
"https://s3.amazonaws.com/meowmeoww00f/18.mp4",
"https://s3.amazonaws.com/meowmeoww00f/19.mp4",
"https://s3.amazonaws.com/meowmeoww00f/20.mp4",
"https://s3.amazonaws.com/meowmeoww00f/21.mp4",];
// select a random video from the video array
var videoRandom = videos[Math.floor(Math.random() * 21)];
//string to output for displaying mp4
//function to choose random item in video array and add the right string for output 
//function to select an mp4 from the SelectMp4 array
var pickAnMp4 = function () {
var mp4string = "<video class=\"fullscreen-video\" loop muted autoplay poster=\"" + videoRandom + "\"><source src=\"" + videoRandom + "\" type=\"video/mp4\"></video>";
return mp4string;
};
//replace HTML for div 'arrayString' with the random mp4 video string 
document.getElementById("arrayString").innerHTML=pickAnMp4();

/* This will pop up a form for people to complete when they uninstall the app*/
chrome.runtime.setUninstallURL('https://goo.gl/forms/BupTCsXbi7c9KjN02');
