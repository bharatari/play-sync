export class Player {
  constructor() {
    this.video = this._getVideoElement();
  }

  play() {
    if (this.video) this.video.play();
  }

  pause() {
    if (this.video) this.video.pause();
  }

  seek(seekPosition) {
    if (this.video) this.video.currentTime = seekPosition;
  }

  _getVideoElement() {
    return document.getElementsByTagName('video')[0];
  }
}

export function getService({ window }) {
  if (window.document.domain.includes('netflix.com')) {
    return new Netflix();
  } else {
    return new Player();
  }
}
