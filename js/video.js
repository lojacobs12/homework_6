var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	console.log("Starting");
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	let vol = document.getElementById("volume").innerHTML = 100 + '%';
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate *= 0.9;
	console.log("Speed" + video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= 0.9; 
	console.log("Speed" + video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime < video.duration-5){
		video.currentTime+=5;
	}
	else {
		video.currentTime = 0;
		console.log("Start of Video");
	}
	console.log(video.duration)
	console.log("Current video time" + video.currentTime);
	video.play();
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted){
		video.muted = false;
		this.innerHTML = "Mute";
	}
	else {
		video.muted = true;
		this.innerHTML = "Unmute"
	}
});

document.querySelector("#volumeSlider").addEventListener("change", function() {
	console.log(this);
	video.volume = this.value/100;
	let vol = document.getElementById("volume").innerHTML = this.value + '%';
	console.log(this.value);
});

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old School");
	video.classList.add("oldTime");
});

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
});
