function setup() {
    let cnv = createCanvas(960, 540);
  cnv.id('canvas2');
    background(144, 238, 144);
    noStroke();
    fill(200,0,0);
    rect(10, 10, 55, 50);
    fill('rgba(0, 0, 200, 0.5)');
    rect(30, 30, 55, 50);
  }
  

function setup() {
   let cnv= createCanvas(2000,8000);
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

  function setup() {
    let cnv3 = createCanvas(960, 540);
    cnv3.id('canvas');
    cnv3.parent('movecanvas');
  }