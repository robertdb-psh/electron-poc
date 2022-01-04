import React from 'react'
const { desktopCapturer } = require('electron')

function ScreenSharingScreen() {
    //const { desktopCapturer } = Electron;
    const startScreenSharing = () => {
        desktopCapturer.getSources({ types: ['window', 'screen'] }, (error, sources) => {
            if (error) throw error
            for (let i = 0; i < sources.length; ++i) {
                if (sources[i].name === 'Your Window Name here!') {
                    navigator.webkitGetUserMedia({
                        audio: false,
                        video: {
                            mandatory: {
                                chromeMediaSource: 'desktop',
                                chromeMediaSourceId: sources[i].id,
                                minWidth: 1280,
                                maxWidth: 1280,
                                minHeight: 720,
                                maxHeight: 720
                            }
                        }
                    }, handleStream, handleError)
                    return
                }
            }
        })
    }

    const handleStream = (stream) => {
        document.querySelector('video').srcObject = stream
    }

    const handleError = (e) => {
        console.log(e)
    }


    return (
        <div>
            <h1>Screen Sharing</h1>
            <button onClick={() => {}}>Click here to start sharing</button>
            <div className='video-container'>
                <video autoPlay></video>
            </div>
        </div>
    )
}

export default ScreenSharingScreen
