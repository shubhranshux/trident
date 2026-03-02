/**
 * Accurate inline SVG logos for all 24 placement companies.
 * Each logo is a React component returning an <svg> element.
 * Colors match official brand guidelines.
 */

export const logos = {

  TCS: ({ size = 48 }) => (
    <svg viewBox="0 0 120 48" width={size * 2.5} height={size} aria-label="TCS">
      <text x="0" y="40" fontFamily="Arial Black, sans-serif" fontWeight="900"
        fontSize="46" fill="#003366" letterSpacing="-1">TCS</text>
    </svg>
  ),

  Infosys: ({ size = 40 }) => (
    <svg viewBox="0 0 180 50" width={size * 3.6} height={size} aria-label="Infosys">
      {/* Colored bar accent */}
      <rect x="0" y="38" width="20" height="4" fill="#FA6804" rx="1" />
      <rect x="22" y="38" width="20" height="4" fill="#004B8D" rx="1" />
      <rect x="44" y="38" width="20" height="4" fill="#2DAA4F" rx="1" />
      <text x="0" y="33" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="28" fill="#1A1A2E" letterSpacing="0.5">infosys</text>
    </svg>
  ),

  Wipro: ({ size = 44 }) => (
    <svg viewBox="0 0 160 50" width={size * 3.2} height={size} aria-label="Wipro">
      {/* Wipro flower/circle mark */}
      <circle cx="22" cy="25" r="20" fill="none" stroke="#7B2D8B" strokeWidth="3" />
      {[0,60,120,180,240,300].map((a, i) => {
        const r = a * Math.PI / 180;
        const x = 22 + 12 * Math.cos(r), y = 25 + 12 * Math.sin(r);
        const colors = ["#F7941D","#A0C42A","#00AEEF","#7B2D8B","#ED1C24","#00A651"];
        return <circle key={i} cx={x} cy={y} r="5" fill={colors[i]} />;
      })}
      <circle cx="22" cy="25" r="4" fill="white" />
      <text x="48" y="34" fontFamily="Arial Black, sans-serif" fontWeight="900"
        fontSize="26" fill="#1A1A1A" letterSpacing="1">WIPRO</text>
    </svg>
  ),

  HCL: ({ size = 44 }) => (
    <svg viewBox="0 0 100 50" width={size * 2} height={size} aria-label="HCL">
      <rect x="0" y="0" width="96" height="48" rx="6" fill="#0077B5" />
      <text x="12" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900"
        fontSize="30" fill="white" letterSpacing="2">HCL</text>
    </svg>
  ),

  Capgemini: ({ size = 40 }) => (
    <svg viewBox="0 0 220 50" width={size * 4.4} height={size} aria-label="Capgemini">
      {/* Blue C-arc */}
      <path d="M22 8 A18 18 0 1 0 22 42" fill="none" stroke="#0070AD" strokeWidth="7" strokeLinecap="round" />
      <text x="50" y="36" fontFamily="Arial, sans-serif" fontWeight="bold"
        fontSize="28" fill="#1A1A1A">capgemini</text>
    </svg>
  ),

  Accenture: ({ size = 40 }) => (
    <svg viewBox="0 0 210 56" width={size * 3.75} height={size} aria-label="Accenture">
      <text x="0" y="40" fontFamily="Arial, sans-serif" fontWeight="bold"
        fontSize="28" fill="#A100FF">Accenture</text>
      {/* > arrow */}
      <polygon points="192,12 202,28 192,44" fill="#A100FF" />
    </svg>
  ),

  Cognizant: ({ size = 40 }) => (
    <svg viewBox="0 0 220 50" width={size * 4.4} height={size} aria-label="Cognizant">
      {/* Blue circle */}
      <circle cx="22" cy="25" r="18" fill="#0033A0" />
      <circle cx="22" cy="25" r="11" fill="#00B5E2" />
      <circle cx="22" cy="25" r="5" fill="white" />
      <text x="48" y="34" fontFamily="Arial, sans-serif" fontWeight="bold"
        fontSize="22" fill="#1A1A1A">Cognizant</text>
    </svg>
  ),

  "Tech Mahindra": ({ size = 40 }) => (
    <svg viewBox="0 0 240 56" width={size * 4.3} height={size} aria-label="Tech Mahindra">
      {/* M rising bars */}
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={4+i*8} y={36-(i<3?i*8:(4-i)*8)} width="5"
          height={8+(i<3?i*8:(4-i)*8)} fill="#C8102E" rx="1" />
      ))}
      <text x="50" y="36" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="20" fill="#1A1A1A">Tech Mahindra</text>
    </svg>
  ),

  "L&T Infotech": ({ size = 40 }) => (
    <svg viewBox="0 0 230 56" width={size * 4.1} height={size} aria-label="LTIMindtree">
      <rect x="0" y="8" width="44" height="34" rx="4" fill="#007A4D" />
      <text x="6" y="32" fontFamily="Arial Black" fontWeight="900"
        fontSize="18" fill="white">LTI</text>
      <text x="52" y="25" fontFamily="Arial, sans-serif" fontWeight="800"
        fontSize="14" fill="#007A4D">Mindtree</text>
      <text x="52" y="42" fontFamily="Arial, sans-serif" fontWeight="600"
        fontSize="11" fill="#555">a Larsen & Toubro Group Company</text>
    </svg>
  ),

  IBM: ({ size = 40 }) => (
    <svg viewBox="0 0 120 44" width={size * 3} height={size} aria-label="IBM">
      {/* IBM striped letters — simplified */}
      {"IBM".split("").map((letter, li) => (
        <g key={li} transform={`translate(${li * 38}, 0)`}>
          <text x="0" y="38" fontFamily="Arial Black, sans-serif" fontWeight="900"
            fontSize="42" fill="#1F70C1">{letter}</text>
          {/* Horizontal stripes to simulate IBM style */}
          {[12,20,28].map(y => (
            <rect key={y} x={li*0} y={y} width="34" height="3" fill="white" />
          ))}
        </g>
      ))}
    </svg>
  ),

  Hexaware: ({ size = 40 }) => (
    <svg viewBox="0 0 200 50" width={size * 4} height={size} aria-label="Hexaware">
      {/* Hex shape */}
      <polygon points="16,5 30,5 38,18 30,31 16,31 8,18" fill="#E31837" />
      <text x="46" y="34" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="24" fill="#1A1A1A">Hexaware</text>
    </svg>
  ),

  Mphasis: ({ size = 40 }) => (
    <svg viewBox="0 0 180 50" width={size * 3.6} height={size} aria-label="Mphasis">
      {/* M letter mark */}
      <path d="M4 38 L4 12 L16 28 L28 12 L28 38" fill="none" stroke="#E31837" strokeWidth="4" strokeLinejoin="round" />
      <text x="36" y="34" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="24" fill="#1A1A1A">phasis</text>
    </svg>
  ),

  Amazon: ({ size = 40 }) => (
    <svg viewBox="0 0 180 56" width={size * 3.2} height={size} aria-label="Amazon">
      <text x="0" y="34" fontFamily="Arial Black, sans-serif" fontWeight="900"
        fontSize="32" fill="#1A1A1A" letterSpacing="-0.5">amazon</text>
      {/* Arrow underline */}
      <path d="M4 44 Q88 58 164 44" fill="none" stroke="#FF9900" strokeWidth="4" strokeLinecap="round" />
      <polygon points="156,38 168,44 156,50" fill="#FF9900" />
    </svg>
  ),

  Microsoft: ({ size = 40 }) => (
    <svg viewBox="0 0 210 48" width={size * 4.4} height={size} aria-label="Microsoft">
      {/* 4-square Windows logo */}
      <rect x="0"  y="0"  width="20" height="20" fill="#F25022" rx="1" />
      <rect x="22" y="0"  width="20" height="20" fill="#7FBA00" rx="1" />
      <rect x="0"  y="22" width="20" height="20" fill="#00A4EF" rx="1" />
      <rect x="22" y="22" width="20" height="20" fill="#FFB900" rx="1" />
      <text x="50" y="34" fontFamily="Segoe UI, Arial, sans-serif" fontWeight="300"
        fontSize="26" fill="#1A1A1A" letterSpacing="0.3">Microsoft</text>
    </svg>
  ),

  Google: ({ size = 40 }) => (
    <svg viewBox="0 0 180 50" width={size * 3.6} height={size} aria-label="Google">
      <text x="0" y="38" fontFamily="Product Sans, Arial, sans-serif" fontWeight="700" fontSize="40">
        <tspan fill="#4285F4">G</tspan>
        <tspan fill="#EA4335">o</tspan>
        <tspan fill="#FBBC05">o</tspan>
        <tspan fill="#4285F4">g</tspan>
        <tspan fill="#34A853">l</tspan>
        <tspan fill="#EA4335">e</tspan>
      </text>
    </svg>
  ),

  "Goldman Sachs": ({ size = 40 }) => (
    <svg viewBox="0 0 220 50" width={size * 4.4} height={size} aria-label="Goldman Sachs">
      <rect x="0" y="0" width="218" height="48" rx="3" fill="#1B2C6B" />
      <text x="10" y="20" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="13" fill="white" letterSpacing="1">GOLDMAN</text>
      <line x1="10" y1="25" x2="208" y2="25" stroke="white" strokeWidth="0.7" opacity="0.4" />
      <text x="10" y="40" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="13" fill="white" letterSpacing="1">SACHS</text>
    </svg>
  ),

  "JP Morgan": ({ size = 40 }) => (
    <svg viewBox="0 0 200 50" width={size * 4} height={size} aria-label="JP Morgan">
      {/* Blue octagon */}
      <polygon points="14,4 30,4 38,14 38,34 30,44 14,44 6,34 6,14" fill="#003087" />
      <text x="13" y="29" fontFamily="Arial Black" fontWeight="900"
        fontSize="13" fill="white">JP</text>
      <text x="46" y="20" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="14" fill="#003087">JPMORGAN</text>
      <text x="46" y="38" fontFamily="Arial, sans-serif" fontWeight="400"
        fontSize="12" fill="#555" letterSpacing="0.8">CHASE & CO.</text>
    </svg>
  ),

  "Morgan Stanley": ({ size = 40 }) => (
    <svg viewBox="0 0 240 50" width={size * 4.8} height={size} aria-label="Morgan Stanley">
      <text x="0" y="22" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="15" fill="#1A1A1A" letterSpacing="1.5">MORGAN STANLEY</text>
      <line x1="0" y1="28" x2="238" y2="28" stroke="#1A5C9A" strokeWidth="2.5" />
      <text x="0" y="44" fontFamily="Arial, sans-serif" fontWeight="400"
        fontSize="11" fill="#555" letterSpacing="2">WEALTH  MANAGEMENT</text>
    </svg>
  ),

  Deloitte: ({ size = 40 }) => (
    <svg viewBox="0 0 180 50" width={size * 3.6} height={size} aria-label="Deloitte">
      <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="32" fill="#1A1A1A" letterSpacing="-0.5">Deloitte</text>
      {/* Green dot */}
      <circle cx="163" cy="12" r="7" fill="#86BC25" />
    </svg>
  ),

  Atlassian: ({ size = 40 }) => (
    <svg viewBox="0 0 210 50" width={size * 4.2} height={size} aria-label="Atlassian">
      {/* A-shape mark */}
      <path d="M14 38 C8 24 10 14 20 8 C20 8 26 22 16 38Z" fill="#2684FF" />
      <path d="M20 8 C30 14 32 24 26 38 L16 38 C26 22 20 8 20 8Z" fill="#0052CC" />
      <text x="36" y="34" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="22" fill="#1A1A1A">Atlassian</text>
    </svg>
  ),

  Persistent: ({ size = 40 }) => (
    <svg viewBox="0 0 230 50" width={size * 4.6} height={size} aria-label="Persistent">
      {/* P hexagon */}
      <polygon points="16,4 28,4 34,14 28,26 16,26 10,14" fill="#1B4FBF" />
      <text x="9" y="20" fontFamily="Arial Black" fontWeight="900"
        fontSize="13" fill="white">P</text>
      <text x="42" y="30" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="19" fill="#1B4FBF">PERSISTENT</text>
    </svg>
  ),

  Mindtree: ({ size = 40 }) => (
    <svg viewBox="0 0 200 50" width={size * 4} height={size} aria-label="Mindtree">
      {/* Tree circles */}
      <circle cx="20" cy="16" r="10" fill="#009900" opacity="0.85" />
      <circle cx="32" cy="22" r="8" fill="#009900" opacity="0.65" />
      <rect x="21" y="26" width="4" height="14" rx="2" fill="#7B4F2E" />
      <text x="44" y="32" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="20" fill="#1A1A1A">mindtree</text>
    </svg>
  ),

  Oracle: ({ size = 40 }) => (
    <svg viewBox="0 0 180 50" width={size * 3.6} height={size} aria-label="Oracle">
      {/* Red ellipse */}
      <ellipse cx="22" cy="25" rx="20" ry="14" fill="#F80000" />
      <ellipse cx="22" cy="25" rx="12" ry="8" fill="#FF6B35" opacity="0.5" />
      <text x="48" y="34" fontFamily="Arial, sans-serif" fontWeight="700"
        fontSize="26" fill="#F80000">ORACLE</text>
    </svg>
  ),

  SAP: ({ size = 40 }) => (
    <svg viewBox="0 0 110 50" width={size * 2.2} height={size} aria-label="SAP">
      <rect x="0" y="0" width="108" height="48" rx="5" fill="#00A3E0" />
      <text x="8" y="36" fontFamily="Arial Black, sans-serif" fontWeight="900"
        fontSize="36" fill="white" letterSpacing="1">SAP</text>
    </svg>
  ),
};
