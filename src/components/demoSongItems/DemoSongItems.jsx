import React from 'react';

const DemoSongItems = ({song, isCurrent, onSelect}) => {
  const background = isCurrent ? "#202020" : "none";
  const style = {background};

  function handleClick() {
    onSelect(song);
  }

  return (
    <div id="playList">
      <li
        className={`SongListItem ${isCurrent ? "selected" : ""}`}
        style={style}
        onClick={handleClick}
        id="Song"
      >
        {song.title} by {song.artist}
      </li>
    </div>

  );
};

export default DemoSongItems;
