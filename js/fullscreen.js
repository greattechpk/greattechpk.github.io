let isFS = false
var goFS = document.getElementById("goFS");

goFS.addEventListener("click", function () {
    if (!isFS) {
        document.documentElement.requestFullscreen();
    } else {
          document.exitFullscreen();
        }
    isFS = !isFS
}, false);