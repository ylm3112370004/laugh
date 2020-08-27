const { styleText } = require('./style.js')
const Player = {
  interval: false,
  id: undefined,
  time: 0,
  n: 0,
  ui: {
    terminal: document.querySelector('#terminal'),
    styleDiv: document.querySelector('#demo2')
  },
  init: (music) => {
    Player.music = music
    Player.ui.terminal.innerText = styleText.substring(0, Player.n)
    Player.ui.styleDiv.innerHTML = styleText.substring(0, Player.n)
    Player.play()
    Player.bind()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal',
    '#btnFast': 'fast',
  },
  bind: () => {
    for(let key in Player.events) {
      if(Player.events.hasOwnProperty(key)) {
        const value = Player.events[key]
        document.querySelector(key).onclick = Player[value]
      }
    }
  },
  run: () => {
    Player.n = Player.n + 1
    if(Player.n > styleText.length) {
      Player.clearInterval()
      return;
    }
    Player.ui.terminal.innerText = styleText.substring(0, Player.n)
    Player.ui.styleDiv.innerHTML = styleText.substring(0, Player.n)
    Player.ui.terminal.scrollTop = Player.ui.terminal.scrollHeight
  },
  play: () => {
    if(Player.n > styleText.length) Player.n = 0; 
    if(Player.interval) return
    if(Player.music) Player.music.play()  // 适配音乐
    Player.id = setInterval(Player.run, Player.time)
    Player.interval = true;
  },
  clearInterval: () => {
    window.clearInterval(Player.id)
    Player.interval = false
  },
  pause: () => {
    if(Player.music) Player.music.pause()   // 适配音乐
    Player.clearInterval()
  },
  slow: () => {
    Player.pause()
    Player.time = 200
    Player.play()
  },
  normal: () => {
    Player.pause()
    Player.time = 50
    Player.play()
  },
  fast: () => {
    Player.pause()
    Player.time = 0
    Player.play()
  }
}

export default Player