const music = new Audio('https://soundhelix.com');
const playBtn = document.querySelector('#controlsContainer button:nth-child(2)');
const progress = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressBarContainer');

let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    music.pause();
    playBtn.textContent = '▶';
  } else {
    music.play();
    playBtn.textContent = '⏸';
  }
  isPlaying = !isPlaying;
}

// update progress bar as music plays
music.addEventListener('timeupdate', () => {
  const { duration, currentTime } = music;
  if (duration) {
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${(clickX / width) * 100}%`;
  }
});

// click progress bar to jump to specific time
progressContainer.addEventListener('click', (e) => {
  const width = progressContainer.clientWidth;
  const clickX = e.offsetX;
  const duration = music.duration;
  
  if (duration) {
    const newTime = (clickX / width) * duration;
    music.currentTime = newTime;
  }

});

playBtn.addEventListener('click', togglePlay);
