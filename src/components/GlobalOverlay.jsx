import './GlobalOverlay.css';

export default function GlobalOverlay() {
  return (
    <div className="global-overlay" aria-hidden="true">
      <div className="global-overlay__gradient" />
      <div className="global-overlay__vignette" />
      <div className="global-overlay__scanlines" />
    </div>
  );
}