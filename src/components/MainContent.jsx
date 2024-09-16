import { PadMachine, PadMode } from "./index.js";
import usePadMode from "../hooks/usePadMode.js";

export default function MainContent() {
  const { padMode, changePadMode } = usePadMode();

  return (
    <main className="d-flex flex-column gap-5 text-white p-2">
      <section className="container text-center">
        <PadMode padMode={padMode} changePadMode={changePadMode} />
      </section>
      <section id="drum-machine" className="container">
        <PadMachine padMode={padMode} />
      </section>
    </main>
  );
}
