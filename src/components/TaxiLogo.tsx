import React from 'react';

interface TaxiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TaxiLogo: React.FC<TaxiLogoProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 border-2 border-amber-200/60 shadow-lg shadow-orange-500/35 overflow-hidden group select-none shrink-0 transition-transform duration-300 hover:scale-105 ${sizeMap[size]} ${className}`}
      title="Taxi Kaaran - Coimbatore Taxi Service"
    >
      {/* Top Gloss Highlight Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/25 pointer-events-none z-10"></div>

      {/* SVG: Front Face Dark Blue Car with Driver */}
      <svg
        viewBox="0 0 100 86"
        className="w-full h-full p-1"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Dark Blue Car Gradients */}
          <linearGradient id="frontBodyBlue" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1E3A8A" />
            <stop offset="35%" stopColor="#2563EB" />
            <stop offset="65%" stopColor="#1E40AF" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <linearGradient id="frontRoofBlue" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#172554" />
          </linearGradient>

          <linearGradient id="frontGlass" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#93C5FD" stopOpacity="0.95" />
            <stop offset="40%" stopColor="#38BDF8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0B132B" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="headlightBeamL" x1="50%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          <linearGradient id="headlightBeamR" x1="50%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FEF08A" />
            <stop offset="100%" stopColor="#F59E0B" />
          </linearGradient>

          {/* Driver Clothes Gradients */}
          <linearGradient id="driverShirt" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#E2E8F0" />
          </linearGradient>

          <linearGradient id="driverPants" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1E293B" />
            <stop offset="100%" stopColor="#0F172A" />
          </linearGradient>

          <filter id="lightGlowFront" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <g transform="translate(0, 0)">
          {/* Road line / asphalt ground */}
          <path d="M4 84 L96 84" stroke="#0F172A" strokeWidth="3.5" strokeLinecap="round" opacity="0.65" />
          <path d="M12 84 L88 84" stroke="#FEF08A" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />

          {/* Contact shadow for car and driver */}
          <ellipse cx="62" cy="83" rx="30" ry="3.5" fill="#020617" opacity="0.75" />
          <ellipse cx="22" cy="83" rx="10" ry="3" fill="#020617" opacity="0.7" />

          {/* ======================================================== */}
          {/* 1. FRONT-FACING DARK BLUE CAR */}
          {/* ======================================================== */}
          <g id="frontFacingCar">
            {/* TAXI Rooftop Illuminated Sign */}
            <g>
              <path
                d="M54 20 L70 20 C72 20, 73 21, 72 22.5 L70 27 C69.5 28, 68.5 28.5, 67 28.5 L57 28.5 C55.5 28.5, 54.5 28, 54 27 L52 22.5 C51 21, 52 20, 54 20 Z"
                fill="#FEF08A"
                stroke="#0F172A"
                strokeWidth="1.2"
              />
              <text
                x="62"
                y="26"
                fontSize="5"
                fontWeight="900"
                fill="#0F172A"
                textAnchor="middle"
                fontFamily="system-ui, sans-serif"
              >
                TAXI
              </text>
            </g>

            {/* Front Wheels */}
            <rect x="36" y="68" width="8" height="15" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />
            <rect x="80" y="68" width="8" height="15" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />

            {/* Roof & Cabin */}
            <path
              d="M45 44 L49 28 C50 26, 52 25, 54 25 L70 25 C72 25, 74 26, 75 28 L79 44 Z"
              fill="url(#frontRoofBlue)"
              stroke="#0F172A"
              strokeWidth="1.2"
            />

            {/* Front Windshield Glass */}
            <path
              d="M47 43 L50 29 C51 28, 52 27.5, 54 27.5 L70 27.5 C72 27.5, 73 28, 74 29 L77 43 Z"
              fill="url(#frontGlass)"
              stroke="#0F172A"
              strokeWidth="1"
            />

            {/* Windshield Reflection Flares */}
            <line x1="53" y1="30" x2="60" y2="42" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
            <line x1="68" y1="30" x2="72" y2="42" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

            {/* Rearview Side Mirrors */}
            <path d="M43 41 C40 41, 39 43, 41 45 L44 45 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="0.8" />
            <path d="M81 41 C84 41, 85 43, 83 45 L80 45 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="0.8" />

            {/* Front Bonnet / Main Body in Dark Blue */}
            <path
              d="M37 60 
                 C37 51, 40 45, 44 44
                 L80 44
                 C84 45, 87 51, 87 60
                 L88 72
                 C88 75, 86 76, 83 76
                 L41 76
                 C38 76, 36 75, 36 72
                 Z"
              fill="url(#frontBodyBlue)"
              stroke="#0F172A"
              strokeWidth="1.4"
            />

            {/* Hood Crease Accent Lines */}
            <path d="M52 44 L53 56" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M72 44 L71 56" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />

            {/* Left Headlight */}
            <g>
              <path
                d="M39 50 C39 47, 41 46, 45 47 L47 54 C42 55, 39 53, 39 50 Z"
                fill="url(#headlightBeamL)"
                stroke="#0F172A"
                strokeWidth="0.8"
                filter="url(#lightGlowFront)"
              />
              <polygon points="38,51 26,60 30,66 44,54" fill="#FEF08A" opacity="0.45" filter="url(#lightGlowFront)" />
            </g>

            {/* Right Headlight */}
            <g>
              <path
                d="M85 50 C85 47, 83 46, 79 47 L77 54 C82 55, 85 53, 85 50 Z"
                fill="url(#headlightBeamR)"
                stroke="#0F172A"
                strokeWidth="0.8"
                filter="url(#lightGlowFront)"
              />
              <polygon points="86,51 98,60 94,66 80,54" fill="#FEF08A" opacity="0.45" filter="url(#lightGlowFront)" />
            </g>

            {/* Front Chrome Radiator Grille */}
            <rect x="49" y="50" width="26" height="12" rx="3" fill="#0B132B" stroke="#CBD5E1" strokeWidth="1.2" />
            <line x1="51" y1="53" x2="73" y2="53" stroke="#94A3B8" strokeWidth="0.8" />
            <line x1="51" y1="56" x2="73" y2="56" stroke="#94A3B8" strokeWidth="0.8" />
            <line x1="51" y1="59" x2="73" y2="59" stroke="#94A3B8" strokeWidth="0.8" />

            {/* Logo badge on grille */}
            <circle cx="62" cy="56" r="2" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="0.6" />

            {/* Front Bumper & Number Plate */}
            <rect x="42" y="64" width="40" height="9" rx="2" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
            
            {/* License Plate: TN 37 */}
            <rect x="53" y="66" width="18" height="5" rx="1" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
            <text x="62" y="70" fontSize="3.6" fontWeight="900" fill="#0F172A" textAnchor="middle" fontFamily="monospace">
              TN 37
            </text>

            {/* Fog lamps in bumper */}
            <circle cx="45" cy="68.5" r="2" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
            <circle cx="79" cy="68.5" r="2" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
          </g>

          {/* ======================================================== */}
          {/* 2. DRIVER STANDING NEAR THE CAR */}
          {/* ======================================================== */}
          <g id="driverStanding">
            {/* Driver Cap / Uniform Hat */}
            <path d="M16 26 C16 23, 26 23, 26 26 L28 27 L14 27 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="0.6" />
            <path d="M14 27 L28 27 L26 29 L15 29 Z" fill="#D97706" />

            {/* Driver Head / Face */}
            <circle cx="21" cy="31" r="4.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="0.6" />
            
            {/* Driver Smile */}
            <path d="M19.5 32 Q 21 33.5 22.5 32" stroke="#78350F" strokeWidth="0.6" fill="none" strokeLinecap="round" />

            {/* White Uniform Shirt */}
            <path
              d="M14 36 L18 34 L21 36 L24 34 L28 36 L27 55 L15 55 Z"
              fill="url(#driverShirt)"
              stroke="#0F172A"
              strokeWidth="0.8"
            />

            {/* Driver Tie / Badge */}
            <polygon points="20,36 22,36 22.5,45 21,47 19.5,45" fill="#D97706" />

            {/* Driver Arms */}
            <path
              d="M15 37 L12 45 C11.5 47, 12 50, 13 52 L15 52 L16 44 L17 38 Z"
              fill="url(#driverShirt)"
              stroke="#0F172A"
              strokeWidth="0.7"
            />
            <circle cx="13.5" cy="53" r="1.5" fill="#FBBF24" />

            <path
              d="M27 37 L31 44 C32 46, 31.5 49, 30 50 L27 48 L25 41 Z"
              fill="url(#driverShirt)"
              stroke="#0F172A"
              strokeWidth="0.7"
            />
            <circle cx="30" cy="51" r="1.5" fill="#FBBF24" />

            {/* Belt */}
            <rect x="15" y="54" width="12" height="2" fill="#020617" />
            <rect x="20" y="54" width="2" height="2" fill="#F59E0B" />

            {/* Trousers */}
            <path
              d="M15 56 L19.5 56 L20 76 L16 76 Z"
              fill="url(#driverPants)"
              stroke="#0F172A"
              strokeWidth="0.8"
            />
            <path
              d="M22.5 56 L27 56 L26 76 L22 76 Z"
              fill="url(#driverPants)"
              stroke="#0F172A"
              strokeWidth="0.8"
            />

            {/* Shoes */}
            <ellipse cx="17.5" cy="78" rx="3.5" ry="2" fill="#020617" />
            <ellipse cx="24.5" cy="78" rx="3.5" ry="2" fill="#020617" />
          </g>
        </g>
      </svg>
    </div>
  );
};

