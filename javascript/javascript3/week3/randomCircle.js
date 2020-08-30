setInterval(function draw() {
  const creatCanvas = document.getElementById("canvas");
  const context = creatCanvas.getContext("2d");
  context.beginPath();
  context.arc(
    Math.floor(Math.random() * 500),
    Math.floor(Math.random() * 600),
    Math.floor(Math.random() * 400),
    0,
    Math.PI * 2
  );
  context.fillStyle = "#" + Math.random().toString(16).substr(-6);
  context.fill();
  context.stroke();
}, 100);
