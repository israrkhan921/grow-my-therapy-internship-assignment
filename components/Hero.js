import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Therapeutic background perfectly matched to Dr. Maya Reynolds' practice */}
      <div className="absolute inset-0">
        {/* Professional therapy office background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: "url('/images/office/office1.jpeg')"
          }}
        ></div>

        {/* Calming gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-blue-50/90 to-emerald-50/85"></div>

        {/* Therapeutic pattern - growth and healing symbols */}
        <div className="absolute inset-0 opacity-[0.05]">
          <svg viewBox="0 0 500 500" className="w-full h-full">
            <defs>
              <pattern id="therapeutic-growth" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                {/* Healing spiral */}
                <path d="M50,50 Q60,40 70,50 Q80,60 70,70 Q60,80 50,70 Q40,60 50,50 Z" fill="#10b981"/>
                {/* Growth arrows */}
                <path d="M20,20 L30,10 M25,15 L35,5 M30,20 L40,10" stroke="#06b6d4" strokeWidth="1" fill="none"/>
                {/* Support circles */}
                <circle cx="80" cy="80" r="8" fill="none" stroke="#6366f1" strokeWidth="1"/>
                <circle cx="80" cy="80" r="4" fill="#6366f1" opacity="0.3"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#therapeutic-growth)"/>
          </svg>
        </div>

        {/* Compassionate floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Healing hands symbol */}
          <div className="absolute top-20 left-16 w-16 h-16 opacity-10">
            <svg viewBox="0 0 24 24" className="w-full h-full text-emerald-600">
              <path fill="currentColor" d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V8H13V6H11M11,10V18H13V10H11Z"/>
            </svg>
          </div>

          {/* Heart symbol for compassion */}
          <div className="absolute top-32 right-20 w-12 h-12 opacity-8">
            <svg viewBox="0 0 24 24" className="w-full h-full text-rose-400">
              <path fill="currentColor" d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"/>
            </svg>
          </div>

          {/* Growth symbol */}
          <div className="absolute bottom-40 left-24 w-14 h-14 opacity-6">
            <svg viewBox="0 0 24 24" className="w-full h-full text-blue-500">
              <path fill="currentColor" d="M13,9V3.5L18.5,9M6,2C4.89,2 4,2.89 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2H6Z"/>
            </svg>
          </div>

          {/* Support network symbol */}
          <div className="absolute bottom-24 right-16 w-18 h-18 opacity-7">
            <svg viewBox="0 0 24 24" className="w-full h-full text-teal-500">
              <path fill="currentColor" d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2M21,9V7L15,1H5C3.89,1 3,1.89 3,3V21A2,2 0 0,0 5,23H19A2,2 0 0,0 21,21V9M19,9H14V4H5V21H19V9Z"/>
            </svg>
          </div>

          {/* Soft organic shapes */}
          <div className="absolute top-16 left-1/3 w-20 h-16 bg-gradient-to-br from-emerald-100/20 to-teal-100/20 rounded-full blur-sm transform rotate-15"></div>
          <div className="absolute bottom-32 right-1/4 w-24 h-20 bg-gradient-to-br from-blue-100/20 to-cyan-100/20 rounded-full blur-sm transform -rotate-10"></div>
        </div>

        {/* Gentle wave transitions */}
        <div className="absolute bottom-0 left-0 right-0 h-40 opacity-6">
          <svg viewBox="0 0 1200 120" className="w-full h-full">
            <path d="M0,80 C200,60 400,100 600,80 C800,60 1000,90 1200,80 L1200,120 L0,120 Z" fill="#10b981" opacity="0.08"/>
            <path d="M0,90 C250,70 500,110 750,90 C1000,70 1200,85 1200,90 L1200,120 L0,120 Z" fill="#06b6d4" opacity="0.06"/>
          </svg>
        </div>

        {/* Healing energy dots */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-1/4 left-1/6 w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-teal-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/4 right-1/6 w-2.5 h-2.5 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
        </div>
      </div>
      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Trust badge */}
        <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-6 py-3 mb-8 shadow-lg">
          <span className="text-primary font-semibold text-sm tracking-wide">
            Licensed Clinical Psychologist • Santa Monica, CA
          </span>
        </div>

        {/* Main heading */}
        <div className="mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-slate-800 mb-2">
              Healing Through
            </span>
            <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              Evidence-Based Therapy
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="mb-12">
          <p className="text-lg sm:text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-light">
            Specialized therapy for <span className="font-semibold text-primary">anxiety</span>,
            <span className="font-semibold text-accent"> trauma</span>, and
            <span className="font-semibold text-primary"> professional burnout</span>.
            CBT, EMDR, and mindfulness-based approaches in Santa Monica.
          </p>
        </div>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/contact">
            <button className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-semibold rounded-full text-lg shadow-lg hover:bg-black hover:text-white transition-shadow duration-300">
              <span className="flex items-center space-x-2">
                <span>Start Your Journey</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
          </Link>

          <button
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 border-2 border-primary/30 text-primary font-semibold rounded-full text-lg hover:bg-black hover:text-white transition-colors duration-300"
          >
            <span className="flex items-center space-x-2">
              <span>Learn More</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
