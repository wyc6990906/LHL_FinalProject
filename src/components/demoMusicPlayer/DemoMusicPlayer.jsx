import { useRef  } from "react";
import "./DemoMusicPlayer.css";

const DemoMusicPlayer = ({ showControls = false, song }) => {
  const audioRef = useRef();
  const { audioUrl, coverUrl } = song;
  return (
    <section className="SongPlayer">
      <img width="250" height="250" src={coverUrl} alt="Song cover" />
      <audio ref={audioRef} key={audioUrl} controls={showControls}>
        <source src={audioUrl} />
      </audio>
      <div>
        <button id="play" onClick={() => audioRef.current.play()}>Play</button>
        <button id="pause" onClick={() => audioRef.current.pause()}>Pause</button>
      </div>
    </section>
  );
};

export default DemoMusicPlayer;
