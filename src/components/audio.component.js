import MicRecorder from "mic-recorder-to-mp3";
import React from "react";
const ffmpeg = require("ffmpeg");

const Mp3Recorder = new MicRecorder({ bitRate: 128 });

class Audio extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRecording: false,
      blobURL: '',
      isBlocked: false,
    };
  }

  start = () => {
    if (this.state.isBlocked) {
      console.log('Permission Denied');
    } else {
      Mp3Recorder
        .start()
        .then(() => {
          this.setState({ isRecording: true });
        }).catch((e) => console.error(e));
    }
  };

  stop = () => {
    Mp3Recorder
      .stop()
      .getMp3()
      .then(([buffer, blob]) => {
        const blobURL = URL.createObjectURL(blob)
        this.setState({ blobURL, isRecording: false });
      }).catch((e) => console.log(e));
  };

  componentDidMount() {
    navigator.getUserMedia({ audio: true },
      () => {
        console.log('Permission Granted');
        this.setState({ isBlocked: false });
      },
      () => {
        console.log('Permission Denied');
        this.setState({ isBlocked: true })
      },
    );
  }
  // requestToPermissions = async () => {
  //   try {
  //     const granted = await PermissionsAndroid.request(
  //       PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
  //       {
  //         title: 'Music',
  //         message:
  //           'App needs access to your Files... ',
  //         buttonNeutral: 'Ask Me Later',
  //         buttonNegative: 'Cancel',
  //         buttonPositive: 'OK',
  //       },
  //     );
  //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
  //       console.log('startDownload...');
  //       this.startDownload();
  //     }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };


// startDownload = () => {
//     const {tunes, token, currentTrackIndex} = this.state;
//     let {url, name} = tunes[currentTrackIndex];
//     RNFetchBlob.config({
//       fileCache: true,
//       appendExt: 'mp3',
//       addAndroidDownloads: {
//         useDownloadManager: true,
//         notification: true,
//         title: name,
//         path: RNFetchBlob.fs.dirs.DownloadDir + `${name}`, // Android platform
//         description: 'Downloading the file',
//       },
//     })
//       .fetch('GET', url)
//       .then(res => {
//         console.log('res', res);
//         console.log('The file is save to ', res.path());
//       });
//   };

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <button classname = "button-basic-2" onClick={this.start} disabled={this.state.isRecording}>Record</button>
          <button onClick={this.stop} disabled={!this.state.isRecording}>Stop</button>
          <audio src={this.state.blobURL} controls="controls" />
        </header>
      </div>
    );
  }
}
export default Audio;