

function setup() {
   let cnv= createCanvas(2000,5500);
    colorMode(HSB);
    noStroke();
  cnv.id('idk');

    let colorA = color(207, 53.7, 62.7);
    let colorB = color(61, 29.9, 30.2);
    let stripeCount = 20;
  
    let stripeHeight = height / stripeCount;
  
    for (let y = 0; y < height; y += stripeHeight) {

      let fadeAmount = y / height;
  
      let betweenColor = lerpColor(colorA, colorB, fadeAmount);
  
      fill(betweenColor);
      rect(0, y, width, stripeHeight);
    }
  
  }
