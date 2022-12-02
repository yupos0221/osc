let isPlaying = false
let osc = null

function setup() {
  // createCanvas(600, 600);    
  osc = new p5.Oscillator('sine')
  osc.start()
  isPlaying = true
  // 周波数1000からスタート
  osc.freq(1000)
}

function draw() {
  // 開始から1秒後にrandom(400)な周波数が渡される
  if(isPlaying) osc.freq(random(400), 1)
}