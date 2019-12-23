

// TweenMax.to('.animation_01', 5, {
//     // x: 200,
//     // scale: 4,
//     repeat : 1,
//     yoyo : false,
//     ease: Power0.easeNone,
//     rotationX: 360,
//     transformOrigin:'right bottom'
// });



var tl = new TimelineMax({
    repeat: 2,
    yoyo: true

});

tl.from('.animation_02', 2, {
    y: 300,
    // scale: 4,
    ease: Bounce.easeOut
}).fromTo('.animation_03', 2, {
    x: 100
}, {
    y: 200,
    ease: Bounce.easeOut
});

var play = $('#play');

play.on('click', function () {
    TweenMax.to('.animation_04', 1, {
        x: 200
    })
});


var tlcontrol = new TimelineMax({
    repeat: -1
});

tlcontrol.to('.animation_05', 5, {
    x: 100,
    opacity: 0
});

tlcontrol.stop();


document.getElementById("go").onclick = function () {
    tlcontrol.play();
}

document.getElementById("stop").onclick = function () {
    tlcontrol.stop();
}

document.getElementById("resume").onclick = function () {
    tlcontrol.resume();
}

document.getElementById("restart").onclick = function () {
    tlcontrol.restart();
}

document.getElementById("reverse").onclick = function () {
    tlcontrol.reverse();
}



document.getElementById("scrollTo").onclick = function () {
    TweenMax.to(window, 2, {
        scrollTo: {
            y: "#section_04",
            offsetY: 100
        }
    })
}

function warns() {
    alert('alert');
}

function goAlert() {
    alert('goalert');
}


TweenMax.to('.animation_06', 1, {
    y: 200,
    onComplete: warns
})

var callbackFunc = new TimelineMax({
    onComplete: goAlert
   
});


callbackFunc.to('.animation_07' , 1 ,{
    y: 100
}).to('.animation_08' , 1 ,{
    x: 200
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