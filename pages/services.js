import Navbar from '@/components/Header';
import Footer from '@/components/Footer';
import Specialties from '@/components/Specialties';

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        {/* Hero Section for Services Page */}
        <section className="relative py-24 sm:py-32 lg:py-40 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/20">
          {/* Background decorations */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent/5 rounded-full animate-float-slow blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/5 rounded-full animate-float-reverse blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent/3 rounded-full animate-float blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {/* Badge */}
            <div className="inline-block mb-6 animate-fade-in-up">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full text-primary font-medium text-sm tracking-wide uppercase">
                Therapy Services
              </span>
            </div>

            {/* Main heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
              <span className="block bg-gradient-to-r from-gray-900 via-primary to-gray-800 bg-clip-text text-transparent mb-2">
                Specialized
              </span>
              <span className="block bg-gradient-to-r from-accent via-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Therapy Services
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              Evidence-based therapeutic approaches tailored to your unique needs and goals.
            </p>
          </div>
        </section>

        <Specialties />
      </div>
      <Footer />
    </>
  );
}