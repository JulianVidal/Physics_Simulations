const canvasElement = document.createElement("canvas");
const canvas = canvasElement.getContext("2d");

const fps = 60;
let width = 500;
const height = 500;

const radius = 4;

let frameCount = 0;

const particle = {
    s: 0,
    v: 0,
    a: 0
}

window.onload = () => {
    console.log(location.pathname);

    if (location.pathname == "/velocity.html") {
        console.log("Velocity File")
   
        document.getElementById('canvas').appendChild(canvasElement);

        chart();

        const loop = setInterval(() => Velocitydraw(loop), 1000 / fps)

        width = document.body.offsetWidth;
        canvas.canvas.width = width;
        canvas.canvas.height = height;
    }

    if (location.pathname == "/displacement.html") {
        console.log("Displacement Files");

        // Appends canvaas to div
        document.getElementById('canvas').appendChild(canvasElement);

        // Game loop
        const loop = setInterval(() => Displacementdraw(loop), 1000 / fps);

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
    
    if (location.pathname == "/acceleration.html") {
        
        console.log("Acceleration File");
        
        // Appends canvaas to div
         document.getElementById('canvas').appendChild(canvasElement);
        
        chart();

        const loop = setInterval( () => Accelerationdraw(loop), 1000/fps);
        
        width = document.body.offsetWidth;
        canvas.canvas.width = width;
        canvas.canvas.height = height;
        
    }
    
        if (location.pathname == "/vector.html") {
        
        console.log("Vector File");
        
        // Appends canvaas to div
         document.getElementById('canvas').appendChild(canvasElement);
        
        const loop = setInterval( () => Vectordraw(loop), 1000/fps);
        
        width = document.body.offsetWidth;
        canvas.canvas.width = width;
        canvas.canvas.height = height;
       
        origin.x = width / 2;
        origin.y = height / 2;
            
        const extra = document.getElementById('extraVector');
            
        extra.addEventListener("click", extraVector);
        
        const add = document.getElementById('addVector');
         add.addEventListener("click", addVectors);
                        
    }

};