//array of all mp4 videos in extension file
var selectMp4 = [
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"1.mp4\"><source src=\"1.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"2.mp4\"><source src=\"2.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"3.mp4\"><source src=\"3.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"4.mp4\"><source src=\"4.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"5.mp4\"><source src=\"5.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"6.mp4\"><source src=\"6.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"7.mp4\"><source src=\"7.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"8.mp4\"><source src=\"8.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"9.mp4\"><source src=\"9.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"10.mp4\"><source src=\"10.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"11.mp4\"><source src=\"11.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"12.mp4\"><source src=\"12.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"13.mp4\"><source src=\"13.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"14.mp4\"><source src=\"14.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"15.mp4\"><source src=\"15.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"16.mp4\"><source src=\"16.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"17.mp4\"><source src=\"17.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"18.mp4\"><source src=\"18.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"19.mp4\"><source src=\"19.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"20.mp4\"><source src=\"20.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"21.mp4\"><source src=\"16.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"22.mp4\"><source src=\"16.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"23.mp4\"><source src=\"16.mp4\" type=\"video/mp4\"></video>",
];

//function to select an mp4 from the SelectMp4 array
var pickAnMp4 = function () {
var todaysMp4 = selectMp4[Math.floor(Math.random() * 23)];
return todaysMp4;
};

//replace HTML for div 'arrayString' with the random mp4 video string 
document.getElementById("arrayString").innerHTML=pickAnMp4();
