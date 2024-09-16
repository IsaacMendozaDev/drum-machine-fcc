import { PadModeButton } from "./index.js";
import IconDrum from "../assets/svgs/drum.svg";
import IconPiano from "../assets/svgs/piano.svg";

// eslint-disable-next-line react/prop-types
export default function PadMode({ padMode, changePadMode }) {
  return (
    <div className="btn-group" role="group" aria-label="Toggle sound group">
      <PadModeButton
        value={"drum"}
        iconSrc={IconDrum}
        padMode={padMode}
        changePadMode={changePadMode}
      />
      <PadModeButton
        value={"piano"}
        iconSrc={IconPiano}
        padMode={padMode}
        changePadMode={changePadMode}
      />
    </div>
  );
}
