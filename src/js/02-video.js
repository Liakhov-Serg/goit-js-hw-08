import Player from '@vimeo/player';
const currentTime = 'videoplayer-current-time';
const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
player.on('timeupdate', function (event) {
  console.log(event);
  localStorage.setItem(currentTime, JSON.stringify(event.seconds));
});
const setTime = JSON.parse(localStorage.getItem(currentTime));
player.setCurrentTime(setTime).then(function (seconds) {});