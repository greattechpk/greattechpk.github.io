let isFS = false
var goFS = document.getElementById("goFS");
let iconFS = document.getElementById('iconFS')

goFS.addEventListener("click", function () {
    if (!isFS) {
        document.documentElement.requestFullscreen();
        iconFS.classList.remove("fa-expand-alt")
        iconFS.classList.add("fa-compress-alt")
    } else {
        document.exitFullscreen();
        iconFS.classList.remove("fa-compress-alt")
        iconFS.classList.add("fa-expand-alt")
    }
    isFS = !isFS
}, false);