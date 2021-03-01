const ballElement = document.querySelector('.ball');

const keyframes = [
    {left: '50%', top: '0', backgroundColor: 'red'},
    {left: '250px', top: '50%'},
    {left: '50%', top: '250px', backgroundColor: 'blue'},
    {left: '0', top: '50%'},
    {left: '50%', top: '0', backgroundColor: 'red'},
]

const timingEffect = {
    duration: 2000,
    iterations: Infinity,
}

const animation = ballElement.animate(keyframes, timingEffect)

let button = document.querySelector('.button');

button.onclick = function () {
    animation.playState === "running"
    ? animation.pause()
    : animation.play();
}