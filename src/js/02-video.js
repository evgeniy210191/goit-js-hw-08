import Player from '@vimeo/player';
var throttle = require('lodash.throttle');
const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
  loop: true,
});

const video = document.querySelector('#vimeo-player');

player.on(
  'timeupdate',
  throttle(
    data => localStorage.setItem('videoplayer-current-time', data.seconds),
    1000
  )
);

const time = localStorage.getItem('videoplayer-current-time');

player
  .setCurrentTime(time)
  .then(function (seconds) {
    console.log(seconds);
  })
  .catch(function (error) {
    video.innerHTML = `
      <img src="https://kartinkin.net/uploads/posts/2022-12/1670639655_1-kartinkin-net-p-kartinki-zagruzki-pinterest-1.png">
    `;
  });
