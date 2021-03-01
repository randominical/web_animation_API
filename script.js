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

let animation = ballElement.animate(keyframes, timingEffect);

let button_pp = document.querySelector('.button_pp');

button_pp.onclick = function () {
    animation.playState === "running"
    ? animation.pause()
    : animation.play();
};

let button_rev = document.querySelector('.button_rev');
const timingEffectReverse = {
    duration: 2000,
    direction: "reverse",
    iterations: Infinity,
};

button_rev.onclick = function () {
    animation = ballElement.animate(keyframes, timingEffectReverse);
};

function onRangeChange (value) {
    animation.updatePlaybackRate(value)
    document.getElementById('range').innerHTML = value;
}