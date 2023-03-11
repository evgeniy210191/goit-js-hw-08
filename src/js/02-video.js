import Player from '@vimeo/player';

const player = new Player('vimeo-player', {
  id: 19231868,
  width: 640,
});

// player.on('play', function () {
//     duration: 61.857;
//     percent: 0.049;
//   seconds: 3.034;
//   console.log('hello');
//   
// });
const onPlay = function () {
  console.log('hello');
  
};

player.on('play', onPlay);

player.off('play', onPlay);

const time = localStorage.getItem('time')

player
  .setCurrentTime(time)
  .then(function (seconds) {
    console.log(seconds);
    
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        console.log('seconds');// the time was less than 0 or greater than the video’s duration
        break;

      default:
        console.log('seconds');// some other error occurred
        break;
    }
  });

  // _.throttle(updatePosition, 100);