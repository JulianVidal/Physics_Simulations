const vectors = [];
let adding;

function Vectordraw(loop) {
        getVectors();
    

    // Background
    canvas.fillStyle = '#393e46';
    canvas.fillRect(0, 0,canvas.canvas.width, canvas.canvas.height);
    
    // Draws Origin
    canvas.beginPath();
    canvas.arc(origin.x, origin.y, 3, 0, Math.PI * 2);
    canvas.fillStyle = '#FFF';
    canvas.fill();
    canvas.closePath();
    
    // Draws Vectors
    if (!adding) {
        vectors.forEach( vector => {
        vector.draw({x: origin.x, y: origin.y}, true, '#FFF');
        });
    } else {
            for (let i = 0; i < vectors.length; i++) {
        if (i == 0) {
            vectors[i].draw({x: origin.x, y: origin.y}, true, '#FFF');
        } else {
            vectors[i].draw(vectors[i-1].endPoint, true, randomColor(i-1));
        }
                
         
    }

        
    let resultant;
    for (let i = 0; i < vectors.length; i++) {

        if (i == 0) {
            resultant = vectors[0];
        } else {
            resultant = Vector.add(resultant, vectors[i]);
        }
    }
    
    resultant.draw(origin, true, 'YellowGreen');

   Set(
        [{
            id: "magnitude",
            txt: "magnitude " + (Math.floor(resultant.magnitude * 10) / 10)
        }, 
        {
            id: "angle",
            txt: "angle " + (Math.floor(resultant.angle * (180 / Math.PI)))
        }]
    );
    }
    
    frameCount++;
}

function getVectors() {
    vectors.splice(vectors.length - 1, vectors.length);
    
    const magnitudes = document.getElementsByClassName("magnitude");
    const angles = document.getElementsByClassName("angle");

    for (let i = 0; i < magnitudes.length; i++) {
        const magnitude = parseFloat(magnitudes[i].value);
        
        const angle = parseFloat(angles[i].value);

        vectors[i] = new Vector(magnitude, angle);

    }
    
    
}

// Adds fVector
function extraVector() {
    const magnitude = document.createElement("input");
    const angle = document.createElement("input");

    magnitude.setAttribute("type", "number");
    angle.setAttribute("type", "number");

    magnitude.setAttribute("class", "magnitude border-secondary");
    angle.setAttribute("class", "angle border-secondary");

    magnitude.setAttribute("value", "0");
    angle.setAttribute("value", "0");

    magnitude.setAttribute("style", "height: 32px;color: inherit; padding: 10px;");
    angle.setAttribute("style", "height: 32px;color: inherit; padding: 10px;");
    
    const div = document.createElement("div");

    const parentDiv = document.getElementById("inputs");

    parentDiv.appendChild(div);

    div.appendChild(magnitude);
    div.appendChild(angle);
    
    /*const inputFields = document.getElementsByClassName("input");

    for (let i = 0; i < inputFields.length; i++) {
    console.log(inputFields[i].value);
    }*/

}

function addVectors() {
    adding = true;
}

function randomColor(i) {
    let c = i - (4 * Math.floor(i / 4));
    
    switch(c) {
        case 0:
        return 'red';
        break;
        case 1:
        return 'blue';
        break;
        case 2:
        return 'Chartreuse';
        break;
        case 3:
        return 'yellow';
        break;
        }
   
}
