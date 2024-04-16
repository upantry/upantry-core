import { useEffect, useRef } from "react";
import Button from "react-bootstrap/Button";

export function Camera(props: { onPictureTaken: (picture: string) => void }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElt = videoRef.current;
    if (!videoElt) return;

    let mediaStream: MediaStream;
    navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
      mediaStream = stream;
      videoElt.srcObject = stream;
      videoElt.play();
    });

    return () => {
      for (const track of mediaStream?.getTracks() || []) {
        track.stop();
      }
    };
  }, [videoRef]);

  function takeSnapshot() {
    const videoElt = videoRef.current;
    if (!videoElt) return;

    const canvas = document.createElement("canvas");
    canvas.width = videoElt.width;
    canvas.height = videoElt.height;

    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(videoElt, 0, 0, canvas.width, canvas.height);

    props.onPictureTaken(canvas.toDataURL("base64"));
  }

  return (
    <div style={{ position: "relative", height: "100%" }}>
      <video
        ref={videoRef}
        autoPlay={true}
        width={400}
        height={400}
        style={{
          width: "100%",
          height: "100%",
        }}
      />

      <div
        className="d-grid mx-2 my-2"
        style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      >
        <Button variant="primary" onClick={takeSnapshot}>
          Take Picture
        </Button>
      </div>
    </div>
  );
}
