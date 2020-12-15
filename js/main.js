// variables
var body = document.querySelector('.hide-scroll');
var loader = document.querySelector('.loader');
var header = document.querySelector('.header');

var teaMojs = new mojs.Html({
    el: ".tea",
    y: { 0: -100 },
    duration: 1800
})

var textMojs = new mojs.Html({
    el: ".loading-text",
    x: { 0: -100 },
    duration: 1800
})

var headerStartMojs = new mojs.Html({
    el: ".header",
    y: { 100: 0 },
    duration: 500
})

// var typed = new Typed(".typed", {
//     strings: [
//         "Hello",
//         "This is my page"
//     ],
//     smartBackspace: true,
//     typeSpeed: 100,
//     backSpeed: 100,
//     showCursor: true,
//     cursorChar: "_"
// })

// init
function init() {
    setTimeout(() => {
        teaMojs.play()
        textMojs.play()
        fade(loader)
    }, 1800);
    setTimeout(() => {
        headerStartMojs.play()
        unfade(header)
        body.style.overflowY = 'scroll'
    }, 3300);
}

//functions
function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1) {
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1) {
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

init();
ScrollReveal().reveal('.second', { duration: 3000, distance: '100px', origin: 'left' })
ScrollReveal().reveal('.third', { duration: 3000, distance: '100px', origin: 'left' })

