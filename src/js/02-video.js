import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player(document.querySelector('iframe'));
const onTimeupdate = function (event) {
  localStorage.setItem("videoplayer-current-time", event.seconds)
};

player.on('timeupdate', throttle(onTimeupdate, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time") || 0);