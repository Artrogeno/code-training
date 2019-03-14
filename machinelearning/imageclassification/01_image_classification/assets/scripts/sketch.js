let mobilenet;


function _gotResults(error, results) {
  if (error) { console.error(error) }
  else {
    console.log(results)
    let label = results[0].className
    let probability = results[0].probability
    fill(0)
    textSize(30)
    text(label, 10, height - 50)
    createP(label)
    createP(probability)
  }
}

function _modelLoaded() {
  console.log('Model is ready!!!')
  mobilenet.predict(chameleon, _gotResults)
}

function _imageLoaded() {
  image(chameleon, 0, 0, width, height)
}

function setup() {
  createCanvas(640, 480)
  chameleon = createImg('./assets/image/chameleon.jpg', _imageLoaded)
  chameleon.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', _modelLoaded)
}
