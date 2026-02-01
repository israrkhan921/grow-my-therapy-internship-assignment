import Image from 'next/image';

export default function About() {
  return (
    <>
      
    <section id="about" className="py-20 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 left-12 w-24 h-24 bg-gradient-to-br from-primary/8 to-accent/6 rounded-full animate-float-slow blur-sm"></div>
        <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-accent/8 to-primary/6 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-24 left-1/3 w-16 h-16 bg-gradient-to-br from-primary/6 to-accent/4 rounded-full animate-float-reverse blur-sm"></div>
        <div className="absolute top-1/2 right-8 w-12 h-12 bg-gradient-to-br from-accent/6 to-primary/4 rounded-full animate-float blur-sm"></div>
        <div className="absolute bottom-16 right-1/4 w-8 h-8 bg-primary/5 rounded-full animate-float-slow blur-sm"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-accent/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute top-40 right-20 w-1.5 h-1.5 bg-primary/30 rounded-full animate-pulse-gentle delay-300"></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent/25 rounded-full animate-pulse-gentle delay-500"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6">
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-medium text-sm tracking-wide uppercase animate-fade-in-up">
              Meet Your Therapist
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-800 bg-clip-text text-transparent mb-6 animate-fade-in-up animation-delay-200 leading-tight">
            About Dr. Maya Reynolds, PsyD
          </h2>
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse-gentle"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle delay-200"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Dedicated to helping adults navigate anxiety, trauma, and burnout with evidence-based therapy in a supportive, healing environment.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Enhanced Image Section */}
          <div className="relative animate-fade-in-left order-2 lg:order-1">
            <div className="relative group">
              {/* Main image with enhanced styling */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-700 ease-out">
                <Image
                  src="/images/office/Dr. Maya Reynolds.png"
                  alt="Dr. Maya Reynolds - Licensed Clinical Psychologist"
                  width={500}
                  height={600}
                  className="w-full h-96 lg:h-[520px] object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Enhanced Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-gray-100 animate-float group-hover:scale-110 transition-transform duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-black mb-1">10+</div>
                  <div className="text-sm font-medium text-gray-600 uppercase tracking-wide">Years Experience</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-2 rounded-full"></div>
                </div>
              </div>

              {/* Decorative elements around image */}
              <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/20 rounded-full animate-pulse-gentle"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full animate-pulse-gentle delay-300"></div>
            </div>
          </div>

          {/* Enhanced Content Section */}
          <div className="space-y-8 animate-fade-in-right order-1 lg:order-2">
            {/* Introduction card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-white/50 hover-glow group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">👩‍⚕️</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Licensed Clinical Psychologist</h3>
                  <p className="text-sm text-gray-600 font-medium">Santa Monica, California</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                I&apos;m a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware—but internally feel exhausted, stuck in overthinking, or emotionally on edge.
              </p>
            </div>

            {/* Specializations card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-white/50 hover-glow group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">Areas of Focus</h3>
                  <p className="text-sm text-gray-600 font-medium">Specialized Support</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                My work often focuses on anxiety, panic, trauma, and burnout. Clients frequently come to me feeling &quot;functional&quot; on the outside while quietly struggling with constant worry, tension in their body, difficulty sleeping, or a sense that they&apos;re always bracing for something to go wrong. Others are navigating the impact of earlier life experiences that continue to affect their relationships, confidence, or sense of safety.
              </p>
            </div>

            {/* Approach card */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-10 shadow-xl border border-white/50 hover-glow group">
              <div className="flex items-start space-x-4 mb-6">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary/80 to-accent/80 rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-white text-xl">🤝</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Therapeutic Approach</h3>
                  <p className="text-sm text-gray-600 font-medium">Evidence-Based & Compassionate</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. I integrate evidence-based methods such as cognitive-behavioral therapy (CBT), EMDR, mindfulness-based practices, and body-oriented techniques to help clients understand both the emotional and physiological sides of what they&apos;re experiencing.
              </p>
            </div>

            {/* Enhanced Approach Highlights */}
            <div className="grid sm:grid-cols-2 gap-6 mt-10">
              <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-accent/10 rounded-2xl p-6 text-center hover-lift border border-white/50 backdrop-blur-sm group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🧠</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">Evidence-Based</h3>
                <p className="text-sm text-gray-600 leading-relaxed">CBT, EMDR, Mindfulness</p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="bg-gradient-to-br from-accent/10 via-accent/5 to-primary/10 rounded-2xl p-6 text-center hover-lift border border-white/50 backdrop-blur-sm group">
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💝</div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-accent transition-colors duration-300">Warm & Collaborative</h3>
                <p className="text-sm text-gray-600 leading-relaxed">Supportive Environment</p>
                <div className="w-8 h-0.5 bg-gradient-to-r from-accent to-primary mx-auto mt-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  
    </>
  );
}
