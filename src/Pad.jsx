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
    document.addEventListener("keydown", detectKey, false);
  }, []);

  function Display() {
    return (document.getElementById("display").innerText = `${id}`);
  }

  const detectKey = (e) => {
    if (e.key.toUpperCase() === keyTrigger) {
      AddClass(e);
      audioSound();
      clearClass(e);
    }
  };

  function AddClass(e) {
    document
      .getElementById(`${e.key.toUpperCase()}`)
      .classList.toggle("transform");
  }

  function clearClass(e) {
    setTimeout(() => {
      document
        .getElementById(`${e.key.toUpperCase()}`)
        .classList.remove("transform");
    }, 400);
  }

  const start = () => {
    audioSound();
  };

  function audioSound() {
    let playPromise = audio.play();

    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          audio.volume(15);
          audio.pause();
        })
        .catch((error) => {
          
        });
    }
    Display();
  }

  return (
    <div
      className="drum-pad"
      id={letter}
      key={letter}
      onClick={start}
      onKeyUpCapture={detectKey}
      style={{ AddClass }}
    >
      {sound}
      {letter}
    </div>
  );
}

export default Pad;
