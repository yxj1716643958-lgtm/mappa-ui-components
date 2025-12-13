"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => {
      setIsLoaded(true);
      video.play().catch((error) => {
        console.log("视频自动播放失败:", error);
      });
    };

    video.addEventListener("canplay", handleCanPlay);

    // 如果视频已经加载完成
    if (video.readyState >= 3) {
      handleCanPlay();
    }

    return () => {
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 scale-105">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="https://moxing12311.oss-cn-beijing.aliyuncs.com/%E7%9F%A5%E8%A1%8C%E5%90%88%E4%B8%80%E4%BD%9C%E5%93%81%E6%B7%B7%E5%89%AA.mp4"
            type="video/mp4"
          />
          您的浏览器不支持视频播放
        </video>
      </div>

      {/* 视频控制按钮 */}
      {isLoaded && (
        <div className="absolute top-28 right-10 z-20 flex gap-4">
          {/* 播放/暂停按钮 */}
          <button
            onClick={togglePlay}
            className="group w-14 h-14 bg-black/50 hover:bg-red-600 backdrop-blur-sm border border-white/20 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label={isPlaying ? "暂停" : "播放"}
          >
            {isPlaying ? (
              // 暂停图标
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            ) : (
              // 播放图标
              <svg
                className="w-6 h-6 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            )}
          </button>

          {/* 静音/取消静音按钮 */}
          <button
            onClick={toggleMute}
            className="group w-14 h-14 bg-black/50 hover:bg-red-600 backdrop-blur-sm border border-white/20 hover:border-red-600 rounded-full flex items-center justify-center transition-all duration-300"
            aria-label={isMuted ? "开启声音" : "静音"}
          >
            {isMuted ? (
              // 静音图标
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
              </svg>
            ) : (
              // 有声音图标
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
              </svg>
            )}
          </button>
        </div>
      )}

      {/* Loading placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 z-10 bg-black flex items-center justify-center text-white">
          <div className="text-center">
            <div className="text-2xl mb-2">UKA</div>
            <div className="text-sm text-gray-400">加载中...</div>
          </div>
        </div>
      )}
    </section>
  );
}
