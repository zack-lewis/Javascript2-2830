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
}

function loadVideo(index) {
    var videoLink = pg2videos[index].vPath;
    document.getElementById("body-video").getElementsByTagName("source")[0].src = videoLink;
}

function changeVideoSize(newSize) {
    var vidPlayer = document.getElementById("body-video");
    let defaultW = 500;
    let defaultH = 300;
    switch (newSize) {
        case 's':
            vidPlayer.style.width = defaultW * 0.6 + "px";
            vidPlayer.style.height = defaultH * 0.6 + "px";
            break;
        case 'm':
            vidPlayer.style.width = defaultW + "px";
            vidPlayer.style.height = defaultH + "px";
            break;
        case 'l':
            vidPlayer.style.width = defaultW *  1.2 + "px";
            vidPlayer.style.height = defaultH * 1.2 + "px";
        default:
            break;
    }
}