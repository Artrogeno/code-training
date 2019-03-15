let mobilenet;
let video;
let label;

function _modelLoaded() {
  console.log('Model is ready!!!')
  mobilenet.predict(_gotResults)
}

function _gotResults(error, results) {
  if (error) { console.error(error) }
  else {
    console.log(results)
    label = results[0].className
    setTimeout(() => {
      mobilenet.predict(_gotResults);
    }, 20000);
  }
}

function setup() {
  createCanvas(640, 600)
  video = createCapture(VIDEO)
  video.hide()
  background(0)
  mobilenet = ml5.imageClassifier('MobileNet', video, _modelLoaded)
}

function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);
}
