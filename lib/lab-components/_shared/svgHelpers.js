/**
 * Shared SVG helper primitives for lab components.
 * Provides reusable gradient definitions, pin rendering, IC features, and text labels.
 */

/* ── Common Gradient Defs ───────────────────────────────── */

export const MetallicSilverGradient = ({ id = "metal-silver" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#e8e8e8" />
    <stop offset="40%" stopColor="#c0c0c0" />
    <stop offset="100%" stopColor="#888" />
  </linearGradient>
);

export const MetallicGoldGradient = ({ id = "metal-gold" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#ffd700" />
    <stop offset="50%" stopColor="#daa520" />
    <stop offset="100%" stopColor="#b8860b" />
  </linearGradient>
);

export const PCBGreenGradient = ({ id = "pcb-green" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#2e7d32" />
    <stop offset="50%" stopColor="#1b5e20" />
    <stop offset="100%" stopColor="#0d3b0f" />
  </linearGradient>
);

export const EpoxyBlackGradient = ({ id = "epoxy-black" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#333" />
    <stop offset="50%" stopColor="#1a1a1a" />
    <stop offset="100%" stopColor="#0a0a0a" />
  </linearGradient>
);

export const CeramicBeigeGradient = ({ id = "ceramic-beige" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#f5deb3" />
    <stop offset="50%" stopColor="#d4a373" />
    <stop offset="100%" stopColor="#a67c52" />
  </linearGradient>
);

export const PlasticBlueGradient = ({ id = "plastic-blue" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#1e88e5" />
    <stop offset="50%" stopColor="#1565c0" />
    <stop offset="100%" stopColor="#0d47a1" />
  </linearGradient>
);

export const PlasticRedGradient = ({ id = "plastic-red" }) => (
  <linearGradient id={id} x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stopColor="#ef5350" />
    <stop offset="50%" stopColor="#c62828" />
    <stop offset="100%" stopColor="#8e0000" />
  </linearGradient>
);

/* ── SVG Filters ────────────────────────────────────────── */

export const DropShadowFilter = ({ id = "drop-shadow", dx = 0, dy = 2, blur = 3, opacity = 0.35 }) => (
  <filter id={id} x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx={dx} dy={dy} stdDeviation={blur} floodOpacity={opacity} />
  </filter>
);

export const InnerShadowFilter = ({ id = "inner-shadow" }) => (
  <filter id={id}>
    <feOffset dx="0" dy="1" />
    <feGaussianBlur stdDeviation="1" result="offset-blur" />
    <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
    <feFlood floodColor="black" floodOpacity="0.3" result="color" />
    <feComposite operator="in" in="color" in2="inverse" result="shadow" />
    <feComposite operator="over" in="shadow" in2="SourceGraphic" />
  </filter>
);

export const GlowFilter = ({ id = "glow", color = "#ff0000", blur = 4 }) => (
  <filter id={id} x="-50%" y="-50%" width="200%" height="200%">
    <feGaussianBlur stdDeviation={blur} result="blur" />
    <feFlood floodColor={color} floodOpacity="0.6" result="color" />
    <feComposite operator="in" in="color" in2="blur" result="glow" />
    <feMerge>
      <feMergeNode in="glow" />
      <feMergeNode in="glow" />
      <feMergeNode in="SourceGraphic" />
    </feMerge>
  </filter>
);

/* ── Pin / Lead Rendering ───────────────────────────────── */

/**
 * Render horizontal lead wires on left and right side of a component
 */
export const HorizontalLeads = ({ y, leftX = 0, leftEndX = 18, rightStartX = 62, rightX = 80, stroke = "#C0C0C0", strokeWidth = 2 }) => (
  <>
    <line x1={leftX} y1={y} x2={leftEndX} y2={y} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    <line x1={rightStartX} y1={y} x2={rightX} y2={y} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
  </>
);

/**
 * Render vertical leads going downward from the body (through-hole style)
 */
export const VerticalLeads = ({ positions, startY, endY, stroke = "#C0C0C0", strokeWidth = 1.5 }) => (
  <>
    {positions.map((x, i) => (
      <line key={i} x1={x} y1={startY} x2={x} y2={endY} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" />
    ))}
  </>
);

/**
 * Render IC-style DIP pins on both sides
 * @param {number} count — total pins (e.g. 8, 14, 16)
 * @param {object} bounds — { x, y, width, height } of IC body
 * @param {number} pinLength — how far pins extend from body
 */
export const DIPPins = ({ count, bounds, pinLength = 8, pinWidth = 2, stroke = "#C0C0C0" }) => {
  const half = count / 2;
  const spacing = bounds.height / (half + 1);
  const pins = [];

  for (let i = 0; i < half; i++) {
    const py = bounds.y + spacing * (i + 1);
    // Left pins
    pins.push(
      <line key={`l${i}`} x1={bounds.x - pinLength} y1={py} x2={bounds.x} y2={py}
        stroke={stroke} strokeWidth={pinWidth} strokeLinecap="round" />
    );
    // Right pins
    pins.push(
      <line key={`r${i}`} x1={bounds.x + bounds.width} y1={py} x2={bounds.x + bounds.width + pinLength} y2={py}
        stroke={stroke} strokeWidth={pinWidth} strokeLinecap="round" />
    );
  }
  return <>{pins}</>;
};

/* ── IC Features ────────────────────────────────────────── */

/**
 * The half-circle notch on the top of DIP ICs
 */
export const ICNotch = ({ cx, cy, r = 4, fill = "#222" }) => (
  <path d={`M ${cx - r} ${cy} A ${r} ${r} 0 0 1 ${cx + r} ${cy}`} fill={fill} />
);

/**
 * Pin-1 dot indicator on ICs
 */
export const Pin1Dot = ({ cx, cy, r = 2, fill = "#888" }) => (
  <circle cx={cx} cy={cy} r={r} fill={fill} />
);

/* ── Text / Labels ──────────────────────────────────────── */

/**
 * Silkscreen-style white label text
 */
export const Silkscreen = ({ x, y, children, fontSize = 5, fill = "#fff", anchor = "middle" }) => (
  <text x={x} y={y} fill={fill} fontSize={fontSize} fontFamily="monospace" textAnchor={anchor} dominantBaseline="central" style={{ userSelect: "none" }}>
    {children}
  </text>
);

/**
 * Part number text (smaller, for IC bodies)
 */
export const PartNumber = ({ x, y, children, fontSize = 4, fill = "#aaa" }) => (
  <text x={x} y={y} fill={fill} fontSize={fontSize} fontFamily="monospace" textAnchor="middle" dominantBaseline="central" style={{ userSelect: "none" }}>
    {children}
  </text>
);

/* ── Resistor Color Bands ───────────────────────────────── */

export const RESISTOR_COLORS = {
  0: "#000",      // Black
  1: "#8B4513",   // Brown
  2: "#e63946",   // Red
  3: "#FF8C00",   // Orange
  4: "#FFD700",   // Yellow
  5: "#2a9d8f",   // Green
  6: "#0077b6",   // Blue
  7: "#7B2D8B",   // Violet
  8: "#666",      // Grey
  9: "#fff",      // White
  gold: "#DAA520",
  silver: "#C0C0C0",
};

export const ColorBand = ({ x, y, width, height, color, rx = 1 }) => (
  <rect x={x} y={y} width={width} height={height} fill={color} rx={rx} opacity="0.92" />
);
