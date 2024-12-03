import { useEffect } from 'react';

function Hero() {
  return (
    <div className="relative min-h-[85vh] bg-gradient-to-br from-indigo-600 via-violet-600 to-purple-700 overflow-hidden">
      {/* Animated background patterns */}
      <div className="absolute inset-0">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
               style={{
                 backgroundImage: 'linear-gradient(#fff 2px, transparent 2px), linear-gradient(90deg, #fff 2px, transparent 2px)',
                 backgroundSize: '50px 50px'
               }}>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            >
              <div className={`
                w-${Math.floor(Math.random() * 16 + 4)}
                h-${Math.floor(Math.random() * 16 + 4)}
                bg-white/10 rounded-full blur-sm
              `}></div>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div className="relative container mx-auto px-6 pt-32 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left column - Text content */}
            <div className="text-left space-y-8">
              <div className="inline-block animate-slide-up">
                <span className="px-4 py-2 rounded-full bg-white/10 text-white text-sm font-medium">
                  🚀 Next Generation B2B Solution
                </span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-white space-y-3">
                <span className="block animate-slide-up opacity-0" style={{ animationDelay: '0.2s' }}>Transform</span>
                <span className="block animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>Your Business</span>
              </h1>
              
              <p className="text-xl text-gray-200 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
                Streamline operations, boost productivity, and scale your business with our powerful B2B solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.8s' }}>
                <button className="btn bg-white text-indigo-600 hover:bg-gray-100 border-0 hover:scale-105 transition-all duration-300">
                  Get Started
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <button className="btn btn-outline border-2 border-white text-white hover:bg-white/10 hover:border-white group">
                  Watch Demo
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Right column - Animated illustration */}
            <div className="relative animate-slide-up opacity-0" style={{ animationDelay: '1s' }}>
              <div className="relative z-10">
                {/* Add your illustration or image here */}
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="w-full h-full rounded-xl border-2 border-white/20 flex items-center justify-center">
                    {/* Example content - Replace with your actual illustration */}
                    <div className="text-center space-y-4">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white/20 animate-pulse"></div>
                      <div className="h-2 w-32 mx-auto rounded-full bg-white/20"></div>
                      <div className="h-2 w-24 mx-auto rounded-full bg-white/20"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-8 -left-8 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>

          {/* Stats section */}
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-slide-up opacity-0" style={{ animationDelay: '1.2s' }}>
            {[
              { label: 'Downloads', value: '25.6K', trend: '↗︎ 21%' },
              { label: 'Active Users', value: '4,200', trend: '↗︎ 42%' },
              { label: 'New Registers', value: '1,200', trend: '↗︎ 14%' }
            ].map((stat, index) => (
              <div key={index} className="stat bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
                <div className="stat-title text-gray-100 text-sm font-medium">{stat.label}</div>
                <div className="stat-value text-white text-4xl font-bold">{stat.value}</div>
                <div className="stat-desc text-emerald-300">{stat.trend}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero; 