export default function HeroSection() {
    return (
      <section className="relative w-[100vw] bg-[#001317] text-white min-h-screen pt-28 px-8 flex flex-col items-center justify-center text-center overflow-hidden">
        
        {/* Animated Background SVG */}
        <div className="absolute inset-0 z-0">
          <svg
            className="w-full h-full"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="cloudGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#75ffff" stopOpacity="0.1" />
                <stop offset="100%" stopColor="#75ffff" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <path
              fill="url(#cloudGradient)"
              fillOpacity="1"
              d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            >
              <animate
                attributeName="d"
                dur="20s"
                repeatCount="indefinite"
                keyTimes="0;0.5;1"
                values="
                  M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z;
                  M0,-50 C400,200 1040,-40 1440,120 L1440,320 L0,320 Z;
                  M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
              />
            </path>
          </svg>
        </div>
  
        {/* Content */}
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-20">
            Welcome to the <span className="text-[#75ffff]">Torus Digital Developer Portal</span>
          </h1>
          <p className="text-lg md:text-xl mb-10 text-gray-300">
            Build powerful trading apps using our rich API ecosystem. Discover, test, and launch with ease.
          </p>
            
            {/*  
         <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://demo.production.fyrii.ai/portal/torus/homepage/documentation"
              className="px-6 py-3 rounded-lg text-black bg-[#75ffff] font-semibold hover:bg-[#14262a] hover:text-[#75ffff] border-2 border-[#75ffff] hover:border-[#14262a] transition"
            >
              Explore APIs
            </a>
             
            <a
              href="/get-api-key"
              className="px-6 py-3 rounded-lg text-black bg-[#75ffff] font-semibold hover:bg-[#14262a] hover:text-[#75ffff] border-2 border-[#75ffff] hover:border-[#14262a] transition"
            >
              Get API Key
            </a> 
          </div> */}
            
        </div>
      </section>
    );
  }
  
