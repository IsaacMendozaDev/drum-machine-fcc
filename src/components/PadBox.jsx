import { drumSoundGroup } from "../data/constants";
import PadNote from "./PadNote";

function DrumPad() {
  const handlePlayAudio = () => {};

  return (
    <>
      {drumSoundGroup.map(({ id, keyTrigger, url }) => (
        <PadNote
          key={id}
          keyTrigger={keyTrigger}
          url={url}
          playAudio={handlePlayAudio}
        />
      ))}
    </>
  );
}
function PianoPad() {
  return <h1>PIANO</h1>;
}

export default function PadBox({ padMode }) {
  switch (padMode) {
    case "piano":
      return PianoPad();
    case "drum":
      return DrumPad();
  }
}
// GOOD PRACTICE?
