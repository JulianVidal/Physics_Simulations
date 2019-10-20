const Ddata = [];
const Vdata = [];
const Adata = [];
const Tdata = [];

let displacementChart;
let velocityChart;
let accelerationChart;

window.onload = () => {

   if (location.pathname == "/velocity.html") {
      console.log("Velocity File")
      document.getElementById('canvas').appendChild(canvasElement);

      chart();

      const loop = setInterval(() => draw(loop), 1000 / fps)

      width = document.body.offsetWidth;
      canvas.canvas.width = width;
      canvas.canvas.height = height;
   }

};

function draw(loop) {

   // Gets value from slider
   // Either velocity or accelration
   if (Get().velocity > 0) {
      particle.v = Get().velocity;
   } else if (Get().acceleration > 0) {
      particle.a = Get().acceleration;
   }

   // Background
   canvas.fillStyle = '#393e46';
   canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);

   //  Draws particle
   canvas.beginPath();
   canvas.arc(particle.s, height / 2, radius, 0, Math.PI * 2)
   canvas.fillStyle = '#FFFFFF';
   canvas.fill();

   // Adds acceleration
   // Acceleration = change in velocity over time
   particle.v += particle.a;

   // Dealing with floating points erroe
   particle.v = Math.round(particle.v * 100) / 100;

   // Adds velocity
   // Velocity = change in displacement over time
   particle.s += particle.v;

   particle.s = Math.round(particle.s * 1000) / 1000;


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

   if ((frameCount * 2) % fps === 0 && particle.v > 0) {
      Ddata.push(particle.s);
      Vdata.push(particle.v);
      Adata.push(particle.a);
      Tdata.push(frameCount / fps);
      addData(displacementChart, Tdata, Ddata);
      addData(velocityChart, Tdata, Vdata);
      addData(accelerationChart, Tdata, Adata);

      Set(particle.s, particle.v, particle.a);
   }

   if (particle.v > 0) {
      frameCount++;
   }

}

let globalOptions = {
   scales: {
      yAxes: [{
         ticks: {
            beginAtZero: true,
            fontColor: '#EEEEEE'
         },
         scaleLabel: {
            display: true,
            fontColor: '#EEEEEE',
            labelString: ''
         }
      }],
      xAxes: [{
         ticks: {
            beginAtZero: true,
            fontColor: '#EEEEEE'
         },
         scaleLabel: {
            display: true,
            labelString: 'Time',
            fontColor: '#EEEEEE'
         }
      }]
   },
   legend: {
      labels: {
         fontColor: '#EEEEEE'
      }
   },
   responsive: true,
   hover: {
      mode: 'label'
   },
};

function chart() {


   globalOptions.scales.yAxes[0].scaleLabel.labelString = "Displacement";

   const contextDisplacement = document.getElementById("displacementChart").getContext('2d');
   displacementChart = new Chart(contextDisplacement, {
      type: 'line',
      data: {
         labels: Tdata,
         datasets: [{
            label: 'Displacement Vs time',
            data: Ddata,
            borderColor: 'rgb(255, 0, 0, 0.5)',
            backgroundColor: 'rgb(255, 0, 0, 0.2)'
         }]
      },
      options: globalOptions
   });

   globalOptions.scales.yAxes[0].scaleLabel.labelString = "Velocity";
   const contextVelocity = document.getElementById("velocityChart").getContext('2d');
   velocityChart = new Chart(contextVelocity, {
      type: 'line',
      data: {
         labels: Tdata,
         datasets: [{
            label: 'Velocity Vs time',
            data: Vdata,
            borderColor: 'rgb(0, 255, 0, 0.5)',
            backgroundColor: 'rgb(0, 255, 0, 0.2)'
         }]
      },
      options: globalOptions
   });

   globalOptions.scales.yAxes[0].scaleLabel.labelString = "Acceleration";
   const contextAcceleration = document.getElementById("accelerationChart").getContext('2d');
   accelerationChart = new Chart(contextAcceleration, {
      type: 'line',
      data: {
         labels: Tdata,
         datasets: [{
            label: 'Acceleration Vs time',
            data: Adata,
            borderColor: 'rgb(0, 0, 255, 0.5)',
            backgroundColor: 'rgb(0, 0, 255, 0.2)'
         }]
      },
      options: globalOptions
   });
}

function addData(chart, label, data) {
   chart.data.labels = label;
   chart.data.datasets[0].data = data;

   chart.update();
}