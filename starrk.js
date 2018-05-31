//array of all mp4 videos in extension file
var selectMp4 = [
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"https://firebasestorage.googleapis.com/v0/b/meow-meow-w00f.appspot.com/o/1.mp4?alt=media&token=b859b45a-5f92-4506-93c1-ca56f85d3ff6\"><source src=\"https://firebasestorage.googleapis.com/v0/b/meow-meow-w00f.appspot.com/o/1.mp4?alt=media&token=b859b45a-5f92-4506-93c1-ca56f85d3ff6\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"https://firebasestorage.googleapis.com/v0/b/meow-meow-w00f.appspot.com/o/1.mp4?alt=media&token=b859b45a-5f92-4506-93c1-ca56f85d3ff6\"><source src=\"https://firebasestorage.googleapis.com/v0/b/meow-meow-w00f.appspot.com/o/1.mp4?alt=media&token=b859b45a-5f92-4506-93c1-ca56f85d3ff6\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/3.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/3.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/4.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/4.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/5.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/5.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/6.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/6.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/7.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/7.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/8.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/8.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/9.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/9.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/10.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/10.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/11.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/11.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/12.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/12.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/13.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/13.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/14.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/14.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/15.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/15.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/16.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/16.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/17.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/17.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/18.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/18.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/19.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/19.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/20.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/20.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/21.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/21.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/22.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/22.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/23.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/23.mp4\" type=\"video/mp4\"></video>",
	"<video class=\"fullscreen-video\" loop muted autoplay poster=\"gs://meow-meow-w00f.appspot.com/24.mp4\"><source src=\"gs://meow-meow-w00f.appspot.com/24.mp4\" type=\"video/mp4\"></video>",
];

//function to select an mp4 from the SelectMp4 array
var pickAnMp4 = function () {
var todaysMp4 = selectMp4[Math.floor(Math.random() * 1)];
return todaysMp4;
};

//replace HTML for div 'arrayString' with the random mp4 video string 
document.getElementById("arrayString").innerHTML=pickAnMp4();
