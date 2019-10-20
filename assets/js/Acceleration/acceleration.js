function Accelerationdraw(loop) {
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

    if (particle.s >= width && (frameCount * 2) % fps !== 0) {
        Ddata.push(particle.s);
        Vdata.push(particle.v);
        Adata.push(particle.a);
        Tdata.push(Math.round(frameCount / fps * 10) / 10);
        addData(displacementChart, Tdata, Ddata);
        addData(velocityChart, Tdata, Vdata);
        addData(accelerationChart, Tdata, Adata);
  
        Set(particle.s, particle.v, particle.a);
     }
  
     if ((frameCount * 2) % fps === 0 && particle.v != 0) {
        Ddata.push(particle.s);
        Vdata.push(particle.v);
        Adata.push(particle.a);
        Tdata.push(frameCount / fps);
        addData(displacementChart, Tdata, Ddata);
        addData(velocityChart, Tdata, Vdata);
        addData(accelerationChart, Tdata, Adata);
  
        Set(particle.s, particle.v, particle.a);
     }
  
     if (particle.v != 0) {
        frameCount++;
     }

}