class VideoPlayer {
   constructor() {
      this.player = document.querySelector('.player');
      this.video = this.player.querySelector('.viewer');
      this.progress = document.querySelector('.progress');
      this.progressBar = this.progress.querySelector('.progress__filled');
      this.toggle = this.player.querySelector('.toggle');
      this.skipButtons = this.player.querySelectorAll('[data-skip]');
      this.ranges = this.player.querySelectorAll('.player__slider');
      this.mouseDown = false;
   }

   init() {
      this.events(self);
   }

   events(self) {
      // this.video.addEventListener('click', this.togglePlay.bind(this));
      this.video.addEventListener('click', e => this.togglePlay(e));
      this.video.addEventListener('timeupdate', e => this.handleProgress(e));
      this.toggle.addEventListener('click', e => this.togglePlay());
      this.ranges.forEach(range => range.addEventListener('change', e => this.handleRangeUpdate(e)));
      this.ranges.forEach(range => range.addEventListener('mousemove', e => this.handleRangeUpdate(e)));
      this.skipButtons.forEach(btn => btn.addEventListener('click', e => this.skip(e)));
      this.progress.addEventListener('click', e => this.scrub(e));
      this.progress.addEventListener('mousemove', e => this.mouseDown && this.scrub(e));
      this.progress.addEventListener('mousedown', () => this.mouseDown = true);
      this.progress.addEventListener('mouseup', () => this.mouseDown = false);
   }

   togglePlay(e) {
      const method = this.video.paused ? 'play' : 'pause';
      this.toggle.textContent = this.video.paused ? '| |' : '<';
      this.video[method]();
   }

   handleRangeUpdate(e) {
      this.video[e.target.name] = e.target.value;
   }

   skip(e) {
      this.video.currentTime += parseFloat(e.target.dataset.skip);
   }

   handleProgress(e) {
      const percent = (this.video.currentTime / this.video.duration) * 100;
      this.progressBar.style.flexBasis = `${percent}%`;
      // console.log(percent);
   }

   scrub(e) {
         this.video.currentTime = (e.offsetX / this.progress.offsetWidth) * this.video.duration;
   }
}

const video = new VideoPlayer();
video.init();

console.log(video);