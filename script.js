let mybutton = document.getElementById("myBtn");
const navbar = document.getElementById('navbar-fixed');
//just to remember
// console.log("navbar in script", navbar);
// console.log("window scoll y", window.scrollY);
// console.log("document scrol top", document.body.scrollTop);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "inline";
    } else {
        mybutton.style.display = "none";
    }
}
function navfunction() {
    if (window.scrollY > 50) {
        navbar.classList.add("nav-colored");
        navbar.classList.remove("nav-transparent");
    } else {
        navbar.classList.add("nav-transparent");
        navbar.classList.remove("nav-colored");
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0;
}
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
    navfunction();
};

var coll = document.getElementsByClassName("collapsible");
var order = document.getElementsByClassName("order");
var i;
var j;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var words = ["Services", "Solution", "Template"];
var i = 0;
var text = "Services";

function _getChangedText() {
    i = (i + 1) % words.length;
    return text.replace(/Services/, words[i]);
}

function _changeText() {
    var txt = _getChangedText();
    document.getElementById("changer").textContent = txt;
}

setInterval(_changeText, 1000);

const hamburger = document.querySelector(".burger-menu");
const navmenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navmenu.classList.toggle("active");
})