// global variables
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
const home = document.querySelector('#first')
const showcase = document.querySelector('#second')
const skills = document.querySelector('#third')
const about = document.querySelector('#fourth')

// initial animation start

// variables
const initial_tl = gsap.timeline({ defaults: { ease: "power2.out" } })
const input_listener = $('#initial-input')

function home_func() {
    var typed = new Typed('#initial-input', {
        strings: [
            'I\'m Yao Quan',
            "Student/Wannabe Web Developer",
            "Feel free to type here and talk to me!"
        ],
        startDelay: 4500,
        typeSpeed: 30,
        backDelay: 1500,
        backSpeed: 10,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true,
        showCursor: false
    })
}

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

    initial_tl.add(home_func())
    input_listener.on('keyup', ({ key }) => {
        if (key === 'Enter') {
            console.log(input_listener.val())
            input_listener.css('color', 'transparent');
            var temp = input_listener.val()
            setTimeout(function () {
                input_listener.val('')
                input_listener.css('color', 'var(--mocha)');
            }, 500);

            reply(temp)
        }
    })

}

function fadeText(obj) {
    obj.css('color', 'transparent')
}

function reply(input) {


    var typed = new Typed('#initial-reply', {
        strings: [
            input
        ],
        typeSpeed: 50,
        backDelay: 1500,
        backSpeed: 10,
        showCursor: false,

        onComplete: setTimeout(function () { $('#initial-reply').css('color', 'transparent') }, 1500)
    })
}

// initial animation end

// showcase animation start

// variables

const showcase_tl = gsap.timeline({ defaults: { ease: "power2.out" } })

function showcase_func() {
    console.log('showcase')
}

// showcase animation end

// skills animation start

// variables

const skills_tl = gsap.timeline({ defaults: { ease: "power2.out" } })

function skills_func() {
    console.log('skills')
}

// skills animation end

// about animation start

// variables

const about_tl = gsap.timeline({ defaults: { ease: "power2.out" } })

function about_func() {
    console.log('about')
}

// about animation end

// function calls

loading_animation()
