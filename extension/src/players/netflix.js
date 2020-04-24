import Player from './index';

export default class Netflix extends Player {
  constructor() {
    super();
  }

  play() {
    super.play();
  }

  pause() {
    super.pause();
  }

  seek(seekPosition) {
    this._embed(this._generateSeekNetflix(seekPosition));
  }

  _generateSeekNetflix(seekPosition) {
    return `function () {
      if (window.netflix) {
        const videoPlayer = window.netflix
          .appContext
          .state
          .playerApp
          .getAPI()
          .videoPlayer
  
        const playerSessionId = videoPlayer
          .getAllPlayerSessionIds()[0]
  
        const player = videoPlayer
          .getVideoPlayerBySessionId(playerSessionId)
  
        if (player) player.seek(${seekPosition} * 1000);
      }
    }`;
  }

  _embed(fnString) {
    const script = document.createElement('script');
    script.text = `(${fnString})();`;
    document.documentElement.appendChild(script);
  }
}
