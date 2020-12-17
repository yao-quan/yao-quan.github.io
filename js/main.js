// // variables
// var loader = document.querySelector('.loader')
// var header = document.querySelector('.header')
// var nav = document.querySelector('.nav')

const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

// var teaMojs = new mojs.Html({
//     el: ".tea",
//     y: { 0: -100 },
//     duration: 1800
// })

// var textMojs = new mojs.Html({
//     el: ".loading-text",
//     y: { 0: -100 },
//     duration: 1800
// })

// var headerStartMojs = new mojs.Html({
//     el: ".header",
//     y: { 150: 0 },
//     duration: 500
// })

// var navMojs = new mojs.Html({
//     el: ".nav",
//     y: { 0: -150 },
//     duration: 500
// })

// var navMobileMojs = new mojs.Html({
//     el: ".nav",
//     y: { 0: -150 },
//     duration: 500
// })

// function init() {
//     setTimeout(() => {
//         teaMojs.play()
//         textMojs.play()
//         fade(loader)
//     }, 1800);
//     setTimeout(() => {
//         headerStartMojs.play()
//         if (vw > 950) {
//             navMojs.play()
//             unfade(nav)
//         } else {
//             navMobileMojs.play()
//         }
//         unfade(header)
//     }, 3300);
// }

// //functions
// function fade(element) {
//     var op = 1;  // initial opacity
//     var timer = setInterval(function () {
//         if (op <= 0.1) {
//             clearInterval(timer);
//             element.style.display = 'none';
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op -= op * 0.1;
//     }, 50);
// }

// function unfade(element) {
//     var op = 0.1;  // initial opacity
//     element.style.display = 'block';
//     var timer = setInterval(function () {
//         if (op >= 1) {
//             clearInterval(timer);
//         }
//         element.style.opacity = op;
//         element.style.filter = 'alpha(opacity=' + op * 100 + ")";
//         op += op * 0.1;
//     }, 10);
// }

// init();

console.log(vw)
console.log(vh)