export default function Specialties() {
  const services = [
    {
      icon: "🧠",
      title: "Anxiety & Panic Disorder Therapy",
      description: "Specialized anxiety therapy in Santa Monica for persistent worry, physical tension, panic attacks, difficulty sleeping, and feeling constantly on edge. CBT and mindfulness-based approaches.",
      features: ["CBT Techniques", "Mindfulness Training", "Panic Attack Management", "Sleep Improvement"],
      gradient: "from-blue-50 to-indigo-50",
      iconBg: "from-blue-500 to-indigo-600",
      accentColor: "blue"
    },
    {
      icon: "💔",
      title: "Trauma Therapy & EMDR",
      description: "Trauma-informed care in California for single-incident and complex trauma, with careful pacing, safety, and stabilization using EMDR and body-oriented techniques.",
      features: ["EMDR Therapy", "Trauma Processing", "Safety Planning", "Body-Based Techniques"],
      gradient: "from-purple-50 to-pink-50",
      iconBg: "from-purple-500 to-pink-600",
      accentColor: "purple"
    },
    {
      icon: "🔥",
      title: "Burnout & Perfectionism Counseling",
      description: "Support for professional burnout, perfectionism, and high internal pressure, especially for entrepreneurs, creatives, and professionals in fast-paced environments.",
      features: ["Burnout Recovery", "Perfectionism Work", "Work-Life Balance", "Stress Management"],
      gradient: "from-orange-50 to-red-50",
      iconBg: "from-orange-500 to-red-600",
      accentColor: "orange"
    }
  ];

  return (
    <section id="services" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Enhanced background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-16 right-12 w-40 h-40 bg-gradient-to-br from-primary/6 to-accent/4 rounded-full animate-float-slow blur-2xl"></div>
        <div className="absolute bottom-20 left-16 w-32 h-32 bg-gradient-to-br from-accent/6 to-primary/4 rounded-full animate-float-reverse blur-2xl"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/4 to-accent/6 rounded-full animate-float blur-2xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-20 h-20 bg-gradient-to-br from-accent/5 to-primary/3 rounded-full animate-float-slow blur-2xl"></div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, #4A5568 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, #68D391 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, #4A5568 0.5px, transparent 0.5px)`,
          backgroundSize: '60px 60px, 40px 40px, 80px 80px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Enhanced header section */}
        <div className="text-center mb-16 lg:mb-20">
          <div className="inline-block mb-6 animate-fade-in-up">
            <span className="inline-block px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-semibold text-sm tracking-wide uppercase border border-primary/20">
              🏆 Specialized Services
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-900 via-primary to-gray-800 bg-clip-text text-transparent mb-6 animate-fade-in-up animation-delay-200 leading-tight">
            Therapy Services in Santa Monica
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed mb-8">
            Specialized mental health support tailored to your unique needs and experiences, delivered with compassion and expertise.
          </p>

          {/* Decorative elements */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent to-primary rounded-full"></div>
            <div className="w-4 h-4 bg-accent rounded-full animate-pulse-gentle"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
            <div className="w-3 h-3 bg-primary rounded-full animate-pulse-gentle delay-200"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-accent to-secondary rounded-full"></div>
            <div className="w-4 h-4 bg-secondary rounded-full animate-pulse-gentle delay-400"></div>
            <div className="w-16 h-0.5 bg-gradient-to-r from-secondary to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Enhanced service cards */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-xl border border-white/50 hover-glow hover-lift animate-fade-in-up group relative overflow-hidden`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Card background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl`}></div>

              {/* Decorative corner elements */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-6 h-6 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100"></div>

              <div className="relative z-10">
                {/* Enhanced icon */}
                <div className="text-center mb-8">
                  <div className={`w-24 h-24 bg-gradient-to-br ${service.iconBg} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-2xl transform group-hover:scale-110 transition-all duration-500 group-hover:rotate-3`}>
                    <span className="text-white text-4xl filter drop-shadow-lg">{service.icon}</span>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Enhanced features list */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center text-gray-700 group/feature hover:text-primary transition-colors duration-300"
                      style={{ animationDelay: `${(index * 200) + (featureIndex * 100)}ms` }}
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-primary to-accent rounded-full mr-4 flex-shrink-0 shadow-sm group-hover/feature:scale-125 transition-transform duration-300"></div>
                      <span className="font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Subtle bottom accent */}
                <div className={`w-full h-1 bg-gradient-to-r ${service.iconBg} rounded-full mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced call to action */}
        <div className="text-center mt-20 lg:mt-24 animate-fade-in-up animation-delay-800">
          <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 max-w-2xl mx-auto">
            <div className="mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <span className="text-white text-2xl">💫</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to Begin Your Journey?</h3>
              <p className="text-gray-600 leading-relaxed">
                Take the first step toward healing and growth with personalized therapy tailored to your needs.
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary to-accent text-black px-10 py-4 rounded-full font-bold text-lg hover-lift hover-glow transition-all duration-500 shadow-xl group"
            >
              <span>Schedule Your Consultation</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
