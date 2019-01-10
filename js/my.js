class VideoPlayer {
   constructor() {
      this.player = document.querySelector('.player');
      this.video = this.player.querySelector('.viewer');
      this.progress = document.querySelector('.progress');
      this.progressBar = this.progress.querySelector('.progress__filled');
      this.toggle = this.player.querySelector('.toggle');
      this.skipButtons = this.player.querySelectorAll('[data-skip]');
      this.ranges = this.player.querySelectorAll('.player__slider');
   }

   init() {
      this.events();
   }

   events() {
      // this.video.addEventListener('click', this.togglePlay.bind(this));
      this.video.addEventListener('click', e => this.togglePlay());
      this.toggle.addEventListener('click', e => this.togglePlay());
   }

   togglePlay() {
      const method = this.video.paused ? 'play' : 'pause';
      this.toggle.textContent = this.video.paused ? '1' : '2';
      this.video[method]();
   }

   skip() {

   }
}

const video = new VideoPlayer();
video.init();

console.log(video);