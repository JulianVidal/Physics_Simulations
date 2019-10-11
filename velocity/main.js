const canvasElement = document.createElement("canvas");
const canvas = canvasElement.getContext("2d");

const fps = 60;
let width  = 500;
const height = 500;

const radius = 4;

const Ddata = [];
const Vdata = [];
const Adata = [];
const Tdata = [];

let particleD = 1 + radius;

let particleV = 0;

let particleA = 0;

let particleAT = 0;

let frameCount = 0;

let displacementChart;

window.onload = () => {

      document.getElementById('canvas').appendChild(canvasElement);

      chart();

      const loop = setInterval( () => draw(loop) , 1000 / fps)
      
      width = document.body.offsetWidth;
      canvas.canvas.width  = width;
      canvas.canvas.height = height;
   };

 function draw(loop) {

   // Gets value from slider
   // Either velocity or accelration
   if (Get().velocity > 0) {
      particleV = Get().velocity;
   } else if (Get().acceleration > 0) {
      particleA = Get().acceleration;
   } else {
      particleAT = Get().accelerationTime;
   }

   // Background
   canvas.fillStyle = '#393e46';
   canvas.fillRect(0, 0, canvas.canvas.width, canvas.canvas.height);
 
   //  Draws particle
   canvas.beginPath();
   canvas.arc(particleD, height / 2, radius, 0, Math.PI * 2)
   canvas.fillStyle = '#FFFFFF';
   canvas.fill();

   // Adds more acceleration to acceleration
   particleA += particleAT;

   // Adds acceleration
   // Acceleration = change in velocity over time
   particleV += particleA;

   // Adds velocity
   // Velocity = change in displacement over time
   particleD += particleV;

   if (particleD >= width) {
      clearInterval(loop);
   }

   if (frameCount % fps === 0 && particleV > 0) {
      Ddata.push(particleD);
      Vdata.push(particleV);
      Adata.push(particleA);
      Tdata.push(frameCount / fps);
      addData(displacementChart, Tdata, Ddata);
      addData(velocityChart,     Tdata, Vdata);
      addData(accelerationChart, Tdata, Adata);

      Set(particleD, particleV, particleA, particleAT);
   }

   frameCount++;
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