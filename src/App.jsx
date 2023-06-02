import React, { useCallback, useEffect, useState } from 'react';
import VideoContainer from './components/VideoContainer';
import useChannels from './store/useChannels';
import "../src/index.css"

export default function App() {
  const [channelsState, channelsActions] = useChannels();
  const [channel, setChannel] = useState('');
  const [tempChannels, setTempChannels] = useState(channelsState.defaultChannels);



  useEffect(() => {
    channelsActions.load(channelsState.url)
      .then(channels => {
        setTempChannels(channels)
      })
  }, []);


  return (
  <div className="container">
    <VideoContainer />
  </div>
  );
};
