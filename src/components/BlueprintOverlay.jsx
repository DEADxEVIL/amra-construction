import { motion, useReducedMotion } from 'framer-motion';
import './BlueprintOverlay.css';

const drawTransition = (delay = 0) => ({
  duration: 1.8,
  delay,
  ease: [0.16, 1, 0.3, 1],
});

/** Thin technical grid, used as a low-opacity backdrop for blueprint zones. */
export function BlueprintGrid({ className = '' }) {
  return (
    <svg
      className={`bp-grid ${className}`}
      viewBox="0 0 400 400"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`v${i}`} x1={i * 50} y1="0" x2={i * 50} y2="400" />
      ))}
      {Array.from({ length: 9 }).map((_, i) => (
        <line key={`h${i}`} x1="0" y1={i * 50} x2="400" y2={i * 50} />
      ))}
    </svg>
  );
}

/** A dimension line with end ticks and a measurement label, e.g. "12000 mm". */
export function DimensionLine({ x1, y1, x2, y2, label }) {
  return (
    <g className="bp-dimension">
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1} y1={y1 - 5} x2={x1} y2={y1 + 5} />
      <line x1={x2} y1={y2 - 5} x2={x2} y2={y2 + 5} />
      {label && (
        <text x={(x1 + x2) / 2} y={y1 - 8} textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  );
}

/** Circular coordinate marker used along grid axes, e.g. "A", "1". */
export function CoordinateMarker({ cx, cy, label }) {
  return (
    <g className="bp-marker">
      <circle cx={cx} cy={cy} r="9" />
      <text x={cx} y={cy + 3.5} textAnchor="middle">
        {label}
      </text>
    </g>
  );
}

/** Compass rose indicating north — a recurring detail on architectural sheets. */
export function NorthArrow({ x, y }) {
  return (
    <g className="bp-north" transform={`translate(${x}, ${y})`}>
      <circle cx="0" cy="0" r="14" />
      <path d="M0,-9 L4,6 L0,3 L-4,6 Z" />
      <text x="0" y="-18" textAnchor="middle">
        N
      </text>
    </g>
  );
}

/**
 * A simplified residential ground-floor plan, styled as a blueprint sheet.
 * Purely decorative/atmospheric — mirrors the reference composition without
 * asserting it depicts a real AMRA project.
 */
export function FloorPlanOutline({ animate = true }) {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = animate && !reduceMotion;

  const lineProps = (delay) =>
    shouldAnimate
      ? {
          initial: { pathLength: 0, opacity: 0 },
          whileInView: { pathLength: 1, opacity: 1 },
          viewport: { once: true },
          transition: drawTransition(delay),
        }
      : {};

  return (
    <svg
      className="bp-floorplan"
      viewBox="0 0 400 460"
      role="img"
      aria-label="Decorative architectural blueprint of a residential ground floor plan"
    >
      <BlueprintGrid className="bp-floorplan__grid" />

      {/* Axis markers */}
      <CoordinateMarker cx={40} cy={30} label="A" />
      <CoordinateMarker cx={130} cy={30} label="B" />
      <CoordinateMarker cx={220} cy={30} label="C" />
      <CoordinateMarker cx={310} cy={30} label="D" />
      <CoordinateMarker cx={370} cy={30} label="E" />

      <CoordinateMarker cx={16} cy={70} label="1" />
      <CoordinateMarker cx={16} cy={150} label="2" />
      <CoordinateMarker cx={16} cy={230} label="3" />
      <CoordinateMarker cx={16} cy={310} label="4" />
      <CoordinateMarker cx={16} cy={370} label="5" />

      <DimensionLine x1={40} y1={48} x2={370} y2={48} label="12000 mm" />

      {/* Outer walls */}
      <motion.path
        className="bp-line bp-line--strong"
        d="M40,70 L370,70 L370,370 L40,370 Z"
        {...lineProps(0.1)}
      />

      {/* Interior partitions */}
      <motion.path
        className="bp-line"
        d="M215,70 L215,230 M40,230 L370,230 M120,230 L120,370 M270,230 L270,370"
        {...lineProps(0.5)}
      />

      {/* Door swings */}
      <motion.path
        className="bp-line bp-line--thin"
        d="M120,230 A40,40 0 0 1 160,270 M270,230 A35,35 0 0 0 235,265"
        {...lineProps(1)}
      />

      <text className="bp-room-label" x="90" y="150">BEDROOM</text>
      <text className="bp-room-label" x="260" y="150">LIVING</text>
      <text className="bp-room-label" x="65" y="305">LIVING</text>
      <text className="bp-room-label" x="185" y="305">KITCHEN</text>
      <text className="bp-room-label" x="300" y="305">KITCHEN</text>

      <NorthArrow x={365} y={410} />

      <text className="bp-sheet-label" x="40" y="440">GROUND FLOOR PLAN</text>
      <text className="bp-sheet-label bp-sheet-label--dim" x="40" y="454">SCALE 1:100</text>
    </svg>
  );
}

/**
 * Full hero blueprint panel — floor plan plus sheet framing, positioned to
 * the left of the hero per the reference composition.
 */
export default function BlueprintOverlay({ className = '' }) {
  return (
    <div className={`blueprint-overlay ${className}`} aria-hidden="true">
      <FloorPlanOutline />
    </div>
  );
}
