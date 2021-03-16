// global variables
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
const home = document.querySelector('#first');
const showcase = document.querySelector('#second');
const about = document.querySelector('#third');

// timeline variables
const initial_tl = gsap.timeline({ defaults: { ease: "power2.out" } })
const showcase_tl = gsap.timeline({ defaults: { ease: "power2.out" } })
const about_tl = gsap.timeline({ defaults: { ease: "power2.out" } })

function loading_animation() {
    // loading page
    initial_tl.to(".loader", { y: -150, opacity: 0, duration: 1, delay: 1 })
    initial_tl.to(".page#p0", { opacity: 0, duration: 0.1 })
    initial_tl.to(".loader", { height: 0, zIndex: -100, duration: 0.1, delay: 0.2 })
    initial_tl.to(".page#p0", { height: 0, zIndex: -100, duration: 0.1, delay: 0.2 })

    // initial-header
    initial_tl.from("#initial-header", { y: "100px", opacity: 0 }, "initial-header")
    initial_tl.to("#initial-header", { y: "0px", opacity: 1, duration: 2 })

    // nav-bar
    if (vw > 950) {
        console.log(vw)
        initial_tl.from(".nav", { x: "-100px", opacity: 0 }, "initial-header+=0")
        initial_tl.to(".nav", { x: "0px", opacity: 1, duration: 2 })
    } else {
        initial_tl.from(".nav", { y: "100px", opacity: 0 }, "initial-header+=0")
        initial_tl.to(".nav", { y: "0px", opacity: 1, duration: 2 })
    }

}

function kobe() {
    var kobe = document.getElementById('kobe');
    kobe.classList.add('kobe-sketch');
}

loading_animation()
