const origin = {
    x: 0,
    y: 0
}

function Displacementdraw() {
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