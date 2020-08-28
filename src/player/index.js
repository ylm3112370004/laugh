const { styleText } = require('./style.js')
const Player = {
  id: -1,
  time: 0,
  n: 0,
  music: null,
  callback: null,
  ui: {
    terminal: document.querySelector('#terminal'),
    styleDiv: document.querySelector('#demo2')
  },
  init: (music, callback) => {
    Player.music = music
    Player.callback = callback
    Player.ui.terminal.innerText = styleText.substring(0, Player.n)
    Player.ui.styleDiv.innerHTML = styleText.substring(0, Player.n)
    Player.bind()
  },
  events: {
    '#btnPause': 'pause',
    '#btnPlay': 'play',
    '#btnSlow': 'slow',
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
    if(Player.id < 0) return 
    if(Player.music) Player.music.play()  // 适配音乐
    if(Player.callback) {
      Player.callback()
      Player.callback = null
    }
    Player.id = setInterval(Player.run, Player.time)
  },
  clearInterval: () => {
    window.clearInterval(Player.id)
    Player.id = -1
  },
  pause: () => {
    if(Player.music) Player.music.pause()   // 适配音乐
    Player.clearInterval()
  },
  slow: () => {
    if(Player.time === 100) return
    Player.pause()
    Player.time = 100
    Player.play()
  },
  fast: () => {
    if(Player.time === 0) return
    Player.pause()
    Player.time = 0
    Player.play()
  }
}

export default Player