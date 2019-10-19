const canvasElement = document.createElement("canvas");
const canvas = canvasElement.getContext("2d");

const fps = 120;
let width = 500;
const height = 500;

const radius = 4;

const particle = {
    s: 0,
    v: 0,
    a: 0
};

let frameCount = 0;

let time = 0;

const SUVAT = {
    s: 500,
    u: 100,
    v: null,
    a: 1000,
    t: null
}

//10, 2, 3

window.onload = () => {

    document.getElementById('canvas').appendChild(canvasElement);

    // Gameloop
    const loop = setInterval(() => draw(loop), 1000 / fps)

    // Changes width to the width of the window
    width = document.body.offsetWidth;
    canvas.canvas.width = width;
    canvas.canvas.height = height;
};

function draw(loop) {

    // Background
    canvas.fillStyle = '#393e46';
    canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    //  Draws particle
    canvas.beginPath();
    canvas.arc(particle.s, height / 2, radius, 0, Math.PI * 2)
    canvas.fillStyle = '#FFFFFF';
    canvas.fill();

    if (particle.s >= width) {
        clearInterval(loop);
    }

    frameCount++;
}

function simulateSetup() {
    console.log("Simulate Setup");

    const {s, u, v, a, t} = SUVAT;

    SUVAT.s = (!SUVAT.s && SUVAT.s != 0) ? calculateS(u, v, a, t) : SUVAT.s;
    SUVAT.u = (!SUVAT.u && SUVAT.u != 0) ? calculateU(s, v, a, t) : SUVAT.u;
    SUVAT.v = (!SUVAT.v && SUVAT.v != 0) ? calculateV(s, u, a, t): SUVAT.v;
    SUVAT.a = (!SUVAT.a && SUVAT.a != 0) ? calculateA(s, u, v, t): SUVAT.a;
    SUVAT.t = (!SUVAT.t && SUVAT.t != 0) ? calculateT(s, u, v, a): SUVAT.t;

    particle.a = SUVAT.a;

    time = 0;
    console.log(SUVAT)
    const loop = setInterval(() => simulateDraw(loop), 1000 / fps)

}

function simulateDraw(loop) {
    const {s, u, v, a, t} = SUVAT;

    particle.v = calculateV(s, u, a, time / fps)
    particle.s = calculateS(u, v, a, time / fps)

    if (time >= (calculateT(s, u, v, a) * fps)) {
        console.log(particle)
        clearInterval(loop);
    }

    time++;
}