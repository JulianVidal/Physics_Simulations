function Velocitydraw(loop) {

   // Gets value from slider
   // Either velocity or accelration
   if (Get(["velocity"])[0] != 0) {
      particle.v = Get(["velocity"])[0];
   } 

   // Background
   canvas.fillStyle = '#393e46';
   canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

   //  Draws particle
   canvas.beginPath();
   canvas.arc(particle.s, height / 2, radius, 0, Math.PI * 2)
   canvas.fillStyle = '#FFFFFF';
   canvas.fill();

   // Adds velocity
   // Velocity = change in displacement over time
   particle.s += particle.v / fps;

   particle.s = Math.round(particle.s * 10000) / 10000;


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
         txt: "Velocity: " + particle.v
      }]);
   }

   if ((frameCount * 2) % fps === 0 && particle.v != 0) {
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
         txt: "Velocity: " + particle.v
      }]);   }

   if (particle.v != 0) {
      frameCount++;
   }

}