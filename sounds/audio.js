
// Acceleration code fait par Nikita de la Russie

/* 
var carButton = document.getElementById('carToggle');
var vol = .05;
var interval = 300;
var audio = new Audio('./sounds/car.mp3');
var startIn,
    startOut
var fadeIn = function() {
    clearInterval(startOut);
    startIn = setInterval(
        function() {
            audio.play();
            if (vol < .45) {
                vol += 0.05;
                audio.volume = Math.round(vol * 100) / 100;
            }
            else {
                clearInterval(startIn);
            }
        }, 
    interval);
}    
var fadeOut = function() {
    clearInterval(startIn);
    startOut = setInterval(
        function() {
            if (vol > 0.05) {
                vol -= 0.05;
                audio.volume = Math.round(vol * 100) / 100;
            }
            else {
                clearInterval(startOut);
                audio.pause();
				audio.currentTime = 0; //put by me to play the sound from the beginning
            }
        }, 
    interval);
}

carButton.addEventListener('mousedown', function() {
    fadeIn();
});
carButton.addEventListener('touchstart', function() {
    fadeIn();
});
carButton.addEventListener('mouseup', function() {
    fadeOut();
});
carButton.addEventListener('touchend', function() {
    fadeOut();
});
 */


// Another Acceleration code here
var carButton = document.getElementById('carToggle');
var vol = 0;
var interval = 200;
var audio = new Audio('./sounds/machine160.mp3');
var startIn,
    startOut,
    timeOut

var fadeIn = function() {
    audio.play();
    if (vol < .45) {
        vol += 0.05;
        audio.volume = Math.round(vol * 100) / 100;
    }
}

var fadeOut = function() {
    startOut = setInterval(
        function() {
            if (vol > 0.05) {
                vol -= 0.05;
                audio.volume = Math.round(vol * 100) / 100;
            }
            else {
                clearInterval(startOut);
                audio.pause();
                audio.currentTime = 0; //put by me to play the sound from the beginning
            }
        }, 
    interval);
}

document.addEventListener('mousemove', function() {
    fadeIn();
    if (timeOut) clearTimeout(timeOut);
    timeOut = setTimeout(function() {
        fadeOut();
    }, 150)
})

