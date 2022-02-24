//the size of the canvas
var cWidth = 800;
var cHeight = 800;

//the pixel density
var pDensity = 0.5;

//the width/height of the pixel array (i.e number of array items per row/column)
var pWidth;
var pHeight;

// framerate of the canvas. Normal rate is about 30. Set to a lower rate to slow canvas. 
var fr = 5;

// cycles randomly through images and changes image per refresh
var img;

function preload() {
  let ran = int(random(6));
  let fileName = "work" + ran + ".jpg";
  img = loadImage(fileName);
}

function setup() {

  // calls our framerate var fr and adjusts the framerate
  frameRate(fr);

  createCanvas(cWidth, cHeight);
  pixelDensity(pDensity);

  pWidth = 4 * cWidth * pDensity;
  pHeight = cHeight * pDensity;

  //background is an image
  image(img, 0, 0, cWidth, cHeight);

}

function draw() {

  fuzzPixels();
}

function fuzzPixels() {
  loadPixels();
  let imageSize = pWidth * (pHeight - 2); //skipping the first and last row
 //let imageSize = pWidth * pHeight;
  for (let i = pWidth + 4; i < imageSize - 4; i += 4) {

    /* check the surrounding pixels
     *        ______
     *       |0|1|2|
     *       |3|X|4|
     *       |5|6|7|
     *
     *  X is the current pixel
     */
    let chosenNeighbour = int(random(8));

    if (chosenNeighbour == 0) {
      pixels[i] = pixels[i - pWidth - 4] //Red
      pixels[i + 1] = pixels[i - pWidth - 3] //Green
      pixels[i + 2] = pixels[i - pWidth - 2] //Blue
    } else if (chosenNeighbour == 1) {
      pixels[i] = pixels[i - pWidth] //Red
      pixels[i + 1] = pixels[i - pWidth + 1] //Green
      pixels[i + 2] = pixels[i - pWidth + 2] //Blue
    } else if (chosenNeighbour == 2) {
      pixels[i] = pixels[i - pWidth + 4] //Red
      pixels[i + 1] = pixels[i - pWidth + 5] //Green
      pixels[i + 2] = pixels[i - pWidth + 6] //Blue
    } else if (chosenNeighbour == 3) {
      pixels[i] = pixels[i - 4] //Red
      pixels[i + 1] = pixels[i - 3] //Green
      pixels[i + 2] = pixels[i - 2] //Blue
    } else if (chosenNeighbour == 4) {
      pixels[i] = pixels[i + 4] //Red
      pixels[i + 1] = pixels[i + 5] //Green
      pixels[i + 2] = pixels[i + 6] //Blue
    } else if (chosenNeighbour == 5) {
      pixels[i] = pixels[i + pWidth - 4] //Red
      pixels[i + 1] = pixels[i + pWidth - 3] //Green
      pixels[i + 2] = pixels[i + pWidth - 2] //Blue
    } else if (chosenNeighbour == 6) {
      pixels[i] = pixels[i + pWidth] //Red
      pixels[i + 1] = pixels[i + pWidth + 1] //Green
      pixels[i + 2] = pixels[i + pWidth + 2] //Blue
    } else if (chosenNeighbour == 7) {
      pixels[i] = pixels[i + pWidth + 4] //Red
      pixels[i + 1] = pixels[i + pWidth + 5] //Green
      pixels[i + 2] = pixels[i + pWidth + 6] //Blue
    }

  }
  updatePixels();
}
