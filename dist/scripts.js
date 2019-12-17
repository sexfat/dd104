// import { TimelineMax } from "gsap";

// import { TweenMax } from "gsap";

// TweenMax.to('.animation_01', 5, {
//     // x: 200,
//     // scale: 4,
//     repeat : 1,
//     yoyo : false,
//     ease: Power0.easeNone,
//     rotationX: 360,
//     transformOrigin:'right bottom'
// });



var tl = new TimelineMax();

tl.from('.animation_02', 2, {
    y: 300,
    // scale: 4,
    ease: Bounce.easeOut
}).fromTo('.animation_03', 2, {
    x: 100
}, {
    y: 200,
    ease: Bounce.easeOut
})


// TweenMax.to('.animation_03', 3, {
//     bezier: {
//         curviness: 1.25,
//         values: [{
//             x: 100,
//             y: 200
//         }, {
//             x: 350,
//             y: 400
//         }, {
//             x: 450,
//             y: 50
//         }],
//         autoRotate: false,
        
//     },
//     opacity: 0,
//     ease: Power1.easeOut
// });


// TweenMax.staggerFrom(['.animation_04' , '.animation_05' , '.animation_06' ], 1, {
//     x: 200,
//     repeat : -1,
//     ease: Power0.easeNone
// },.4);