import Link from 'next/link';

export default function Footer() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float-slow blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float-reverse blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/3 rounded-full animate-float blur-3xl"></div>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 20% 80%, white 1px, transparent 1px),
                           radial-gradient(circle at 80% 20%, white 1px, transparent 1px),
                           radial-gradient(circle at 40% 40%, white 0.5px, transparent 0.5px)`,
          backgroundSize: '50px 50px, 30px 30px, 70px 70px'
        }}></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Brand & Mission Section */}
            <div className="lg:col-span-4 animate-fade-in">
              <div className="mb-6">
                <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-2">
                  Dr. Maya Reynolds, PsyD
                </h3>
                <div className="flex items-center space-x-2 text-accent text-sm font-medium">
                  <span>🏥</span>
                  <span>Licensed Clinical Psychologist</span>
                </div>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Dedicated to helping adults navigate anxiety, trauma, and burnout with evidence-based therapy in a safe, supportive environment.
              </p>

              {/* Enhanced Social/Contact Links */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="mailto:maya@mayareynoldspsyd.com"
                  className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-accent hover:border-accent/50 transition-all duration-300 hover-lift"
                >
                  <span className="text-accent group-hover:scale-110 transition-transform duration-300">📧</span>
                  <span className="text-sm font-medium">Email</span>
                </a>
                <a
                  href="tel:+13105551234"
                  className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-primary hover:border-primary/50 transition-all duration-300 hover-lift"
                >
                  <span className="text-primary group-hover:scale-110 transition-transform duration-300">📞</span>
                  <span className="text-sm font-medium">Call</span>
                </a>
                <div className="group flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 hover:bg-accent hover:border-accent/50 transition-all duration-300 hover-lift cursor-pointer">
                  <span className="text-accent group-hover:scale-110 transition-transform duration-300">📍</span>
                  <span className="text-sm font-medium">Santa Monica</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-3">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-300">HIPAA Compliant</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-300">Licensed CA</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-3 py-1">
                  <span className="text-xs font-medium text-gray-300">Telehealth</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-2 animate-fade-in animation-delay-200">
              <h4 className="text-lg font-semibold mb-6 text-white">Navigate</h4>
              <div className="space-y-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  <span>About Dr. Reynolds</span>
                </button>
                <button
                  onClick={() => scrollToSection('services')}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  <span>Therapy Services</span>
                </button>
                <button
                  onClick={() => scrollToSection('office')}
                  className="group flex items-center space-x-2 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  <span>Our Office</span>
                </button>
                <Link
                  href="/contact"
                  className="group flex items-center space-x-2 text-gray-300 hover:text-accent transition-all duration-300 hover:translate-x-1"
                >
                  <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                  <span>Contact & Scheduling</span>
                </Link>
              </div>
            </div>

            {/* Specialties */}
            <div className="lg:col-span-3 animate-fade-in animation-delay-400">
              <h4 className="text-lg font-semibold mb-6 text-white">Specialties</h4>
              <div className="space-y-4">
                <div className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300">🧠</span>
                  <div>
                    <div className="font-medium">Anxiety & Panic Therapy</div>
                    <div className="text-sm text-gray-400">CBT & Mindfulness</div>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300">💔</span>
                  <div>
                    <div className="font-medium">Trauma & EMDR</div>
                    <div className="text-sm text-gray-400">Evidence-Based Care</div>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300">🔥</span>
                  <div>
                    <div className="font-medium">Burnout Counseling</div>
                    <div className="text-sm text-gray-400">Work-Life Balance</div>
                  </div>
                </div>
                <div className="group flex items-start space-x-3 text-gray-300 hover:text-white transition-colors duration-300">
                  <span className="text-accent mt-1 group-hover:scale-110 transition-transform duration-300">💻</span>
                  <div>
                    <div className="font-medium">Telehealth Available</div>
                    <div className="text-sm text-gray-400">Convenient Online Sessions</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Hours */}
            <div className="lg:col-span-3 animate-fade-in animation-delay-600">
              <h4 className="text-lg font-semibold mb-6 text-white">Get In Touch</h4>

              {/* Contact Details */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📧</span>
                  <div>
                    <div className="text-gray-300 font-medium">Email</div>
                    <a href="mailto:maya@mayareynoldspsyd.com" className="text-accent hover:text-white transition-colors duration-300 text-sm">
                      maya@mayareynoldspsyd.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-primary mt-1">📞</span>
                  <div>
                    <div className="text-gray-300 font-medium">Phone</div>
                    <a href="tel:+13105551234" className="text-primary hover:text-white transition-colors duration-300 text-sm">
                      (310) 555-1234
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="text-accent mt-1">📍</span>
                  <div>
                    <div className="text-gray-300 font-medium">Office</div>
                    <div className="text-accent hover:text-white transition-colors duration-300 text-sm">
                      123th Street 45 W<br />
                      Santa Monica, CA 90401
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div>
                <h5 className="text-gray-300 font-medium mb-3">Office Hours</h5>
                <div className="text-sm text-gray-400 space-y-1">
                  <div>Mon - Thu: 9:00 AM - 6:00 PM</div>
                  <div>Friday: 9:00 AM - 4:00 PM</div>
                  <div>Saturday: By Appointment</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter/CTA Section */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center animate-fade-in animation-delay-800">
              <h4 className="text-xl lg:text-2xl font-bold text-white mb-4">
                Ready to Begin Your Healing Journey?
              </h4>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Take the first step towards better mental health. Schedule a free 15-minute consultation to see if we&apos;re a good fit.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <button className="bg-gradient-to-r from-accent to-primary text-white font-semibold px-8 py-3 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300">
                    Schedule Consultation
                  </button>
                </Link>
                <button
                  onClick={() => scrollToSection('services')}
                  className="border-2 border-white/30 text-white font-semibold px-8 py-3 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
                <p>© {new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved.</p>
                <div className="flex items-center space-x-4">
                  <span>•</span>
                  <span>Licensed Clinical Psychologist</span>
                  <span>•</span>
                  <span>California License #12345</span>
                  <span>•</span>
                  <span>HIPAA Compliant</span>
                </div>
              </div>

              {/* Additional Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a href="#" className="hover:text-accent transition-colors duration-300">Privacy Policy</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors duration-300">Terms of Service</a>
                <span>•</span>
                <a href="#" className="hover:text-accent transition-colors duration-300">Accessibility</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
