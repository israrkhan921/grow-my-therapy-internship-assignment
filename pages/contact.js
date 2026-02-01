import { useState } from 'react';
import Navbar from '@/components/Header';
import Footer from '@/components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to a server
    alert('Thank you for your message! Dr. Maya Reynolds will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <>
      <Navbar />
      {/* Hero Section */}
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
              Get In Touch
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up animation-delay-200">
            <span className="block bg-gradient-to-r from-gray-900 via-primary to-gray-800 bg-clip-text text-transparent mb-2">
              Start Your
            </span>
            <span className="block bg-gradient-to-r from-accent via-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Healing Journey
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
            Ready to take the first step towards better mental health? I&apos;m here to listen, support, and guide you through your therapeutic journey.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-4 mt-8 animate-fade-in-up animation-delay-600">
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              <span className="text-accent">🔒</span>
              <span className="text-sm font-medium text-gray-700">HIPAA Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              <span className="text-primary">📞</span>
              <span className="text-sm font-medium text-gray-700">Free Consultation</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-white/50">
              <span className="text-accent">⚡</span>
              <span className="text-sm font-medium text-gray-700">24hr Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="animate-fade-in-left">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Send Me a Message
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Fill out the form below and I&apos;ll get back to you within 24 hours. All information is kept confidential and secure.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="anxiety">Anxiety Therapy</option>
                      <option value="trauma">Trauma & EMDR</option>
                      <option value="burnout">Burnout Counseling</option>
                      <option value="general">General Therapy</option>
                      <option value="consultation">Free Consultation</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-300 bg-gray-50 focus:bg-white resize-none"
                    placeholder="Tell me about what brings you here and how I can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-accent to-primary text-white py-4 px-8 rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="animate-fade-in-right">
              <div className="mb-8">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Contact Information
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Multiple ways to connect with me. Choose what works best for you.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Phone */}
                <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-6 rounded-2xl border border-primary/20 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Phone</h3>
                      <p className="text-gray-600 mb-2">Call for immediate support or to schedule</p>
                      <a href="tel:+13105551234" className="text-primary hover:text-accent font-semibold transition-colors duration-300">
                        (310) 555-1234
                      </a>
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="bg-gradient-to-r from-accent/5 to-accent/10 p-6 rounded-2xl border border-accent/20 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-accent to-accent/80 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">📧</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Email</h3>
                      <p className="text-gray-600 mb-2">Send detailed inquiries or questions</p>
                      <a href="mailto:maya@mayareynoldspsyd.com" className="text-accent hover:text-primary font-semibold transition-colors duration-300">
                        maya@mayareynoldspsyd.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Office */}
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-200 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">🏢</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Office Location</h3>
                      <p className="text-gray-600 mb-2">In-person sessions available</p>
                      <div className="text-gray-700">
                        <p className="font-medium">123th Street 45 W</p>
                        <p>Santa Monica, CA 90401</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Telehealth */}
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-2xl border border-blue-200 hover-lift group">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white text-xl">💻</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">Telehealth</h3>
                      <p className="text-gray-600 mb-2">Secure online sessions anywhere in CA</p>
                      <p className="text-blue-600 font-semibold">Available statewide</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-8 bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Office Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Thursday</span>
                    <span className="font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Friday</span>
                    <span className="font-medium">9:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-medium">By Appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-medium">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Common questions about starting therapy and what to expect.
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer a free consultation?</h3>
              <p className="text-gray-600">Yes! I offer a complimentary 30-minute consultation to discuss your needs and determine if we&apos;re a good fit for therapy.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-2">What insurance do you accept?</h3>
              <p className="text-gray-600">I accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, and UnitedHealthcare. I can also provide superbills for out-of-network benefits.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-2">How long are therapy sessions?</h3>
              <p className="text-gray-600">Individual therapy sessions are typically 50 minutes long. Initial consultations may be 30 minutes to allow time for assessment and discussion.</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover-lift">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Do you offer telehealth appointments?</h3>
              <p className="text-gray-600">Absolutely! I provide secure telehealth sessions for clients throughout California, offering the same quality care as in-person sessions.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}