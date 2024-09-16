import { useState } from "react";
import { padMusicModes } from "../data/constants";

export default function usePadMode() {
  const [padMode, setPadMode] = useState(padMusicModes.drum);

  const changePadMode = (mode) => {
    const newPadMode = padMusicModes[mode];
    if (!newPadMode) return;

    setPadMode(newPadMode);
  };

  return {
    padMode,
    changePadMode,
  };
}
