import Image from 'next/image';

export default function Office() {
  const amenities = [
    { icon: "🌿", text: "Calm Environment" },
    { icon: "☀️", text: "Natural Light" },
    { icon: "🛋️", text: "Comfortable Seating" },
    { icon: "🔒", text: "Private & Secure" },
    { icon: "📱", text: "Telehealth Available" },
    { icon: "🅿️", text: "Easy Parking" }
  ];

  return (
    <section id="office" className="py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-16 h-16 bg-primary/10 rounded-full animate-float-slow"></div>
        <div className="absolute bottom-20 left-20 w-12 h-12 bg-secondary/10 rounded-full animate-float"></div>
        <div className="absolute top-1/2 left-10 w-8 h-8 bg-primary/5 rounded-full animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Calm Therapy Office in Santa Monica
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
            Located at 123th Street 45 W, Santa Monica, CA 90401, our office provides a quiet, private space designed to feel calm and grounding, with natural light and a comfortable environment that helps clients feel at ease. We offer both in-person therapy sessions and secure telehealth options throughout California.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full mt-6"></div>
        </div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
          <div className="relative group animate-fade-in-left">
            <Image
              src="/images/office/office1.jpeg"
              alt="Therapy office reception area with comfortable seating"
              width={400}
              height={320}
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl hover-lift group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="relative group animate-fade-in-up animation-delay-200">
            <Image
              src="/images/office/office2.jpeg"
              alt="Calm therapy counseling room with natural light"
              width={400}
              height={320}
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl hover-lift group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          <div className="relative group animate-fade-in-right animation-delay-400">
            <Image
              src="/images/office/office1.jpeg"
              alt="Comfortable therapy space with natural light and calming atmosphere"
              width={400}
              height={320}
              className="w-full h-64 lg:h-80 object-cover rounded-2xl shadow-xl hover-lift group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R+IRjWjBqO6O2mhP//Z"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl lg:text-3xl font-bold text-center text-gray-900 mb-8">
            Office Amenities & Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-gray-50 to-white hover-lift hover-glow transition-all duration-300"
                style={{ animationDelay: `${(index + 6) * 100}ms` }}
              >
                <div className="text-3xl">{amenity.icon}</div>
                <span className="font-medium text-gray-800">{amenity.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="text-center mt-12 animate-fade-in-up animation-delay-800">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 inline-block">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-700">123th Street 45 W, Santa Monica, CA 90401</p>
            <p className="text-gray-700 mt-2">📞 (555) 123-4567</p>
          </div>
        </div>
      </div>
    </section>
  );
}
