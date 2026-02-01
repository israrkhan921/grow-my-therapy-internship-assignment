import Link from 'next/link';


export default function CTA() {
  return (
    
    <section id="contact" className="relative py-24 sm:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="absolute inset-0">
        {/* Primary background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')"
          }}
        ></div>

        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/85 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-accent/20"></div>

        {/* Enhanced animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-16 left-12 w-32 h-32 bg-accent/15 rounded-full animate-float-slow blur-2xl"></div>
          <div className="absolute top-32 right-16 w-24 h-24 bg-white/10 rounded-full animate-float blur-2xl"></div>
          <div className="absolute bottom-32 left-1/4 w-28 h-28 bg-accent/12 rounded-full animate-float-reverse blur-2xl"></div>
          <div className="absolute bottom-24 right-1/3 w-20 h-20 bg-white/8 rounded-full animate-float blur-2xl"></div>
          <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-accent/10 rounded-full animate-float-slow blur-2xl"></div>
          <div className="absolute top-3/4 right-1/5 w-12 h-12 bg-white/6 rounded-full animate-float-reverse blur-2xl"></div>
        </div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px),
                             radial-gradient(circle at 75% 75%, white 1px, transparent 1px)`,
            backgroundSize: '60px 60px, 40px 40px'
          }}></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Enhanced badge */}
        <div className="inline-block mb-8 animate-fade-in-up">
          <div className="bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md border border-white/30 rounded-full px-8 py-4 shadow-2xl">
            <span className="bg-gradient-to-r from-white via-blue-50 to-white bg-clip-text text-transparent font-bold text-sm tracking-wider uppercase flex items-center space-x-2">
              <span className="text-accent animate-pulse-gentle">💫</span>
              <span>Begin Your Healing Journey</span>
              <span className="text-accent animate-pulse-gentle delay-300">💫</span>
            </span>
          </div>
        </div>

        {/* Enhanced main heading */}
        <div className="animate-fade-in-up animation-delay-200">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-[0.9]">
            <span className="block bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-2 drop-shadow-lg">
              Ready to Start Your
            </span>
            <span className="block bg-gradient-to-r from-accent via-emerald-300 to-teal-200 bg-clip-text text-transparent animate-pulse-gentle drop-shadow-lg">
              Healing Journey?
            </span>
          </h2>

          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <div className="w-12 h-0.5 bg-gradient-to-r from-transparent to-accent rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-accent to-emerald-300 rounded-full animate-pulse-gentle shadow-lg"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-accent to-emerald-300 rounded-full"></div>
            <div className="w-3 h-3 bg-gradient-to-r from-white/80 to-blue-100/80 rounded-full animate-pulse-gentle delay-200 shadow-lg"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-white/80 to-blue-100/80 rounded-full"></div>
            <div className="w-4 h-4 bg-gradient-to-r from-accent to-emerald-300 rounded-full animate-pulse-gentle delay-400 shadow-lg"></div>
            <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced subtitle */}
        <div className="animate-fade-in-up animation-delay-400">
          <p className="text-xl sm:text-2xl md:text-3xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg">
            Take the first step towards <span className="bg-gradient-to-r from-accent to-emerald-300 bg-clip-text text-transparent font-medium">anxiety relief</span> and <span className="bg-gradient-to-r from-teal-300 to-cyan-200 bg-clip-text text-transparent font-medium">trauma recovery</span>. Reach out to schedule a consultation and see if we&apos;re a good fit for your therapy needs in Santa Monica or online.
          </p>
        </div>

        {/* Enhanced CTA buttons */}
        <div className="animate-fade-in-up animation-delay-600 flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <Link href="/contact">
            <button className="group relative px-12 py-6 bg-gradient-to-r from-accent to-accent/80 text-white font-bold rounded-full text-xl hover-glow focus-ring transform transition-all duration-700 hover:scale-110 shadow-2xl overflow-hidden">
              <span className="relative z-10 flex items-center space-x-3">
                <span>Schedule a Consultation</span>
                <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent/50 to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-0 group-hover:scale-100"></div>
            </button>
          </Link>

          <button className="group px-12 py-6 border-2 border-white/80 text-white font-bold rounded-full text-xl hover:bg-black hover:text-primary transition-all duration-700 focus-ring backdrop-blur-sm bg-white/5 hover:scale-105 shadow-xl">
            <span className="flex items-center space-x-3">
              <span>Learn More About Services</span>
              <svg className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </span>
          </button>
        </div>

        {/* Enhanced feature highlights */}
        <div className="animate-fade-in-up animation-delay-800 grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-2xl hover-glow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📞</div>
            <div className="text-lg font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-1">Free Consultation</div>
            <div className="text-sm bg-gradient-to-r from-white/80 to-blue-100/80 bg-clip-text text-transparent">30-minute session</div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-emerald-300 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-2xl hover-glow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🔒</div>
            <div className="text-lg font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-1">Confidential</div>
            <div className="text-sm bg-gradient-to-r from-white/80 to-blue-100/80 bg-clip-text text-transparent">HIPAA compliant</div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-emerald-300 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-md rounded-2xl p-6 text-center border border-white/30 shadow-2xl hover-glow group">
            <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🌟</div>
            <div className="text-lg font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-1">Personalized Care</div>
            <div className="text-sm bg-gradient-to-r from-white/80 to-blue-100/80 bg-clip-text text-transparent">Tailored to you</div>
            <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-emerald-300 mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </div>

      {/* Enhanced decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-20 fill-white">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
        </svg>
      </div>

      {/* Additional floating decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-accent/30 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-40 right-1/4 w-1.5 h-1.5 bg-white/20 rounded-full animate-pulse-gentle delay-300"></div>
        <div className="absolute bottom-40 left-1/3 w-1 h-1 bg-accent/25 rounded-full animate-pulse-gentle delay-500"></div>
      </div>
    </section>
   
  );
}
