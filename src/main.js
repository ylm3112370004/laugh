// require('./style.scss');
const { Player } = require('./player/index')
const music = document.querySelector('#music')

Player.init(music);

document.querySelector('.loading').classList.add('hide')
