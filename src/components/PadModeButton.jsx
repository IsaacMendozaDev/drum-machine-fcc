/* eslint-disable react/prop-types */
import capitalizeFirstLetter from "../utils/capitalizeFirstLetter";

export default function PadModeButton({
  value,
  iconSrc,
  padMode,
  changePadMode,
}) {
  const labelText = `${capitalizeFirstLetter(value)} `;

  const handleChange = (event) => {
    const mode = event.target.value;
    changePadMode(mode);
  };

  return (
    <>
      <input
        type="radio"
        className="btn-check"
        name="sound-group"
        id={value}
        autoComplete="off"
        value={value}
        checked={padMode === value}
        onChange={handleChange}
      />
      <label htmlFor={value} className="btn btn-outline-info fw-bold fs-5">
        {labelText}
        <img src={iconSrc} alt={`${labelText}'s icon`} />
      </label>
    </>
  );
}
