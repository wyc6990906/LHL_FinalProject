import React, {useState, useRef, useEffect} from 'react';
import DrumPad from "../drumPad/DrumPad";
import DemoMusicPlayer from "../demoMusicPlayer/DemoMusicPlayer";
import DemoSongItems from "../demoSongItems/DemoSongItems";
import "./DrumMachine.css"

const DrumMachine = (props) => {
  const volumeHandler = useRef()
  const iconVolume = useRef()
  const displayVolumeValue = useRef()
  const switchBank = useRef()
  const switchBankLabel = useRef()


  //mp3 recorder



  //demoMusicPlayer
  const URL = "http://localhost:3000/songs";
  const [songs, setSongs] = useState([]);
  useEffect(() => {
    fetch(URL).then((response) => {
      if (response.ok) {
        response.json().then(setSongs);
      }
    });
  }, []);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];


  function handleSelectSong(selectedSong) {
    const audioIndex = songs.findIndex(
      (song) => song.audioUrl === selectedSong.audioUrl
    );
    if (audioIndex >= 0) {
      setCurrentSongIndex(audioIndex);
    }
  }

  //drum machine set up
  const [bankIndex, setBankIndex] = useState(0)
  const [volumeValue, setVolumeValue] = useState(50)
  const [displayText, setDisplayText] = useState('DRUM MACHINE')
  const bankOne = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Heater-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Heater-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Heater-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Heater-4',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Clap',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: "Kick-n'-Hat",
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  ];
  const bankTwo = [{
    keyCode: 81,
    keyTrigger: 'Q',
    id: 'Chord-1',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
  }, {
    keyCode: 87,
    keyTrigger: 'W',
    id: 'Chord-2',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
  }, {
    keyCode: 69,
    keyTrigger: 'E',
    id: 'Chord-3',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
  }, {
    keyCode: 65,
    keyTrigger: 'A',
    id: 'Shaker',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
  }, {
    keyCode: 83,
    keyTrigger: 'S',
    id: 'Open-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
  }, {
    keyCode: 68,
    keyTrigger: 'D',
    id: 'Closed-HH',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
  }, {
    keyCode: 90,
    keyTrigger: 'Z',
    id: 'Punchy-Kick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
  }, {
    keyCode: 88,
    keyTrigger: 'X',
    id: 'Side-Stick',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
  }, {
    keyCode: 67,
    keyTrigger: 'C',
    id: 'Snare',
    url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
  ];
  const banks = [bankOne, bankTwo];
  const volumeHandlerStyle = {
    "--min": 0,
    "--max": 100,
    "--val": 50,
    "--width": "100%",
    "--height": "1.5em",
    "--border-radius": "0.5em",
    "--track-height": "0.75em",
    "--track-border-width": "1px",
    "--track-border-color": "#000",
    "--track-border-style": "solid",
    "--track-color": "#202020",
    "--progress-height": "0.75em",
    "--progress-color": "#35cac5",
    "--thumb-width": "1.15em",
    "--thumb-height": "1.15em",
    "--thumb-border-radius": "40%",
    "--thumb-color": "#202020",
    "--thumb-border": "1px solid #000"
  };

  const onBankChanged = ({target}) => {
    const bankIndex = target.checked ? 1 : 0;
    setBankIndex(bankIndex)
    setDisplayText('DRUM MACHINE')
  }

  const updateDisplayText = (text) => {
    setDisplayText(text)
  }

  const onVolumeChanged = ({target}) => {
    const value = Number.parseInt(target.value, 10);
    const volumeHandlerElm = volumeHandler.current;
    const iconVolumeElm = iconVolume.current;
    const displayVolumeValueElm = displayVolumeValue.current;
    volumeHandlerElm.style.setProperty('--val', value);
    if (value === 0) iconVolumeElm.className = "fas fa-volume-off";
    else if (value < 50) iconVolumeElm.className = "fas fa-volume-down";
    else iconVolumeElm.className = "fas fa-volume-up";
    displayVolumeValueElm.style.setProperty('opacity', 1);
    setTimeout(() => {
      displayVolumeValueElm.style.setProperty('opacity', 0);
    }, 1000);
    setVolumeValue(value)
  }

  const onMouseLeaveInput = () => {
    setTimeout(() => {
      displayVolumeValue.current.style.setProperty('opacity', 0);
    }, 2000);
  }


  return (
    <div className="drum-section">
      <div className="container">
        <div className="drum" id="drum-machine">
          <div className="drum-display" id="display">
            <h1>{displayText}</h1>
          </div>
          <div className="drum-control">
            <div className="drum-control-volumn">
              <i className="fas fa-volume-down" ref={iconVolume}/>
              <span> Volume</span>
              <span className="drum-control-volumn-value" ref={displayVolumeValue}> {volumeValue}</span>
              <input id="volumeControl"
                     type="range" onInput={onVolumeChanged} onMouseLeave={onMouseLeaveInput} style={volumeHandlerStyle}
                     ref={volumeHandler}/>
            </div>
            <div className="drum-control-bank">
              <div>{bankIndex ? "Smooth Piano Kit" : "Heater Kit"}</div>
              <label className="switch" title="Switch bank">
                <input type="checkbox" onChange={onBankChanged} ref={switchBank}/>
                <span id="switchBank" className="slider round" ref={switchBankLabel}/>
              </label>
            </div>
          </div>
          <div className="drum-pads">
            {
              banks[bankIndex].map((item, idx) => {
                return <DrumPad
                  key={idx}
                  padItem={item}
                  updateDisplayText={updateDisplayText}
                  volumeValue={volumeValue}/>

              })
            }
          </div>


          {/*  demoPlayer*/}
          {songs.length === 0 ? (
            <p>Loading....</p>
          ) : (
            <div className="playerContainer">
              <DemoMusicPlayer song={currentSong}/>
              <section className="Songs">
                <h4 className="head-title-1 title-center">PlayList</h4>
                <ul>
                  {songs.map((song) => (
                    <DemoSongItems
                      key={song.audioUrl}
                      song={song}
                      isCurrent={currentSong.audioUrl === song.audioUrl}
                      onSelect={handleSelectSong}
                    />
                  ))}
                </ul>
              </section>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DrumMachine;
