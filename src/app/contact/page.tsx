'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    onderwerp: '',
    bericht: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      vraag: 'Hoeveel rijlessen heb ik nodig?',
      antwoord: 'Dit verschilt per persoon. Gemiddeld hebben onze leerlingen 25-35 lessen nodig. Tijdens een gratis proefles kunnen we een persoonlijke inschatting maken op basis van je huidige niveau en leerdoelen.'
    },
    {
      vraag: 'Kan ik mijn rijles annuleren of verzetten?',
      antwoord: 'Ja, je kunt tot 48 uur van tevoren kosteloos annuleren of verzetten. Bij annulering binnen 48 uur worden de kosten in rekening gebracht, tenzij er sprake is van overmacht.'
    },
    {
      vraag: 'In welke auto\'s geven jullie les?',
      antwoord: 'We rijden in moderne, goed onderhouden lesauto\'s met dubbele bediening. Onze auto\'s zijn uitgerust met de nieuwste veiligheidsvoorzieningen en zijn comfortabel voor beginnende bestuurders.'
    },
    {
      vraag: 'Wat is het slagingspercentage?',
      antwoord: 'Ons slagingspercentage ligt rond de 95%, ruim boven het landelijk gemiddelde. Dit komt door onze persoonlijke aanpak en grondige examenvoorbereiding.'
    },
    {
      vraag: 'Rijden jullie ook in het weekend?',
      antwoord: 'Ja! We bieden flexibele lestijden aan, ook in het weekend en op avonden. Zo kunnen we de lessen aanpassen aan jouw schema, of je nu studeert of werkt.'
    },
    {
      vraag: 'Hoe boek ik mijn praktijkexamen?',
      antwoord: 'Wij regelen de examenaanvraag bij het CBR voor je. Zodra je instructeur vindt dat je klaar bent, plannen we samen een geschikte examendatum. De examenkosten worden apart in rekening gebracht.'
    },
    {
      vraag: 'Kan ik betalen in termijnen?',
      antwoord: 'Ja, we bieden verschillende betaalopties aan. Je kunt per les betalen, of bij een pakket in termijnen. Neem contact op voor de mogelijkheden die bij jou passen.'
    },
    {
      vraag: 'Wat als ik zak voor mijn examen?',
      antwoord: 'Geen zorgen, dat gebeurt de beste leerlingen. We analyseren samen wat er misging en plannen extra lessen om die punten te verbeteren. Daarna boeken we een nieuw examen wanneer je er klaar voor bent.'
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-56 pb-48 overflow-hidden">
        <Image
          src="/Bedrijfspresentatie bij Drive Young.png"
          alt="Drive Young contact"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Neem <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Contact</span> Op
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Heb je vragen? Wij staan voor je klaar. Neem gerust contact met ons op!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">
                Contactgegevens
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Telefoon</h3>
                    <a href="tel:+31612345678" className="text-blue-600 text-lg hover:underline">+31 6 12345678</a>
                    <p className="text-gray-500 text-sm mt-1">Ma-Vr: 08:00 - 21:00 | Za-Zo: 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">E-mail</h3>
                    <a href="mailto:info@driveyoung.nl" className="text-blue-600 text-lg hover:underline">info@driveyoung.nl</a>
                    <p className="text-gray-500 text-sm mt-1">We reageren binnen 24 uur</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                    <a href="https://wa.me/31612345678" className="text-green-600 text-lg hover:underline">+31 6 12345678</a>
                    <p className="text-gray-500 text-sm mt-1">Snelste reactie via WhatsApp!</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Lesgebied</h3>
                    <p className="text-gray-700 text-lg">Amsterdam en omgeving</p>
                    <p className="text-gray-500 text-sm mt-1">Amstelveen, Diemen, Ouder-Amstel</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-bold text-gray-900 mb-4">Volg ons</h3>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-black rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-white rounded-3xl p-12 shadow-xl text-center animate-scale-in">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Bericht Verzonden!</h3>
                  <p className="text-gray-600 mb-6">
                    Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ naam: '', email: '', telefoon: '', onderwerp: '', bericht: '' });
                    }}
                    className="btn-primary"
                  >
                    Nieuw Bericht
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Stuur een Bericht</h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Naam *</label>
                        <input
                          type="text"
                          name="naam"
                          required
                          value={formData.naam}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="Je naam"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Telefoon</label>
                        <input
                          type="tel"
                          name="telefoon"
                          value={formData.telefoon}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                          placeholder="06 12345678"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">E-mailadres *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                        placeholder="je@email.nl"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Onderwerp *</label>
                      <select
                        name="onderwerp"
                        required
                        value={formData.onderwerp}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      >
                        <option value="">Selecteer een onderwerp</option>
                        <option value="proefles">Vraag over proefles</option>
                        <option value="pakketten">Vraag over pakketten</option>
                        <option value="prijzen">Vraag over prijzen</option>
                        <option value="examen">Vraag over examen</option>
                        <option value="anders">Anders</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Bericht *</label>
                      <textarea
                        name="bericht"
                        required
                        rows={5}
                        value={formData.bericht}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                        placeholder="Je vraag of bericht..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-4 text-lg flex items-center justify-center disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Verzenden...
                        </>
                      ) : (
                        'Verstuur Bericht'
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde <span className="text-blue-600">Vragen</span>
            </h2>
            <p className="text-xl text-gray-600">
              Vind snel antwoord op de meest gestelde vragen
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-2xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors"
                >
                  <span className="font-semibold text-gray-900 pr-4">{faq.vraag}</span>
                  <svg
                    className={`w-5 h-5 text-blue-600 flex-shrink-0 transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}
                >
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                    {faq.antwoord}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meer <span className="text-blue-600">informatie</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/proefles" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Hoe vraag ik een proefles aan?</h3>
              <p className="text-gray-600 text-sm">Vul ons proefles formulier in en we nemen contact op.</p>
            </Link>

            <Link href="/prijzen" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Wat kosten de rijlessen?</h3>
              <p className="text-gray-600 text-sm">Bekijk onze transparante prijzen en pakketten.</p>
            </Link>

            <Link href="/pakketten" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Welk pakket past bij mij?</h3>
              <p className="text-gray-600 text-sm">Vergelijk onze pakketten en kies de beste optie.</p>
            </Link>

            <Link href="/lesinfo" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Waar geven jullie les?</h3>
              <p className="text-gray-600 text-sm">Ontdek onze leslocaties en lestijden.</p>
            </Link>

            <Link href="/aanmelden" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Hoe schrijf ik me in?</h3>
              <p className="text-gray-600 text-sm">Meld je direct aan via ons inschrijfformulier.</p>
            </Link>

            <Link href="/geslaagden" className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all group">
              <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Wat zeggen anderen?</h3>
              <p className="text-gray-600 text-sm">Lees ervaringen van onze geslaagde leerlingen.</p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
