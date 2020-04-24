import { sendMessageToBackground } from './helpers/messaging';

export function syncStateToPlayer(player, currentPartyState, newPartyState) {
  const updatedProperties = getUpdatedProperties(
    currentPartyState,
    newPartyState
  );

  if (updatedProperties.playing != null) {
    if (updatedProperties.playing) {
      service.play();
    } else {
      service.pause();
    }
  }

  if (updatedProperties.seekPosition != null) {
    service.seek();
  }
}

export function syncHTML5PlayerToState(videoElement) {
  if (videoElement) {
    videoElement.onpause = (event) => {
      if (currentPartyState && !currentPartyState.playing) {
        return;
      }

      sendMessageToBackground({
        playing: false,
        seekPosition: video.currentTime,
      });
    };

    videoElement.onplay = (event) => {
      if (currentPartyState && currentPartyState.playing) {
        return;
      }

      sendMessageToBackground({ playing: true });
    };
  }
}
