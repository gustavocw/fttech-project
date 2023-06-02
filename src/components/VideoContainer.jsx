import React, { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import useCurrentChannel from '../store/useCurrentChannel';
import "../../src/index.css"
import useModal from '../store/useModal';

let hls = null;

export default function VideoContainer() {
  const videoRef = useRef();
  const [currentChannel, currentChannelActions] = useCurrentChannel();
  const [_, modalActions] = useModal();

  const onManifestParsed = (_, data) => {
    currentChannelActions.setQualityLevels(data.levels)
  }

  const onHlsError = (event, data) => {
    if (data.fatal) {
      switch (data.type) {
        case Hls.ErrorTypes.NETWORK_ERROR:
          modalActions.setContent({ title: 'NETWORK_ERROR', content: <p>{currentChannel.url}</p> });
          hls.destroy();
          break;
        case Hls.ErrorTypes.MEDIA_ERROR:
          modalActions.setContent({ title: 'MEDIA_ERROR', content: <p>{currentChannel.url}</p> });
          hls.recoverMediaError();
          break;
        default:
          hls.destroy();
          break;
      }
    }

    localStorage.clear('current-channel');
  }

  useEffect(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;

    if (hls) hls.destroy();

    if (currentChannel.type === 'm3u8') {
      if (Hls.isSupported() && currentChannel.type === 'm3u8') {
        hls = new Hls();
        hls.loadSource(currentChannel.url);
        hls.attachMedia(video);
        hls.currentLevel = parseInt(currentChannel.qualityIndex, 10);

        hls.on(Hls.Events.MANIFEST_PARSED, onManifestParsed);
        hls.on(Hls.Events.ERROR, onHlsError);
      }
      else {
        video.src = currentChannel.url;
        video.addEventListener('canplay', async () => {
          await video.play();
        });
      }
    }

    return () => {
      if (hls) {
        hls.off(Hls.Events.MANIFEST_PARSED, onManifestParsed);
        hls.off(Hls.Events.ERROR, onHlsError);
      }
    }
  }, [currentChannel.url, currentChannel.qualityIndex]);

  return <>
    {currentChannel && currentChannel.type === 'iframe'
      ? <iframe
        className='w-100 br7'
        title={currentChannel.name}
        src={currentChannel.url}
        allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen></iframe>
      : <video className='a videoplayer' ref={videoRef} src={currentChannel.url} autoPlay ></video>}
  </>
}
