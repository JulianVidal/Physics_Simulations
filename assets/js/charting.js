const Ddata = [];
const Vdata = [];
const Adata = [];
const Tdata = [];

let displacementChart;
let velocityChart;
let accelerationChart;

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