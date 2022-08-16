import React, {Component} from 'react';
import {Recorder} from 'react-voice-recorder'
import 'react-voice-recorder/dist/index.css'
import "./Mp3Recorder.css"

class Mp3Recorder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      audioDetails: {
        url: null,
        blob: null,
        chunks: null,
        duration: {
          h: 0,
          m: 0,
          s: 0
        }
      },
      show: false
    }
  }
  // offcanvas
  handleClose() {
    this.setState({show:false})
  }
  handleShow() {
    this.setState({show:true})
  }


  handleAudioStop(data) {
    console.log(data)
    this.setState({audioDetails: data});
  }

  handleAudioUpload(file) {
    // console.log(file);
  }

  handleCountDown(data) {
    // console.log(data);
  }

  handleReset() {
    const reset = {
      url: null,
      blob: null,
      chunks: null,
      duration: {
        h: 0,
        m: 0,
        s: 0
      }
    };
    this.setState({audioDetails: reset});
  }

  render() {
    return (
      <div className="mp3-container">
        <Recorder
          record={true}
          hideHeader={true}
          audioURL={this.state.audioDetails.url}
          showUIAudio
          handleAudioStop={data => this.handleAudioStop(data)}
          handleAudioUpload={data => this.handleAudioUpload(data)}
          handleCountDown={data => this.handleCountDown(data)}
          handleReset={() => this.handleReset()}
          mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
        />
        {/*<>*/}
        {/*  <Button variant="warning"onClick={() => this.handleShow()} className="me-2">*/}
        {/*    Recording*/}
        {/*  </Button>*/}
        {/*  <Offcanvas show={this.state.show} placement={"bottom"} onHide={ () => this.handleClose()}>*/}
        {/*    <Offcanvas.Header closeButton>*/}
        {/*      <Offcanvas.Title>Recording Your Music</Offcanvas.Title>*/}
        {/*    </Offcanvas.Header>*/}
        {/*    <Offcanvas.Body>*/}
        {/*      11*/}
        {/*    </Offcanvas.Body>*/}
        {/*  </Offcanvas>*/}
        {/*</>*/}
      </div>
    );
  }
}

export default Mp3Recorder;
