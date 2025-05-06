import React, { useRef, useState, useEffect } from "react";

function TapToPlayVideo() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [zoomLevel, setZoomLevel] = useState(1);

    const handleVideoTap = () => {
        const videoElement = videoRef.current;
        if (!videoElement) return;

        if (videoElement.paused) {
            videoElement
                .play()
                .then(() => {
                    setIsPlaying(true);
                })
                .catch((error) => {
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

        videoElement.addEventListener("ended", handleVideoEnded);

        return () => {
            videoElement.removeEventListener("ended", handleVideoEnded);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            // スクロール量を取得 (例: 垂直方向のスクロール量)
            const scrollY = window.scrollY;

            // スクロール量に基づいてズーム率を計算 (調整が必要)
            // 例: スクロール量が 0 から増加するにつれてズーム率が 1 から増加
            const newZoomLevel = Math.max(1, 1 + scrollY / 500); // 500 は調整用の係数

            setZoomLevel(newZoomLevel);
        };

        // スクロールイベントリスナーを追加
        window.addEventListener("scroll", handleScroll);

        // クリーンアップ関数でイベントリスナーを削除
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            onClick={handleVideoTap}
            style={{
                cursor: "pointer",
                position: "relative",
                width: "100vw",
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <video
                ref={videoRef}
                src="/video/0423.mp4"
                preload="metadata"
                playsInline
                loop={false}
                style={{
                    display: "block",
                    width: "100vw",
                    height: "100vh",
                    objectFit: "cover",
                    transformOrigin: "center center", // ズームの中心を指定
                    transform: `scale(${zoomLevel})`, // 動的なズーム率を適用
                }}
            >
                お使いのブラウザはvideoタグに対応していません。
            </video>

            {!isPlaying && (
                <img
                    src="/logo/playmovie.png" // 画像のURL
                    alt="Play"
                    style={{
                        position: "absolute",
                        bottom: "1px", // 下からの距離
                        right: "20px", // 右からの距離
                        transform: "translate(0, 0)", // translate をリセット
                        borderRadius: "10px",
                        pointerEvents: "none",
                        maxWidth: "140px",
                        maxHeight: "140px",
                    }}
                />
            )}
        </div>
    );
}

export default TapToPlayVideo;
