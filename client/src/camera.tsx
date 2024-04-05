import { useEffect, useRef } from "react"

export function Camera(props: {
    onPictureTaken: (picture: string) => void,
}) {
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const videoElt = videoRef.current;
        if (!videoElt) return;

        console.log('getting a stream');
        let mediaStream: MediaStream;
        navigator.mediaDevices
            .getUserMedia({video: true})
            .then((stream) => {
                mediaStream = stream;
                videoElt.srcObject = stream;
                videoElt.play();
            });

        return () => {
            for (const track of mediaStream?.getTracks() || []) {
                track.stop();
            }    
        }
    }, [videoRef]);

    function takeSnapshot() {
        const videoElt = videoRef.current;
        if (!videoElt) return;

        const canvas = document.createElement('canvas');
        canvas.width = videoElt.width;
        canvas.height = videoElt.height;

        const ctx = canvas.getContext('2d')!;
        ctx.drawImage(videoElt, 0, 0, canvas.width, canvas.height);

        props.onPictureTaken(canvas.toDataURL('base64'));
    }

    return <>
        <video 
            ref={videoRef}
            autoPlay={true}
            width={400} 
            height={400} />

        <button onClick={takeSnapshot}>Take picture</button>
    </>
}
