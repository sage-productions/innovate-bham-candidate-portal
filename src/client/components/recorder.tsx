import React from 'react'
import VideoRecorder from 'react-video-recorder'

const Recorder: React.FC = () => (
  <VideoRecorder
    onRecordingComplete={videoBlob => {
      // Do something with the video...
      console.log('videoBlob', videoBlob)
    }}
  />
)



//   const Recorder = () => <Webcam />;


export default Recorder;