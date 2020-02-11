// Your code goes here
const allImg = document.querySelectorAll("img");

const header = document.querySelector("header")[0];
header.style.zIndex = "1"

allImg.forEach(elem => {
    elem.addEventListener("mouseenter", (event) => {
        elem.style.transform = "scale(1.2)";
        elem.style.transition = "all 0.8s ease-in-out";
        event.stopPropagation();
    })
});
allImg.forEach(elem => {
    elem.addEventListener("mouseleave", () => {
        elem.style.transform = "scale(1)";
    })
});
const btn = document.querySelectorAll(".btn");

btn.forEach(elem => {
    elem.addEventListener("mouseenter", () => {
        elem.style.transform = "scale(1.2)";
        elem.style.transition = "all 0.8s ease-in-out";
    })
});
btn.forEach(elem => {
    elem.addEventListener("mouseleave", () => {
        elem.style.transform = "scale(1)";
    })
});

const bottomImg = document.getElementsByClassName("content-destination")[0].getElementsByTagName("img")[0];

bottomImg.addEventListener("dblclick", (event) => {
    bottomImg.src = "./img/fun-bus.jpg";
    event.stopPropagation();
})

const body = document.getElementsByTagName("body")[0];

body.addEventListener("dblclick", () => {
    body.style.backgroundColor = random_color();
})
body.addEventListener("dblclick", () => {
    body.style.color = random_color();
})

function random_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var rColor = "rgb(" + x + "," + y + "," + z + ")";
    return rColor;
}