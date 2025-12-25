import Link from 'next/link';
import Image from 'next/image';
import PackagesSection from '@/components/PackagesSection';
import ProeflesSection from '@/components/ProeflesSection';
import TestimonialsSection from '@/components/TestimonialsSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <Image
          src="/Rijschoolauto bij zonsondergang op weg.png"
          alt="Drive Young rijschool auto op de weg"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-blue-200 text-sm font-medium mb-6">
              Welkom bij Drive Young
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up delay-100">
            Rij je <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">toekomst</span><br />
            tegemoet
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 animate-fade-in-up delay-200">
            Bij Drive Young leer je autorijden in een ontspannen sfeer met persoonlijke begeleiding.
            Wij helpen jou om met vertrouwen de weg op te gaan.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300">
            <Link href="/proefles" className="btn-white text-lg px-8 py-4 animate-pulse-glow">
              Gratis Proefles Aanvragen
            </Link>
            <Link href="/pakketten" className="bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 text-lg px-8 py-4 transition-colors">
              Bekijk Pakketten
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 animate-fade-in-up delay-400">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-blue-200">Geslaagde Leerlingen</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">95%</div>
              <div className="text-blue-200">Slagingspercentage</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-blue-200">Jaar Ervaring</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">5.0</div>
              <div className="text-blue-200">Google Rating</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      <PackagesSection />

      <ProeflesSection />

      <TestimonialsSection />

      {/* Final CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Klaar om je rijbewijs te halen?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Neem vandaag nog contact met ons op en zet de eerste stap richting je vrijheid op de weg.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/aanmelden" className="btn-primary text-lg px-10 py-4">
              Direct Aanmelden
            </Link>
            <Link href="/contact" className="btn-secondary text-lg px-10 py-4">
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
