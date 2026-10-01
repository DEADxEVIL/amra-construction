import { useEffect, useRef, useState } from 'react';
import constructionVideo from '../assets/video/construction.mp4';
import './BackgroundVideo.css';

// Minimal dark poster to prevent a blank frame before the video loads.
const POSTER_DATA =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/5/hPwAIAQL8sZJzTAAAAABJRU5ErkJggg==';

export default function BackgroundVideo() {
  const videoRef = useRef(null);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let interactionHandler;

    const handleError = () => {
      setVideoFailed(true);
    };

    const handlePlayFailure = () => {
      interactionHandler = () => {
        video.play().catch(() => {});
        document.removeEventListener('click', interactionHandler);
        document.removeEventListener('touchstart', interactionHandler);
      };

      document.addEventListener('click', interactionHandler, {
        once: true,
        passive: true,
      });

      document.addEventListener('touchstart', interactionHandler, {
        once: true,
        passive: true,
      });
    };

    video.addEventListener('error', handleError);

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise.catch(handlePlayFailure);
    }

    return () => {
      video.removeEventListener('error', handleError);

      if (interactionHandler) {
        document.removeEventListener('click', interactionHandler);
        document.removeEventListener('touchstart', interactionHandler);
      }
    };
  }, []);

  if (videoFailed) {
    return <div className="bg-video-layer__fallback" />;
  }

  return (
    <div className="bg-video-layer" aria-hidden="true">
      <video
        ref={videoRef}
        className="bg-video-layer__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={POSTER_DATA}
      >
        <source src={constructionVideo} type="video/mp4" />
      </video>
    </div>
  );
}