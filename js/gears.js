
const leftgear = document.getElementById("leftgear")
const rightgear = document.getElementById("rightgear")

window.addEventListener("scroll", function () {
    leftgear.style.transform = "rotate(" + window.pageYOffset + "deg)"
    rightgear.style.transform = "rotate(-" + window.pageYOffset + "deg)"
});
