'use client';

import { useState } from 'react';

export default function ProeflesSection() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: 'auto',
    preferredTimes: '',
    notes: '',
    agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeTerms) {
      alert('Je moet akkoord gaan met de algemene voorwaarden.');
      return;
    }
    console.log('Proefles aanvraag:', formData);
    alert('Bedankt voor je aanvraag! We nemen zo snel mogelijk contact met je op.');
    setShowForm(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      category: 'auto',
      preferredTimes: '',
      notes: '',
      agreeTerms: false,
    });
  };

  return (
    <section className="py-12 sm:py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-3xl"></div>
      </div>

      {/* Road decoration */}
      <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 400" fill="none" className="h-full w-full">
          <path
            d="M100 400 C100 350 50 300 70 250 C90 200 150 180 130 130 C110 80 80 50 100 0"
            stroke="white"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {!showForm ? (
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-full mb-6 sm:mb-8">
              <svg className="w-7 h-7 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
              Start met een <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-cyan-100">gratis</span> proefles
            </h2>

            <p className="text-base sm:text-xl text-blue-100 max-w-2xl mx-auto mb-8 sm:mb-10 px-4">
              Ervaar zelf hoe het is om les te krijgen bij Drive Young.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
              <button
                onClick={() => setShowForm(true)}
                className="group px-8 sm:px-10 py-4 sm:py-5 bg-white text-blue-700 font-bold text-sm sm:text-lg rounded-full hover:bg-blue-50 transition-all duration-300 shadow-2xl shadow-black/20 flex items-center gap-2 sm:gap-3"
              >
                Vraag proefles aan
                <svg className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6 max-w-3xl mx-auto px-4">
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-blue-100 text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>60 minuten rijles</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-blue-100 text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Gratis ophalen</span>
              </div>
              <div className="flex items-center justify-center gap-2 sm:gap-3 text-blue-100 text-sm sm:text-base">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>Geen verplichtingen</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              <div className="grid lg:grid-cols-5">
                {/* Form - Left Side */}
                <div className="lg:col-span-3 p-8 lg:p-10">
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-500 hover:text-gray-700 text-sm font-medium flex items-center transition-colors mb-6"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    Terug
                  </button>

                  <h4 className="text-2xl font-bold text-gray-900 mb-2">Vraag gratis proefles aan</h4>
                  <p className="text-gray-500 mb-8">Vul je gegevens in en we plannen samen je proefles.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="proefles-name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Naam *
                        </label>
                        <input
                          type="text"
                          id="proefles-name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="Je volledige naam"
                        />
                      </div>

                      <div>
                        <label htmlFor="proefles-phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Telefoon *
                        </label>
                        <input
                          type="tel"
                          id="proefles-phone"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="06 12345678"
                        />
                      </div>

                      <div>
                        <label htmlFor="proefles-email" className="block text-sm font-semibold text-gray-700 mb-2">
                          E-mailadres *
                        </label>
                        <input
                          type="email"
                          id="proefles-email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="jouw.email@voorbeeld.nl"
                        />
                      </div>

                      <div>
                        <label htmlFor="proefles-category" className="block text-sm font-semibold text-gray-700 mb-2">
                          Categorie *
                        </label>
                        <select
                          id="proefles-category"
                          required
                          value={formData.category}
                          onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 bg-white"
                        >
                          <option value="auto">Auto</option>
                          <option value="motor">Motor</option>
                          <option value="overig">Overig</option>
                        </select>
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="proefles-times" className="block text-sm font-semibold text-gray-700 mb-2">
                          Voorkeur momenten *
                        </label>
                        <input
                          type="text"
                          id="proefles-times"
                          required
                          value={formData.preferredTimes}
                          onChange={(e) => setFormData({ ...formData, preferredTimes: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400"
                          placeholder="Bijv. doordeweeks na 17:00 of zaterdagochtend"
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label htmlFor="proefles-notes" className="block text-sm font-semibold text-gray-700 mb-2">
                          Opmerkingen <span className="text-gray-400 font-normal">(optioneel)</span>
                        </label>
                        <textarea
                          id="proefles-notes"
                          rows={3}
                          value={formData.notes}
                          onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-0 transition-colors text-gray-900 placeholder-gray-400 resize-none"
                          placeholder="Bijzondere aandachtspunten, eerdere ervaring..."
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label className="flex items-start gap-3 cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formData.agreeTerms}
                            onChange={(e) => setFormData({ ...formData, agreeTerms: e.target.checked })}
                            className="w-5 h-5 mt-0.5 rounded border-2 border-gray-300 text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-600">
                            Ik ga akkoord met de <a href="/voorwaarden" className="text-blue-600 hover:underline">algemene voorwaarden</a> en begrijp dat mijn gegevens worden gebruikt voor het inplannen van de proefles. *
                          </span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full mt-8 py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/25"
                    >
                      Verstuur aanvraag
                    </button>
                  </form>
                </div>

                {/* Contact Info - Right Side */}
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

                    {/* What's included in proefles */}
                    <div className="mt-8 pt-6 border-t border-blue-500/30">
                      <p className="text-blue-200 text-sm mb-3">Wat krijg je bij de proefles?</p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-white text-sm">
                          <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          60 minuten rijles
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Gratis ophalen
                        </li>
                        <li className="flex items-center gap-2 text-white text-sm">
                          <svg className="w-4 h-4 text-cyan-300" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          Geen verplichtingen
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
