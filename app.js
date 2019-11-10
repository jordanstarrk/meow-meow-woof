var videoList = [];
const INSERT_VIDEO_COUNT_HERE = 50,
    NUMBER_OF_VIDEOS = 51;
for (var video = 1; video < 51; video++) videoList.push("https://d9m01xi7ip4je.cloudfront.net/Videos/" + video + ".mp4");
var randomVideo = videoList[Math.floor(Math.random() * videoList.length)],
    pickaVideo = function() {
        return '<video class="fullscreen-video" loop muted autoplay poster="' + randomVideo + '"><source src="' + randomVideo + '" type="video/mp4"></video>'
    };
document.getElementById("arrayString").innerHTML = pickaVideo(), chrome.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSeykxJbhQckDZ1j3WU3D8Onr06uliiABdhtc1aIW6mxjzBCfQ/viewform?usp=sf_link");