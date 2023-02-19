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
    var stringObject = "<table> <!-- Auto Generated -->";
    var tRowTitle = "<tr class='synopsisRow'>";
    var tRowChannel = "<tr class='synopsisRow'>";
    var tRowSynopsis = "<tr class='synopsisRow'>";
    var tRowButton = "<tr class='synopsisRow'>";

    for(var i = 0; i < videos.length; i++) {
        tRowTitle = tRowTitle.concat("<th><h2 class='synopsisTitle'>" + videos[i].title + "</h2></th>");
        tRowChannel = tRowChannel.concat("<td><h3 class='synopsisChannel'>" + videos[i].channel + "</h3></td>");
        tRowSynopsis = tRowSynopsis.concat("<td class='synopsisText'>" + videos[i].synopsis + "</td>");
        tRowButton = tRowButton.concat("<td><button onclick='changeView(\"" + videos[i].link + "\")' class='synopsisButton'>Watch This!</button></td>");
    }

    tRowTitle = tRowTitle.concat("</tr>");
    tRowChannel = tRowChannel.concat("</tr>");
    tRowSynopsis = tRowSynopsis.concat("</tr>");
    tRowButton = tRowButton.concat("</tr>");

    stringObject = stringObject.concat(tRowTitle);
    stringObject = stringObject.concat(tRowChannel);
    stringObject = stringObject.concat(tRowSynopsis);
    stringObject = stringObject.concat(tRowButton);

    stringObject = stringObject.concat("</table>");
    tableObject.innerHTML = stringObject;
}

function changeView(link) {
    var newLink = link.concat("?autoplay=1");
    var video = document.getElementById("pg1Video");
    video.src = newLink;
}

changeView(videos[0].link);