function setup() {
    createCanvas(1280, 720);
}

function draw() {
    if (mouseIsPressed) {
        fill(255, 0, 0); 
    } else {
        fill(255); 
    }

    
    beginShape();
    vertex(mouseX, mouseY - 50);
    bezierVertex(mouseX + 50, mouseY - 80, mouseX + 90, mouseY - 40, mouseX, mouseY + 50);
    bezierVertex(mouseX - 90, mouseY - 40, mouseX - 50, mouseY - 80, mouseX, mouseY - 50);
    endShape(CLOSE);
}
