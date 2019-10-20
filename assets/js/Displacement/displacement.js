const origin = {
    x: width / 2,
    y: height / 2
}

window.onload = () => {
    console.log("Displacement Files");

    // Appends canvaas to div
    document.getElementById('canvas').appendChild(canvasElement);

    // Game loop
    const loop = setInterval(() => draw(loop), 1000 / fps);

    // Width and Height of the canvas
    width = document.body.offsetWidth;
    canvas.canvas.width = width;
    canvas.canvas.height = height;

    // Adds y position for the particle
    origin.y = height / 2;
    origin.x = width / 2;

    particle.y = origin.y;
    particle.x = origin.x;



    // Mouse pressed
    document.getElementById("canvas").onmousedown = event => {
        particle.x = event.offsetX;
        particle.y = event.offsetY;
    }
}

function draw() {
    const dist = Math.round(Math.sqrt((particle.x - origin.x) * (particle.x - origin.x) + (particle.y - origin.y) * (particle.y - origin.y)));

    // Background
    canvas.fillStyle = '#393e46';
    canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    // Draws line
    canvas.moveTo(origin.x, origin.y);
    canvas.lineTo(particle.x, particle.y);
    canvas.lineWidth = 1.5;
    canvas.strokeStyle = "white";
    canvas.stroke();
    canvas.moveTo(0, 0);

    // Draws Origin
    canvas.beginPath();
    canvas.arc(origin.x, origin.y, radius, 0, Math.PI * 2);
    canvas.fillStyle = '#FF0000';
    canvas.fill();

    //  Draws particle
    canvas.beginPath();
    canvas.arc(particle.x, particle.y, radius - 1, 0, Math.PI * 2)
    canvas.fillStyle = '#FFFFFF';
    canvas.fill();
 
    // Writes the text
    canvas.fillStyle = '#FFF';
    canvas.font = "32px arial";
    canvas.fillText(`Displacement from the origin: ${dist}`, 0, 32);
}