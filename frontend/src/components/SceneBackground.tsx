import './SceneBackground.css'

export function SceneBackground() {
  return (
    <div className="scene-bg" aria-hidden="true">
      <div className="scene-bg__mesh" />
      <div className="scene-bg__orbs">
        <span className="scene-bg__orb scene-bg__orb--a" />
        <span className="scene-bg__orb scene-bg__orb--b" />
        <span className="scene-bg__orb scene-bg__orb--c" />
      </div>
      <div className="scene-bg__grid" />
      <div className="scene-bg__rings">
        <svg className="scene-bg__ring scene-bg__ring--1" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="kv-ring-outer" x1="40" y1="40" x2="360" y2="360">
              <stop stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="1" stopColor="#2563eb" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="160" stroke="url(#kv-ring-outer)" strokeWidth="0.8" opacity="0.35" />
        </svg>
        <svg className="scene-bg__ring scene-bg__ring--2" viewBox="0 0 400 400" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="kv-ring-inner" x1="0" y1="0" x2="400" y2="400">
              <stop stopColor="#60a5fa" stopOpacity="0.5" />
              <stop offset="1" stopColor="#0b4f9b" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="120"
            stroke="url(#kv-ring-inner)"
            strokeWidth="0.6"
            opacity="0.25"
            strokeDasharray="8 14"
          />
        </svg>
      </div>
      <div className="scene-bg__lines">
        <span className="scene-bg__line scene-bg__line--1" />
        <span className="scene-bg__line scene-bg__line--2" />
        <span className="scene-bg__line scene-bg__line--3" />
      </div>
      <div className="scene-bg__vignette" />
    </div>
  )
}
