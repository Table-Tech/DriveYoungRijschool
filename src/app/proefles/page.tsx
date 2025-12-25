'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Proefles() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    leeftijd: '',
    ervaring: '',
    locatie: '',
    voorkeurDag: '',
    voorkeurTijd: '',
    bericht: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 pt-20">
        <div className="max-w-xl mx-auto px-4 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-2xl animate-scale-in">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Aanvraag Ontvangen!</h1>
            <p className="text-gray-600 mb-8">
              Bedankt voor je proefles aanvraag, {formData.naam.split(' ')[0]}! We nemen binnen 24 uur contact met je op om een afspraak te maken.
            </p>
            <Link href="/" className="btn-primary">
              Terug naar Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-56 pb-48 overflow-hidden">
        <Image
          src="/ChatGPT Image 25 dec 2025, 12_15_11.png"
          alt="Drive Young gratis proefles"
          fill
          className="object-cover object-[center_30%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block px-4 py-2 bg-green-500/20 backdrop-blur-sm rounded-full text-green-300 text-sm font-medium mb-6">
            100% Gratis & Vrijblijvend
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Vraag je Gratis <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Proefles</span> aan
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Maak kennis met onze instructeurs en ontdek of Drive Young bij jou past. 60 minuten rijervaring zonder verplichtingen.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Vul je gegevens in</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Volledige Naam *</label>
                    <input
                      type="text"
                      name="naam"
                      required
                      value={formData.naam}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Jan de Vries"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Leeftijd *</label>
                    <select
                      name="leeftijd"
                      required
                      value={formData.leeftijd}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Selecteer leeftijd</option>
                      <option value="16">16 jaar (2toDrive)</option>
                      <option value="17">17 jaar</option>
                      <option value="18-25">18-25 jaar</option>
                      <option value="26-35">26-35 jaar</option>
                      <option value="36+">36+ jaar</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">E-mailadres *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="jan@voorbeeld.nl"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Telefoonnummer *</label>
                    <input
                      type="tel"
                      name="telefoon"
                      required
                      value={formData.telefoon}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="06 12345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Heb je al rijervaring? *</label>
                  <select
                    name="ervaring"
                    required
                    value={formData.ervaring}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                  >
                    <option value="">Selecteer een optie</option>
                    <option value="geen">Nee, nog nooit gereden</option>
                    <option value="weinig">Ja, een paar lessen gehad</option>
                    <option value="gemiddeld">Ja, 10-20 lessen gehad</option>
                    <option value="veel">Ja, meer dan 20 lessen gehad</option>
                    <option value="herexamen">Ik ben gezakt en zoek een nieuwe rijschool</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Waar wil je opgehaald worden? *</label>
                  <input
                    type="text"
                    name="locatie"
                    required
                    value={formData.locatie}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    placeholder="Adres of plaatsnaam"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Voorkeur Dag</label>
                    <select
                      name="voorkeurDag"
                      value={formData.voorkeurDag}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Geen voorkeur</option>
                      <option value="maandag">Maandag</option>
                      <option value="dinsdag">Dinsdag</option>
                      <option value="woensdag">Woensdag</option>
                      <option value="donderdag">Donderdag</option>
                      <option value="vrijdag">Vrijdag</option>
                      <option value="zaterdag">Zaterdag</option>
                      <option value="zondag">Zondag</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Voorkeur Tijd</label>
                    <select
                      name="voorkeurTijd"
                      value={formData.voorkeurTijd}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Geen voorkeur</option>
                      <option value="ochtend">Ochtend (8:00 - 12:00)</option>
                      <option value="middag">Middag (12:00 - 17:00)</option>
                      <option value="avond">Avond (17:00 - 21:00)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Opmerkingen</label>
                  <textarea
                    name="bericht"
                    rows={4}
                    value={formData.bericht}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Heb je nog vragen of opmerkingen?"
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
                    'Proefles Aanvragen'
                  )}
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Wat kun je verwachten?
                </h2>
                <p className="text-gray-600 text-lg mb-8">
                  Een proefles bij Drive Young is de perfecte manier om te ontdekken of wij de juiste rijschool voor jou zijn.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Kennismaking</h3>
                    <p className="text-gray-600">We halen je op en maken kennis. Je instructeur legt uit hoe de les verloopt.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Achter het Stuur</h3>
                    <p className="text-gray-600">Je gaat direct rijden! Ook als je nog nooit gereden hebt, begeleiden we je stap voor stap.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Niveau Inschatting</h3>
                    <p className="text-gray-600">Na de les bespreken we je niveau en hoeveel lessen je ongeveer nodig hebt.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-blue-600">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Advies op Maat</h3>
                    <p className="text-gray-600">Je krijgt eerlijk advies over welk pakket het beste bij jou past. Geen verplichtingen!</p>
                  </div>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="bg-blue-50 rounded-2xl p-6 mt-8">
                <h3 className="font-bold text-gray-900 mb-4">Waarom Drive Young?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">95% slagingspercentage</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Geduldige, ervaren instructeurs</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Flexibele lestijden, 7 dagen per week</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Moderne, comfortabele lesauto&apos;s</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
