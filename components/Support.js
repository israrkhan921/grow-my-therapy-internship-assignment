export default function Support() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary-dark text-slate-700 py-20 lg:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-secondary/20 rounded-full animate-float-reverse"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-white/5 rounded-full animate-float"></div>
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Quote */}
        <div className="mb-8 lg:mb-12 animate-fade-in-up">
          <div className="inline-block">
            <svg className="w-12 h-12 text-secondary mb-4 mx-auto" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
            </svg>
          </div>
          <blockquote className="text-xl lg:text-2xl italic leading-relaxed mb-6 max-w-3xl mx-auto">
            &quot;I believe therapy works best when clients feel respected, understood, and actively involved in the process. My goal is not just symptom relief, but helping clients develop insight, resilience, and a stronger relationship with themselves over time.&quot;
          </blockquote>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Author */}
        <div className="mb-8 lg:mb-12 animate-fade-in-up animation-delay-200">
          <p className="text-lg lg:text-xl font-semibold">- Dr. Maya Reynolds, PsyD</p>
        </div>

        {/* Additional content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 lg:p-8 animate-fade-in-up animation-delay-400">
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Trauma work is an important part of my practice. I work with adults who have experienced single-incident trauma as well as more complex, long-standing patterns that may stem from childhood, relationships, or chronic stress. My approach is paced carefully, with an emphasis on safety, stabilization, and helping clients feel more regulated in their daily lives—not just during sessions.
          </p>
        </div>

        {/* Key principles */}
        <div className="grid sm:grid-cols-3 gap-6 mt-12 lg:mt-16 animate-fade-in-up animation-delay-600">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift transition-all duration-300">
            <div className="text-3xl mb-3">🤝</div>
            <h3 className="font-semibold mb-2">Collaborative Approach</h3>
            <p className="text-sm text-gray-200">Working together toward your goals</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift transition-all duration-300">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="font-semibold mb-2">Safe Environment</h3>
            <p className="text-sm text-gray-200">Confidential and supportive space</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover-lift transition-all duration-300">
            <div className="text-3xl mb-3">🌱</div>
            <h3 className="font-semibold mb-2">Holistic Healing</h3>
            <p className="text-sm text-gray-200">Mind, body, and spirit integration</p>
          </div>
        </div>
      </div>
    </section>
  );
}
