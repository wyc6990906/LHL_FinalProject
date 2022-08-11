import React, {useRef, useEffect} from 'react';
import DrumMachine from "../drumMachine/DrumMachine";
import DrumPad from "../drumPad/DrumPad";
import "../drumMachine/DrumMachine.css"
import "./Tutorial.css"
import Driver from "driver.js"
import 'driver.js/dist/driver.min.css';

const Tutorial = () => {
  // flag of componentDidUpdate()
  const mounting = useRef(true);
  //equal to componentDidUpdate()
  //driver.js
  const demo = () => {
    const driver = new Driver();
    driver.defineSteps([
      {
        element: '#drum-machine',
        popover: {
          className: 'first-step-popover-class',
          title: 'Ready to start?',
          description: 'Here is your tutorial...',
          position: 'left'
        }
      },
      {
        element: '#volumeControl',
        popover: {
          title: 'Volume control',
          description: 'You can adjust the volume by swiping here!',
          position: 'bottom'
        }
      },
      {
        element: '#switchBank',
        popover: {
          title: 'Switch Music Bank',
          description: 'You can change music bank by clicking here!',
          position: 'right'
        }
      },
      {
        element: '#Clap',
        popover: {
          title: 'Play the drum machine',
          description: 'Press the appropriate key to play~~~',
          position: 'top'
        }
      },
    ]);
    // Start the introduction
    driver.start();
  }
  // forceUpdate
  const forceUpdate = () => {
    window.location.reload()
  }

  useEffect(() => {
    if (mounting.current) {
      // console.log("DidMount")
      demo()
      mounting.current = false;
      return
    }
    // console.log("DidUpdated")
  });

  return (
    <div className="drum-section">
      <div className="container">
        <div className="tutorialButton">
          <button className="button-tutorial" onClick={() => forceUpdate()}>Get Start</button>
        </div>
        <div className="tutorialDrum">
          <DrumMachine>
            <DrumPad/>
          </DrumMachine>
        </div>
      </div>
    </div>
  );
};

export default Tutorial;
