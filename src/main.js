// require('./style.scss');
import Player from './player/index'

const music = document.querySelector('#music') || null

Player.init(music, () => {
  document.body.removeChild(document.querySelector('.move-to-play'))
});