const tl = gsap.timeline({ defaults: { ease: "power2.out" } })

// loading page
tl.to(".loader", { y: -150, opacity: 0, duration: 1, delay: 1 })
tl.to(".page#p0", { opacity: 0, duration: 0.1 })
tl.to(".loader", { height: 0, zIndex: -100, duration: 0.1, delay: 0.2 })
tl.to(".page#p0", { height: 0, zIndex: -100, duration: 0.1, delay: 0.2 })

// initial-header
tl.from("#initial-header", { y: "100px", opacity: 0 })
tl.to("#initial-header", { y: "0", opacity: 1, duration: 2 })



// .page#p0
// animation-name: fadeOut, disappear;
// animation-duration: 1s, 0.1s;
// animation-delay: 2s, 3.1s;
// animation-timing-function: ease-in, linear;
// animation-fill-mode: forwards, forwards;

// .loader

// animation-name: slideUp, disappear;
// animation-duration: 1s, 0.1s;
// animation-delay: 2s, 3.1s;
// animation-timing-function: ease-in, linear;
// animation-fill-mode: forwards, forwards;

// @keyframes fadeOut {
//     0% {
//         opacity: 1;
//     } 
//     100% {
//         opacity: 0;
//     }
//   }

//   @keyframes slideUp {
//     0% {
//         transform: translateY(0);
//     } 
//     100% {
//         transform: translateY(-150px);
//     }
//   }

//   @keyframes disappear {
//     to {
//         height: 0;
//         z-index: -100;
//     }
//   }