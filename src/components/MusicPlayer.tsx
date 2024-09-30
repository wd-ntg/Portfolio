import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-h5-audio-player/lib/styles.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import { RHAP_UI } from "react-h5-audio-player";

const AudioPlayer = dynamic(() => import("react-h5-audio-player"), {
  ssr: false,
});

interface Track {
  title: string;
  src: string;
}

interface MusicPlayerProps {
  track: Track;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ track }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handlePause = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className="relative border-[1px] border-white/60 px-4 py-4 sm:mx-24 mx:4  rounded-md flex justify-between
     items-center space-x-4"
    >
      <div className="w-72">
        <DotLottieReact
          className={`scale-125  object-cover duration-500 ${
            isPlaying ? "spin rounded-full" : "rounded-md"
          }`}
          src="/avocado.json"
          loop
          autoplay
        />
      </div>
      <div className="w-[2px] h-36 bg-white/60"></div>

      <div className="w-full">
        <div className="mx-4">
          <h3 className="text-white text-2xl font-semibold">{track.title}</h3>
          <div className="mb-4 text-white">Karik</div>
        </div>
        {isPlaying && (
          <div className="absolute right-[-10rem] top-8">
            <DotLottieReact src="/music_animation.json" loop autoplay />
          </div>
        )}
        <AudioPlayer
          autoPlay={false}
          src={track.src}
          showJumpControls={false}
          customProgressBarSection={[
            RHAP_UI.CURRENT_TIME,
            RHAP_UI.PROGRESS_BAR,
            RHAP_UI.DURATION,
          ]}
          customControlsSection={[RHAP_UI.MAIN_CONTROLS]}
          customIcons={{
            play: <PlayIcon className="h-6 w-6 text-black" />,
            pause: <PauseIcon className="h-6 w-6 text-black" />,
          }}
          onPlay={handlePlay}
          onPause={handlePause}
        />
      </div>
    </div>
  );
};

export default MusicPlayer;
