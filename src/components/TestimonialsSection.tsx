'use client';

import Image from 'next/image';

const testimonials = [
  {
    name: 'Sophie K.',
    initials: 'SK',
    date: 'December 2024',
    text: 'Super fijne rijschool! Mijn instructeur was geduldig en legde alles duidelijk uit. In één keer geslaagd!',
    rating: 5,
  },
  {
    name: 'Mohammed V.',
    initials: 'MV',
    date: 'November 2024',
    text: 'De flexibele lestijden waren perfect voor mij. Kon naast mijn studie makkelijk rijlessen inplannen.',
    rating: 5,
  },
  {
    name: 'Lisa B.',
    initials: 'LB',
    date: 'Oktober 2024',
    text: 'Na een slechte ervaring bij een andere rijschool, vond ik bij Drive Young eindelijk de rust om goed te leren rijden.',
    rating: 5,
  },
  {
    name: 'Thomas R.',
    initials: 'TR',
    date: 'Oktober 2024',
    text: 'Top instructeurs die je echt voorbereiden op het examen. Voelde me heel zeker tijdens mijn praktijkexamen.',
    rating: 5,
  },
  {
    name: 'Emma de V.',
    initials: 'EV',
    date: 'September 2024',
    text: 'Hele fijne sfeer en goede begeleiding. Ze nemen echt de tijd om alles uit te leggen. Aanrader!',
    rating: 5,
  },
  {
    name: 'Daan M.',
    initials: 'DM',
    date: 'September 2024',
    text: 'Professioneel en vriendelijk. De theorie-app was ook erg handig. In één keer geslaagd voor theorie én praktijk!',
    rating: 5,
  },
  {
    name: 'Fatima A.',
    initials: 'FA',
    date: 'Augustus 2024',
    text: 'Ik was best zenuwachtig, maar mijn instructeur stelde me altijd op mijn gemak. Nu rij ik vol vertrouwen!',
    rating: 5,
  },
  {
    name: 'Kevin J.',
    initials: 'KJ',
    date: 'Augustus 2024',
    text: 'Goede prijs-kwaliteit verhouding. Geen verborgen kosten en altijd duidelijke communicatie.',
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="flex-shrink-0 w-[350px] bg-white rounded-2xl p-6 shadow-lg border border-gray-100 mx-3">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-600 mb-6 line-clamp-4">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white font-bold text-sm">{testimonial.initials}</span>
        </div>
        <div className="ml-3">
          <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
          <div className="text-xs text-gray-500">Geslaagd {testimonial.date}</div>
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trots op onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">geslaagden</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Zij gingen je voor - jij kunt de volgende zijn!
          </p>
        </div>

        {/* Geslaagden Photos */}
        <div className="flex justify-center items-center gap-6 md:gap-10 lg:gap-12 mb-16">
          {/* Left Photo - Tilted Left */}
          <div className="relative w-40 h-52 md:w-56 md:h-72 lg:w-64 lg:h-80 transform -rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl"></div>
            <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_31_27.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Middle Photo - Straight */}
          <div className="relative w-44 h-56 md:w-64 md:h-80 lg:w-72 lg:h-96 transform hover:scale-105 transition-transform duration-300 z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl shadow-2xl"></div>
            <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_28_38.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Right Photo - Tilted Right */}
          <div className="relative w-40 h-52 md:w-56 md:h-72 lg:w-64 lg:h-80 transform rotate-6 hover:rotate-0 transition-transform duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl shadow-xl"></div>
            <div className="absolute inset-1 bg-white rounded-xl overflow-hidden">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_25_12.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Reviews Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>

        {/* Single Row - Scrolling Left */}
        <div className="scroll-container">
          <div className="flex animate-scroll-left">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <TestimonialCard key={`row1-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <a
          href="/geslaagden"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors"
        >
          Bekijk Alle Geslaagden
          <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
