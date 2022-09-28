import React, { useState, useEffect } from "react";

function Pad(props) {
  const { letter, url, keyTrigger, id } = props;

  let audio = (
    <audio
      src={url}
      ref={(ref) => (audio = ref)}
      id={letter}
      className="clip button"
      preload="none"
    ></audio>
  );

  const [sound] = useState(audio);

  useEffect(() => {
    document.addEventListener("keydown", detectKey);
  }, []);

  function Display() {
    return (document.getElementById("display").innerText = `${id}`);
  }

  const detectKey = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      audioSound();
      Display();
    }
  };

  const start = () => {
    audioSound();
    Display();
  };

  function audioSound() {
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          audio.volume(15);
          audio.pause();
        })
        .catch((error) => {});
    }
  }

  return (
    <div
      className="drum-pad"
      id={letter}
      key={letter}
      onClick={start}
      onKeyUpCapture={detectKey}
    >
      {sound}
      {letter}
    </div>
  );
}

export default Pad;
