var pg2videos = [
    {
        vName: "PartAFinishedShape",
        vPath: "PartAFinishedShape.mp4"
    },
    {
        vName: "maskLiner",
        vPath: "maskLiner.mp4"
    },
    {
        vName: "FinishedShape",
        vPath: "FinishedShape.mp4"
    },
];

function fillPrevBtns() {
    var stringBld = "<h3>Change Video</h3>";
    for(var i = 0; i < pg2videos.length; i++) {
        stringBld = stringBld.concat("<button id='" + i + "' class='prevBtn' onclick='loadVideo(" + i + ")'>" + pg2videos[i].vName + "</button>");
    }

    document.getElementById("previews").innerHTML = stringBld;
}

function initLoad() {
    fillPrevBtns();
    loadVideo(0);
    delay(1000).then(fillBufferBar());
}

function loadVideo(index) {
    var videoLink = pg2videos[index].vPath;
    var vidPlayer = document.getElementById("body-video");
    var vidSrc = document.createElement("source");

    vidSrc.setAttribute("src",videoLink);
    vidSrc.setAttribute("type","video/mp4");

    while (vidPlayer.firstChild) {
        vidPlayer.removeChild(vidPlayer.firstChild);
      }

    vidPlayer.appendChild(vidSrc);
    vidPlayer.load();    
}

function changeVideoSize(newSize) {
    var vidPlayer = document.getElementById("body-video");
    let defaultW = 500;
    let defaultH = 300;
    switch (newSize) {
        case 's':
            vidPlayer.style.width = defaultW * 0.5 + "px";
            vidPlayer.style.height = defaultH * 0.5 + "px";
            break;
        case 'm':
            vidPlayer.style.width = defaultW + "px";
            vidPlayer.style.height = defaultH + "px";
            break;
        case 'l':
            vidPlayer.style.width = defaultW *  1.5 + "px";
            vidPlayer.style.height = defaultH * 1.5 + "px";
        default:
            break;
    }
}

function togglePlay() {
    var ppBtn = document.getElementById("playpause");
    var vidPlayer = document.getElementById("body-video");

    if(ppBtn.innerHTML == "Play") {
        ppBtn.innerHTML = "Pause";
        vidPlayer.play();
    }
    else {
        ppBtn.innerHTML = "Play";
        vidPlayer.pause();
    }
}

function fillBufferBar() {
    // This only works part of the time and I have no idea why, unless its reloading the buffer and does not have a buffer index yet. which is pointless to have on there. 

    var vidPlayer = document.getElementById("body-video");
    var bufferBarElement = document.getElementById("bufferBar");
    bufferBarElement.innerHTML = "Buffer Start: " + vidPlayer.buffered.start(0) + " End: " + vidPlayer.buffered.end(0);
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
  }