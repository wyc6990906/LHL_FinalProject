import React, {useState, useRef,useEffect} from 'react';
import DrumMachine from "../drumMachine/DrumMachine";
import DrumPad from "../drumPad/DrumPad";
import "../drumMachine/DrumMachine.css"
import Driver from "driver.js"
import 'driver.js/dist/driver.min.css';


const Tutorial = () => {
  // flag of componentDidUpdate()
  const mounting = useRef(true);
  //equal to componentDidUpdate()

  //driver.js
  const demo = ()=>{
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
          title: 'Volume control ',
          description: 'You can adjust the volume by swiping here!',
          position: 'bottom'
        }
      },
      {
        element: '#button3',
        popover: {
          title: 'Title on Popover',
          description: 'Body of the popover',
          position: 'right'
        }
      },
    ]);
    // Start the introduction
    driver.start();
  }


  useEffect(() => {
    if (mounting.current) {
      console.log("DidMount")
      demo()
      mounting.current = false;
      return
    }
    console.log("DidUpdated")
    // if (this.hideVolumeTimeout) {
    //   clearTimeout(this.hideVolumeTimeout);
    //   this.hideVolumeTimeout = null;
    // }
    // else {
    //   this.hideVolumeTimeout = setTimeout(() => {
    //     displayVolumeValue.current.style.setProperty('opacity', 0);
    //   }, 1000);
    // }
  });

  return (
    <div className="drum-section" style={{marginTop: "-100px"}}>
      <div className="container">
        <DrumMachine>
          <DrumPad/>
        </DrumMachine>
      </div>
    </div>
  );
};

export default Tutorial;
