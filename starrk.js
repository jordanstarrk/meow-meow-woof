//array of all mp4 videos in extension file
var selectMp4 = [
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"1.mp4\"><source src=\"1.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"2.mp4\"><source src=\"2.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"3.mp4\"><source src=\"3.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"4.mp4\"><source src=\"4.mp4\" type=\"video/mp4\"></video>"
];

//function to select an mp4 from the SelectMp4 array
var pickAnMp4 = function () {
var todaysMp4 = selectMp4[Math.floor(Math.random() * 4)];
return todaysMp4;
};

//replace HTML for div 'arrayString' with the random mp4 video string 
document.getElementById("arrayString").innerHTML=pickAnMp4();