import React from 'react'

function CameraComponent() {

    let video = null;
    const startVideo = () => {
        navigator.getUserMedia(
            { video: true, audio: true },
            (localMediaStream) => {
                video = document.querySelector('video')
                video.srcObject = localMediaStream;
                video.onloadedmetadata = (e) => {
                    // Ready to go. Do some stuff.
                    console.log('READY TO DO SMTHG')
                };
            },
            (e) => console.log('\n ERROR OCCURED \n', e));
    }
    return (
        <div>
            <h1>Camera & Audio</h1>
            { !video && <button className='btn btn-primary' onClick={startVideo}>START</button>}
            <div className='video-container m-3'> 
                <video autoPlay></video>
            </div>
        </div>
    )
}

export default CameraComponent
