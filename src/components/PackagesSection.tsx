'use client';

import { useState } from 'react';

interface Package {
  id: string;
  name: string;
  subtitle: string;
  lessons: number;
  price: number;
  pricePerLesson: number;
  features: string[];
  popular?: boolean;
}

const packages: Package[] = [
  {
    id: 'basis',
    name: 'Basis',
    subtitle: 'Perfect om te starten',
    lessons: 10,
    price: 499,
    pricePerLesson: 49.90,
    features: [
      '10 rijlessen van 60 min',
      'Gratis ophalen',
      'Theorie ondersteuning',
    ],
  },
  {
    id: 'voordeel',
    name: 'Voordeel',
    subtitle: 'Meest gekozen pakket',
    lessons: 25,
    price: 1149,
    pricePerLesson: 45.96,
    features: [
      '25 rijlessen van 60 min',
      'Tussentijdse toets (TTT)',
      'Praktijkexamen inbegrepen',
      'Theorie app toegang',
    ],
    popular: true,
  },
  {
    id: 'compleet',
    name: 'Compleet',
    subtitle: 'Alles wat je nodig hebt',
    lessons: 40,
    price: 1799,
    pricePerLesson: 44.98,
    features: [
      '40 rijlessen van 60 min',
      'Alles uit Voordeel pakket',
      'Herexamen garantie',
      'Persoonlijke begeleiding',
    ],
  },
];

export default function PackagesSection() {
  const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
  const [showAdvice, setShowAdvice] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [adviceFormData, setAdviceFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', { package: selectedPackage, ...formData });
    alert('Bedankt! We nemen zo snel mogelijk contact met je op.');
    setSelectedPackage(null);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleAdviceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Advice form submitted:', adviceFormData);
    alert('Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.');
    setShowAdvice(false);
    setAdviceFormData({ name: '', email: '', subject: '', phone: '', message: '' });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Kies jouw pakket
          </h2>
          <p className="text-lg text-gray-500 max-w-xl mx-auto">
            Transparante prijzen, geen verborgen kosten
          </p>
        </div>

        {!selectedPackage ? (
          <>
            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg)}
                  className={`group relative cursor-pointer rounded-3xl p-8 transition-all duration-300
                    ${pkg.popular
                      ? 'bg-gradient-to-br from-blue-600 to-blue-700 shadow-2xl shadow-blue-500/25 md:-translate-y-2 ring-4 ring-blue-400/20'
                      : 'bg-white border-2 border-gray-100 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1'
                    }`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="bg-gradient-to-r from-amber-400 to-orange-400 text-white text-xs font-bold px-5 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                        Populair
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className={`text-2xl font-bold mb-1 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      {pkg.name}
                    </h3>
                    <p className={`text-sm ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                      {pkg.subtitle}
                    </p>
                  </div>

                  <div className="mb-2">
                    <span className={`text-5xl font-bold ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                      &euro;{pkg.price.toLocaleString('nl-NL')}
                    </span>
                  </div>

                  <p className={`text-sm mb-8 ${pkg.popular ? 'text-blue-200' : 'text-gray-400'}`}>
                    {pkg.lessons} lessen &bull; &euro;{pkg.pricePerLesson.toFixed(2).replace('.', ',')} per les
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className={`flex items-center ${pkg.popular ? 'text-blue-100' : 'text-gray-600'}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 ${pkg.popular ? 'bg-blue-500' : 'bg-blue-100'}`}>
                          <svg className={`w-3 h-3 ${pkg.popular ? 'text-white' : 'text-blue-600'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-4 px-6 text-center font-bold rounded-2xl transition-all duration-300
                      ${pkg.popular
                        ? 'bg-white text-blue-600 hover:bg-blue-50 shadow-lg'
                        : 'bg-blue-600 text-white hover:bg-blue-700 group-hover:shadow-lg'
                      }`}
                  >
                    Kies {pkg.name}
                  </button>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-400 mt-10 text-sm">
              Losse les: &euro;52,50 per uur &bull; Alle prijzen zijn inclusief BTW
            </p>

            {/* Advice Button */}
            {!showAdvice && (
              <div className="text-center mt-12">
                <button
                  onClick={() => setShowAdvice(true)}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-gray-800 to-gray-900 text-white font-semibold rounded-full hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Niet zeker welk pakket bij je past? Vraag persoonlijk advies
                </button>
              </div>
            )}

            {/* Advice Form */}
            {showAdvice && (
              <div className="mt-12 max-w-5xl mx-auto">
                <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                  <div className="grid lg:grid-cols-5">
                    {/* Form */}
                    <div className="lg:col-span-3 p-8 lg:p-10">
                      <button
                        onClick={() => setShowAdvice(false)}
                        className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center transition-colors mb-6"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Terug naar pakketten
                      </button>

                      <h4 className="text-2xl font-bold text-gray-900 mb-2">Stuur ons een bericht</h4>
                      <p className="text-gray-500 mb-8">Wij helpen je graag bij het kiezen van het juiste pakket.</p>

                      <form onSubmit={handleAdviceSubmit}>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="advice-name" className="block text-sm font-semibold text-gray-700 mb-2">
                              Naam *
                            </label>
                            <input
                              type="text"
                              id="advice-name"
                              required
                              value={adviceFormData.name}
                              onChange={(e) => setAdviceFormData({ ...adviceFormData, name: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="Je volledige naam"
                            />
                          </div>

                          <div>
                            <label htmlFor="advice-email" className="block text-sm font-semibold text-gray-700 mb-2">
                              E-mailadres *
                            </label>
                            <input
                              type="email"
                              id="advice-email"
                              required
                              value={adviceFormData.email}
                              onChange={(e) => setAdviceFormData({ ...adviceFormData, email: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="jouw.email@voorbeeld.nl"
                            />
                          </div>

                          <div>
                            <label htmlFor="advice-subject" className="block text-sm font-semibold text-gray-700 mb-2">
                              Onderwerp *
                            </label>
                            <input
                              type="text"
                              id="advice-subject"
                              required
                              value={adviceFormData.subject}
                              onChange={(e) => setAdviceFormData({ ...adviceFormData, subject: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="Waar gaat je vraag over?"
                            />
                          </div>

                          <div>
                            <label htmlFor="advice-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                              Telefoon <span className="text-gray-400 font-normal">(optioneel)</span>
                            </label>
                            <input
                              type="tel"
                              id="advice-phone"
                              value={adviceFormData.phone}
                              onChange={(e) => setAdviceFormData({ ...adviceFormData, phone: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                              placeholder="06 12345678"
                            />
                          </div>

                          <div className="sm:col-span-2">
                            <label htmlFor="advice-message" className="block text-sm font-semibold text-gray-700 mb-2">
                              Bericht *
                            </label>
                            <textarea
                              id="advice-message"
                              rows={4}
                              required
                              value={adviceFormData.message}
                              onChange={(e) => setAdviceFormData({ ...adviceFormData, message: e.target.value })}
                              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                              placeholder="Vertel ons meer over je situatie en wensen..."
                            />
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full mt-8 py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                        >
                          Verstuur bericht
                        </button>
                      </form>
                    </div>

                    {/* Contact Info Sidebar */}
                    <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-8 lg:p-10">
                      <h4 className="text-xl font-bold text-white mb-6">Contact informatie</h4>

                      <div className="space-y-6">
                        {/* Phone Numbers */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm mb-1">Telefoon</p>
                            <p className="text-white font-medium">Auto: <a href="tel:0640394858" className="hover:text-blue-200">06-40394858</a></p>
                            <p className="text-white font-medium">Motor/Overige: <a href="tel:0643999110" className="hover:text-blue-200">06-43999110</a></p>
                          </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm mb-1">E-mail</p>
                            <a href="mailto:info@driveyoung.nl" className="text-white font-medium hover:text-blue-200">info@driveyoung.nl</a>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm mb-1">Adres</p>
                            <p className="text-white font-medium">Heuvelsteijn 61</p>
                            <p className="text-white font-medium">3162SE Rhoon</p>
                          </div>
                        </div>

                        {/* Availability */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-blue-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <div>
                            <p className="text-blue-200 text-sm mb-1">Beschikbaarheid</p>
                            <p className="text-white font-medium">7 dagen per week</p>
                            <p className="text-blue-200 text-sm">Ook avonden & weekenden</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-5">
                {/* Selected Package Sidebar */}
                <div className="lg:col-span-2 bg-gradient-to-br from-blue-600 to-blue-700 p-8">
                  <button
                    onClick={() => setSelectedPackage(null)}
                    className="text-blue-200 hover:text-white text-sm font-medium flex items-center transition-colors mb-8"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Wijzig pakket
                  </button>

                  <p className="text-blue-200 text-sm mb-2">Geselecteerd pakket</p>
                  <h3 className="text-3xl font-bold text-white mb-4">{selectedPackage.name}</h3>
                  <p className="text-blue-200 mb-6">{selectedPackage.subtitle}</p>

                  <div className="mb-8">
                    <p className="text-5xl font-bold text-white">&euro;{selectedPackage.price.toLocaleString('nl-NL')}</p>
                    <p className="text-blue-200 mt-1">{selectedPackage.lessons} lessen &bull; &euro;{selectedPackage.pricePerLesson.toFixed(2).replace('.', ',')} per les</p>
                  </div>

                  <ul className="space-y-3">
                    {selectedPackage.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-blue-100">
                        <svg className="w-5 h-5 text-cyan-300 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Form */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Schrijf je in</h4>
                  <p className="text-gray-500 mb-8">Vul het formulier in en we nemen zo snel mogelijk contact met je op.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Volledige naam *
                        </label>
                        <input
                          type="text"
                          id="name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="Je volledige naam"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefoonnummer *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="06 12345678"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="jouw.email@voorbeeld.nl"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                          Bericht <span className="text-gray-400 font-normal">(optioneel)</span>
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                          placeholder="Heb je vragen of opmerkingen? Laat het ons weten..."
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-8 py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                    >
                      Verstuur aanmelding
                    </button>

                    <p className="text-center text-gray-400 text-sm mt-4">
                      We reageren binnen 24 uur op werkdagen
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
