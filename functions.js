let videos = [
    {
    title: "100+ JavaScript Concepts you Need to Know",
    channel: "FireShip",
    link: "https://www.youtube.com/embed/lkIFF4maKMU",
    synopsis: "The ultimate 10 minute JavaScript course that quickly breaks down over 100 key concepts every web developer should know. Learn the basics of JS and start building apps on the web, mobile, desktop, and more. "
    },
    {
    title: "You need to learn VS Code Right Now",
    channel: "Network Chuck",
    link: "https://www.youtube.com/embed/1ZfO149BJvg",
    synopsis: "Everyone I know uses VS Code (Visual Studio Code). It doesn’t matter what you’re doing, hacking, coding, managing servers, VS Code is the defacto tool for IT admins and engineers. In this video, I (NetworkChuck) will show you how to get started with VS Code and how to use it to change the way you do everything! I’ll also take a few moments to show you how I use VS Code."
    },
    {
    title: "Create a resume website in your browser with VS Code and GitHub Pages ",
    channel: "Visual Studio Code",
    link: "https://www.youtube.com/embed/srQjolk7rj8",
    synopsis: "Want to make your application stand out to recruiters, and learn a few new skills in the process? Using the power of VS Code for the Web and GitHub Pages, we'll code a resume website together in HTML and CSS, completely in your browser window."
    },
    {
    title: "How To Fight The Programmer Impostor Syndrome?",
    channel: "SimpleProgrammer",
    link: "https://www.youtube.com/embed/GqI4w4VFs4w",
    synopsis: "We frequently find ourselves in perplexing circumstances. It includes Impostor Syndrome. What should you do if you find yourself having doubts about your abilities? How can you build your confidence back up? I get responses to queries like these in this video! Don't forget to watch and comment after."
    } ];

function fillSynopsis() {
    var tableObject = document.getElementById("synopsis");
    var stringObject = "<tr> <!-- Auto Generated -->";
    for(var i = 0; i < videos.length; i++) {
        stringObject = stringObject.concat("<td>");
        stringObject = stringObject.concat("<h2 class='synopsisTitle'>" + videos[i].title + "</h2>");
        stringObject = stringObject.concat("<h3 class='synopsisChannel'>" + videos[i].channel + "</h3>");
        stringObject = stringObject.concat(videos[i].synopsis);
        stringObject = stringObject.concat("<hr /><button onclick='changeView(\"" + videos[i].link + "\")'>Watch This!</button>");
        stringObject = stringObject.concat("</td>");
    }

    stringObject = stringObject.concat("</tr>");
    tableObject.innerHTML = stringObject;
}

function changeView(link) {
    var newLink = link.concat("?autoplay=1");
    var video = document.getElementById("pg1Video");
    video.src = newLink;
}

changeView(videos[0].link);