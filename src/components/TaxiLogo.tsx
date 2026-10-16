import React from 'react';

interface TaxiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const TaxiLogo: React.FC<TaxiLogoProps> = ({ className = '', size = 'md' }) => {
  const sizeMap = {
    sm: 'w-10 h-10',
    md: 'w-13 h-13',
    lg: 'w-16 h-16'
  };

  return (
    <div
      className={`relative flex items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-amber-600 border-2 border-amber-200/60 shadow-lg shadow-orange-500/35 overflow-hidden group select-none shrink-0 ${sizeMap[size]} ${className}`}
      title="Taxi Kaaran - Coimbatore Taxi Service"
    >
      {/* Top Gloss Highlight */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-black/15 pointer-events-none"></div>

      {/* SVG: Front Face Dark Blue Car with Driver Standing Beside It */}
      <svg
        viewBox="0 0 100 100"
        className="w-full h-full p-1 transition-transform duration-300 group-hover:scale-105"
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

        {/* Road line / asphalt ground */}
        <path d="M4 86 L96 86" stroke="#0F172A" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
        <path d="M12 86 L88 86" stroke="#FEF08A" strokeWidth="1.2" strokeDasharray="5 3" opacity="0.85" />

        {/* Contact shadow for car and driver */}
        <ellipse cx="62" cy="85" rx="30" ry="4" fill="#020617" opacity="0.75" />
        <ellipse cx="22" cy="85" rx="10" ry="3.5" fill="#020617" opacity="0.7" />

        {/* ======================================================== */}
        {/* 1. FRONT-FACING DARK BLUE CAR (Positioned towards center-right) */}
        {/* ======================================================== */}
        <g id="frontFacingCar">
          
          {/* TAXI Rooftop Illuminated Sign */}
          <g>
            <path
              d="M54 22 L70 22 C72 22, 73 23, 72 24.5 L70 29 C69.5 30, 68.5 30.5, 67 30.5 L57 30.5 C55.5 30.5, 54.5 30, 54 29 L52 24.5 C51 23, 52 22, 54 22 Z"
              fill="#FEF08A"
              stroke="#0F172A"
              strokeWidth="1.2"
            />
            <text
              x="62"
              y="28"
              fontSize="5"
              fontWeight="900"
              fill="#0F172A"
              textAnchor="middle"
              fontFamily="system-ui, sans-serif"
            >
              TAXI
            </text>
          </g>

          {/* Front Wheels (tires visible under chassis) */}
          <rect x="36" y="70" width="8" height="15" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />
          <rect x="80" y="70" width="8" height="15" rx="3" fill="#020617" stroke="#334155" strokeWidth="1" />

          {/* Roof & Cabin */}
          <path
            d="M45 46 L49 30 C50 28, 52 27, 54 27 L70 27 C72 27, 74 28, 75 30 L79 46 Z"
            fill="url(#frontRoofBlue)"
            stroke="#0F172A"
            strokeWidth="1.2"
          />

          {/* Front Windshield Glass */}
          <path
            d="M47 45 L50 31 C51 30, 52 29.5, 54 29.5 L70 29.5 C72 29.5, 73 30, 74 31 L77 45 Z"
            fill="url(#frontGlass)"
            stroke="#0F172A"
            strokeWidth="1"
          />

          {/* Windshield Reflection Flares */}
          <line x1="53" y1="32" x2="60" y2="44" stroke="#FFFFFF" strokeWidth="1.4" strokeLinecap="round" opacity="0.6" />
          <line x1="68" y1="32" x2="72" y2="44" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" opacity="0.6" />

          {/* Rearview Side Mirrors */}
          <path d="M43 43 C40 43, 39 45, 41 47 L44 47 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="0.8" />
          <path d="M81 43 C84 43, 85 45, 83 47 L80 47 Z" fill="#1E3A8A" stroke="#0F172A" strokeWidth="0.8" />

          {/* Front Bonnet / Main Body in Dark Blue */}
          <path
            d="M37 62 
               C37 53, 40 47, 44 46
               L80 46
               C84 47, 87 53, 87 62
               L88 74
               C88 77, 86 78, 83 78
               L41 78
               C38 78, 36 77, 36 74
               Z"
            fill="url(#frontBodyBlue)"
            stroke="#0F172A"
            strokeWidth="1.4"
          />

          {/* Hood Crease Accent Lines */}
          <path d="M52 46 L53 58" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M72 46 L71 58" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" />

          {/* Left Headlight */}
          <g>
            <path
              d="M39 52 C39 49, 41 48, 45 49 L47 56 C42 57, 39 55, 39 52 Z"
              fill="url(#headlightBeamL)"
              stroke="#0F172A"
              strokeWidth="0.8"
              filter="url(#lightGlowFront)"
            />
            {/* Glowing headlight beam projection */}
            <polygon points="38,53 26,62 30,68 44,56" fill="#FEF08A" opacity="0.45" filter="url(#lightGlowFront)" />
          </g>

          {/* Right Headlight */}
          <g>
            <path
              d="M85 52 C85 49, 83 48, 79 49 L77 56 C82 57, 85 55, 85 52 Z"
              fill="url(#headlightBeamR)"
              stroke="#0F172A"
              strokeWidth="0.8"
              filter="url(#lightGlowFront)"
            />
            {/* Glowing headlight beam projection */}
            <polygon points="86,53 98,62 94,68 80,56" fill="#FEF08A" opacity="0.45" filter="url(#lightGlowFront)" />
          </g>

          {/* Front Chrome Radiator Grille */}
          <rect x="49" y="52" width="26" height="12" rx="3" fill="#0B132B" stroke="#CBD5E1" strokeWidth="1.2" />
          <line x1="51" y1="55" x2="73" y2="55" stroke="#94A3B8" strokeWidth="0.8" />
          <line x1="51" y1="58" x2="73" y2="58" stroke="#94A3B8" strokeWidth="0.8" />
          <line x1="51" y1="61" x2="73" y2="61" stroke="#94A3B8" strokeWidth="0.8" />

          {/* Logo badge on grille */}
          <circle cx="62" cy="58" r="2" fill="#F59E0B" stroke="#FFFFFF" strokeWidth="0.6" />

          {/* Front Bumper & Number Plate */}
          <rect x="42" y="66" width="40" height="9" rx="2" fill="#0F172A" stroke="#1E293B" strokeWidth="1" />
          
          {/* License Plate: TN 37 (Coimbatore!) */}
          <rect x="53" y="68" width="18" height="5" rx="1" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
          <text x="62" y="72" fontSize="3.6" fontWeight="900" fill="#0F172A" textAnchor="middle" fontFamily="monospace">
            TN 37
          </text>

          {/* Fog lamps in bumper */}
          <circle cx="45" cy="70.5" r="2" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
          <circle cx="79" cy="70.5" r="2" fill="#FEF08A" stroke="#0F172A" strokeWidth="0.6" />
        </g>

        {/* ======================================================== */}
        {/* 2. DRIVER STANDING NEAR THE CAR (Standing proudly on left) */}
        {/* ======================================================== */}
        <g id="driverStanding">
          
          {/* Driver Cap / Uniform Hat */}
          <path d="M16 28 C16 25, 26 25, 26 28 L28 29 L14 29 Z" fill="#0F172A" stroke="#1E293B" strokeWidth="0.6" />
          <path d="M14 29 L28 29 L26 31 L15 31 Z" fill="#D97706" />

          {/* Driver Head / Face */}
          <circle cx="21" cy="33" r="4.5" fill="#FBBF24" stroke="#0F172A" strokeWidth="0.6" />
          
          {/* Driver Smile / Friendly Face */}
          <path d="M19.5 34 Q 21 35.5 22.5 34" stroke="#78350F" strokeWidth="0.6" fill="none" strokeLinecap="round" />

          {/* White Uniform Shirt with Collar */}
          <path
            d="M14 38 L18 36 L21 38 L24 36 L28 38 L27 57 L15 57 Z"
            fill="url(#driverShirt)"
            stroke="#0F172A"
            strokeWidth="0.8"
          />

          {/* Driver Tie / Badge in Amber */}
          <polygon points="20,38 22,38 22.5,47 21,49 19.5,47" fill="#D97706" />

          {/* Driver Left Arm (Standing proudly, hand resting by hip) */}
          <path
            d="M15 39 L12 47 C11.5 49, 12 52, 13 54 L15 54 L16 46 L17 40 Z"
            fill="url(#driverShirt)"
            stroke="#0F172A"
            strokeWidth="0.7"
          />
          <circle cx="13.5" cy="55" r="1.5" fill="#FBBF24" />

          {/* Driver Right Arm (Welcoming gesture / folded politely) */}
          <path
            d="M27 39 L31 46 C32 48, 31.5 51, 30 52 L27 50 L25 43 Z"
            fill="url(#driverShirt)"
            stroke="#0F172A"
            strokeWidth="0.7"
          />
          <circle cx="30" cy="53" r="1.5" fill="#FBBF24" />

          {/* Dark Formal Belt */}
          <rect x="15" y="56" width="12" height="2" fill="#020617" />
          <rect x="20" y="56" width="2" height="2" fill="#F59E0B" />

          {/* Dark Formal Trousers / Pants */}
          <path
            d="M15 58 L19.5 58 L20 78 L16 78 Z"
            fill="url(#driverPants)"
            stroke="#0F172A"
            strokeWidth="0.8"
          />
          <path
            d="M22.5 58 L27 58 L26 78 L22 78 Z"
            fill="url(#driverPants)"
            stroke="#0F172A"
            strokeWidth="0.8"
          />

          {/* Polished Black Driver Shoes */}
          <ellipse cx="17.5" cy="80" rx="3.5" ry="2" fill="#020617" />
          <ellipse cx="24.5" cy="80" rx="3.5" ry="2" fill="#020617" />
        </g>

      </svg>
    </div>
  );
};
