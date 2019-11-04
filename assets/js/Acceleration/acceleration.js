let lastAccleration = 0;
function Accelerationdraw(loop) {
   if (Get(["acceleration"])[0] != 0) {
    particle.a = Get(["acceleration"])[0];
    
    if (lastAccleration != particle.a) {
        frameCount = 0;
        Ddata.splice(0, Ddata.length);
        Vdata.splice(0, Vdata.length);
        Adata.splice(0, Adata.length);
        Tdata.splice(0, Tdata.length);
    }
   } 
    lastAccleration = particle.a;
    // Background
    canvas.fillStyle = '#393e46';
    canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

    //  Draws particle
    canvas.beginPath();
    canvas.arc(particle.s, height / 2, radius, 0, Math.PI * 2)
    canvas.fillStyle = '#FFFFFF';
    canvas.fill();
    
    particle.v = V(0, particle.a, frameCount / fps);
    
    particle.s = S(0, particle.a, frameCount / fps);

    if (particle.s >= width) {
        clearInterval(loop);
    }
    
   if (particle.s < 0) {
      clearInterval(loop);
   }

    if (particle.s >= width && (frameCount * 2) % fps !== 0) {
        Ddata.push(particle.s);
        Vdata.push(particle.v);
        Adata.push(particle.a);
    
        Tdata.push(Math.round(frameCount / fps * 100) / 100);
        addData(displacementChart, Tdata, Ddata);
        addData(velocityChart, Tdata, Vdata);
        addData(accelerationChart, Tdata, Adata);
        
     Set([{
         id: "displacementV",
         txt: "Displacement: " + Math.round(particle.s)
      }, 
      {
         id: "velocityV",
         txt: "Velocity: " + Math.round(particle.v * 10) / 10
      },
      {
         id: "accelerationV",
         txt: "Acceleration: " + particle.a
      }]);  
        
        Metrics();
     }
  
     if ((frameCount * 2) % fps === 0 && particle.a != 0) {
        Ddata.push(particle.s);
        Vdata.push(particle.v);
        Adata.push(particle.a);
        Tdata.push(frameCount / fps);
        addData(displacementChart, Tdata, Ddata);
        addData(velocityChart, Tdata, Vdata);
        addData(accelerationChart, Tdata, Adata);
  
      Set([{
         id: "displacementV",
         txt: "Displacement: " + Math.round(particle.s)
      }, 
      {
         id: "velocityV",
         txt: "Velocity: " + Math.round(particle.v * 10) / 10
      },
      {
         id: "accelerationV",
         txt: "Acceleration: " + particle.a
      }]);     
     }
  
     if (particle.a != 0) {
        frameCount++;
     }

}

function Metrics() {
        
    let s = S(0, particle.a, frameCount / fps);
    
    let v = V(0, particle.a, frameCount / fps);

    let a = particle.a
    
    console.log("Displacement: " + s,
                "Velocity: " + v,
                "Acceleration: " + particle.a);
    
}