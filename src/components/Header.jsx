export default function Header() {
  return (
    <header className="bg-info text-center fw-bold pt-2">
      <h1 className="display-3">Drum Machine</h1>
      <p className="d-flex flex-row align-items-center justify-content-center gap-2 pb-2">
        <span>
          By{" "}
          <a
            className="link-primary link-offset-2 link-underline-opacity-0 link-underline-opacity-100-hover"
            target="_blank"
            href="https://www.linkedin.com/in/isaacmendozadev/"
          >
            IsaacMendozaDev
          </a>
        </span>
        <a
          className="link-dark"
          href="https://github.com/IsaacMendozaDev/drum-machine-fcc"
        >
          <i className="bi bi-github fs-4"></i>
        </a>
      </p>
    </header>
  );
}
