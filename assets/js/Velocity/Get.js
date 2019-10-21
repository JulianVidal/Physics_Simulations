function Get(ids) {
    const values = [];
    
    ids.forEach(element => {
        const el = document.getElementById(element);
        const val = parseFloat(el.value);
        values.unshift(val);
    });

    return values;
}

function Set(d, v, a) {

    d = Math.floor(d);
    v = Math.floor(v * 100 )  / 100;
    a = Math.floor(a * 1000)  / 1000

    const displacementVElement = document.getElementById('displacementV');
    const velocityVElement = document.getElementById('velocityV');
    const accelerationVElement = document.getElementById('accelerationV');

    if (displacementVElement) {
        displacementVElement.innerText = "Displacement: " + d;
    }

    if (velocityVElement) {
        velocityVElement.innerText = "Velocity: " + v;
    }

    if (accelerationVElement) {
        accelerationVElement.innerText = "Acceleration: " + a;
    }

}