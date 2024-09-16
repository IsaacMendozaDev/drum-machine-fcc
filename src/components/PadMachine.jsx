import { PadBox } from "./index.js";

// eslint-disable-next-line react/prop-types
export default function PadMachine({ padMode }) {
  return (
    <div className="row row-cols-auto justify-content-center gap-4">
      <article className="pad-bank row row-cols-4 justify-content-center gap-2 ">
        <PadBox padMode={padMode} />
      </article>

      <article className="control-container  vstack gap-3">
        <div
          id="display"
          className="containe border border-info rounded bg-secondary text-center fw-bold p-2"
        ></div>

        <div className="volume-wrapper d-flex flex-column align-items-center fw-bold ">
          <label htmlFor="volume" className="form-label text-center fs-5 m-0">
            Volume
          </label>
          <input type="range" className="form-range" id="volume" />
          <span className="">100%</span>
        </div>

        <button className="btn btn-primary fw-bold">ON</button>
      </article>
    </div>
  );
}
