let projects = document.getElementById("Projects")
let skills = document.getElementById("Skills")
let about = document.getElementById("About")
let projectsLink = document.getElementById("projects-link")
let skillsLink = document.getElementById("skills-link")
let aboutLink = document.getElementById("about-link")

const eleArr = []
eleArr.push(projectsLink)
eleArr.push(skillsLink)
eleArr.push(aboutLink)


const calculateMid = () => {
    const projectsRect = projects.getBoundingClientRect().top / 2
    const skillsRect = skills.getBoundingClientRect().top / 2
    const aboutRect = about.getBoundingClientRect().top / 2

    let valArr = [projectsRect, skillsRect, aboutRect]


    if (valArr[0] < 0) {
        valArr[0] = valArr[0] * -1
    }
    let closeVal = valArr[0]
    let currentIndex = 0

    for (let i = 1; i < valArr.length; i++) {
        if (valArr[i] < 0) {
            valArr[i] = valArr[i] * -1
        }
        if (closeVal > valArr[i]) {
            closeVal = valArr[i]
            currentIndex = i
        }
    }
    return scrollId(currentIndex)
}


//ID Attributes


function scrollId(currentIndex) {
    let activeItem = document.querySelector(".active")

    activeItem.classList.remove("active")


    return eleArr[currentIndex].classList.add("active")
}

// window.onscroll = calculateMid
document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);

function ScrollStart() {
   Scroll()
}

function Scroll() {
    //end of scroll event for iOS
    //and
    //start/end of scroll event for other browsers
    calculateMid()
}