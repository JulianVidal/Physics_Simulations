const canvasElement = document.createElement("canvas");
const canvas = canvasElement.getContext("2d");

const fps = 60;
let width  = 500;
const height = 500;

const radius = 4;

let frameCount = 0;

const particle = {
    s: 0,
    v: 0,
    a: 0
 }
 