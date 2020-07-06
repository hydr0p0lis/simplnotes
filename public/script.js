function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min; 
}

function download(data, filename, type) {
    var file = new Blob([data], {type: type});
    if (window.navigator.msSaveOrOpenBlob) // IE10+
        window.navigator.msSaveOrOpenBlob(file, filename);
    else { // Others
        var a = document.createElement("a"),
                url = URL.createObjectURL(file);
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(function() {
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);  
        }, 0); 
    }
}

function changeFont(element, size) {
  element.css("font-size", size + "px"  )
}

function onOverlay() {
  overlayElement.style.display = "block";
}

function offOverlay() {
  overlayElement.style.display = "none";
}

var theWit = ["Vent your feelings.", 
                        "Psst. It's between you and me.", 
                        "A bare-bones notepad.", 
                        "So, whaddya gonna write here?", 
                        "I don't mind if you write a whole essay.",
                        "Writing a shopping list, huh?",
                        "Yippee-ki-yay, Microsoft Office",
                        "Do you even look at this?",
                        "I mean, at least it works.",
                        "Say it again, Sam",
                        "A beautiful and minimalistic notepad. Write something now!",
                        '<b>"There is nothing to writing. All you do is sit down at a typewriter and bleed."</b> - Ernest Hemingway',
                        '<b>"Ferb, I know what we\'re gonna write today."</b>',
                        "<a href='https://dfhuadf6-deleted.glitch.me/'>Something for your viewing pleasure! 👓 Make sure to turn autoplay on in your browser.</a>"];

const witElement = document.getElementById("thewit");
const downloadElement = document.getElementById("thedownloader");
const editElement = document.getElementById("edit");
const overlayElement = document.getElementById("overlay");
const fontSizeElement = document.getElementById("fontSize");
const fontSizeLabelElement = document.getElementById("fontSizeLabel");

window.onload = function() {
  witElement.innerHTML = theWit[random(0, theWit.length)];
  fontSizeLabelElement.innerHTML = fontSizeElement.value
}

downloadElement.onclick = function() {
  onOverlay();
  setTimeout(function() {
    download(editElement.value, "simpl.txt", "txt");
  }, 2000);
}

fontSizeElement.oninput = function() {
  editElement.style.fontSize = fontSizeElement.value + "px";
  fontSizeLabelElement.innerHTML = fontSizeElement.value
}







