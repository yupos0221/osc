let isPlaying = false;
let osc = null;


function setup(){
    osc = new p5.Oscillator("sine");
    createCanvas(640, 480);
    background(220);
}

// function mouseClicked(){
//     osc.start();
//     osc.amp(mouseX/width);
//     osc.freq(440);
//     osc.freq(880, 0.7);
// }

function mousePressed(){
    osc.start();
    osc.amp(mouseY/height);
    osc.freq(1100*(mouseX/width)+220);
    isPlaying = true;
}

function mouseDragged(){
    if(isPlaying){
        osc.amp(mouseY/height);
        osc.freq(1100*(mouseX/width)+220);
    }
    // console.log("Dragged")
}

function mouseReleased(){
    osc.stop();
    isPlaying = false;
}