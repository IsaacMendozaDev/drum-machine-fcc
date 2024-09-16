// eslint-disable-next-line react/prop-types
export default function PadNote({ id, keyTrigger, url, playAudio }) {
  return (
    <>
      <button
        id={id}
        className="drum-pad col btn btn-info fw-bold fs-4"
        onClick={playAudio}
      >
        {keyTrigger}
      </button>
      <audio src={url}></audio>
    </>
  );
}
