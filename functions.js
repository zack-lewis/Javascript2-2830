function adjustContentMin() {
    let menuSize = document.getElementById("body-nav"); 
    let contentSize = document.getElementById("body-content");

    if(contentSize < menuSize) {
        contentSize = menuSize; 
    }
}