function setup() {
  let cnv = createCanvas(792, 440);
  cnv.style('border-radius', '20px');
  colorMode(HSB);

  previousParticlePosition = createVector();
  describe(
    'When the cursor drags along the black background, it draws a pattern of multicolored circles outlined in white and connected by white lines. The circles and lines fade out over time.'
  );
}

  for (let path of paths) {
    path.update();
    path.display();
  }