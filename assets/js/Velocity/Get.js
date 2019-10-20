function Get() {
    const velocityElement = document.getElementById('velocity');
    const velocity = velocityElement.value;

    return {
        velocity: parseFloat(velocity)
    }
}

function Set(d, v, a, at) {
    const decimalPlace = 10000;

    d = Math.floor(d);
    v = Math.floor(v * 100) / 100;

    const displacementVElement = document.getElementById('displacementV');
    displacementVElement.innerText = "Displacement: " + d;

    const velocityVElement = document.getElementById('velocityV');
    velocityVElement.innerText = "Velocity: " + v;
}