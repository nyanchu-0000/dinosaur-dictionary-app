import React, { useRef, useState, useEffect } from 'react';

function TapToPlayVideo() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleVideoTap = () => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    if (videoElement.paused) {
      videoElement.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(error => {
          console.error("動画の再生に失敗しました:", error);
        });
    } else {
      videoElement.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleVideoEnded = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener('ended', handleVideoEnded);

    return () => {
      videoElement.removeEventListener('ended', handleVideoEnded);
    };
  }, []);

  return (
    <div
      onClick={handleVideoTap}
      style={{
        cursor: 'pointer',
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <video
        ref={videoRef}
        src="/video/0423.mp4"
        preload="metadata"
        playsInline
        loop={false}
        style={{
          display: 'block',
          width: '100vw',
          height: '100vh',
          objectFit: 'cover',
        }}
      >
        お使いのブラウザはvideoタグに対応していません。
      </video>

      {!isPlaying && (
        <img
          src="/logo/playmovie.png" // 画像のURL
          alt="Play"
          style={{
            position: 'absolute',
            bottom: '1px', // 下からの距離
            right: '20px',  // 右からの距離
            transform: 'translate(0, 0)', // translate をリセット

            borderRadius: '10px',
            pointerEvents: 'none',
            maxWidth: '140px',
            maxHeight: '140px',
          }}
        />
      )}
    </div>
  );
}

export default TapToPlayVideo;