'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Aanmelden() {
  const [formData, setFormData] = useState({
    naam: '',
    email: '',
    telefoon: '',
    geboortedatum: '',
    adres: '',
    postcode: '',
    plaats: '',
    pakket: '',
    startDatum: '',
    betaalwijze: '',
    opmerkingen: '',
    akkoord: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
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
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Welkom bij Drive Young!</h1>
            <p className="text-gray-600 mb-8">
              Bedankt voor je aanmelding, {formData.naam.split(' ')[0]}! We nemen binnen 24 uur contact met je op om alles te bespreken en je eerste les in te plannen.
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
          src="/ChatGPT Image 25 dec 2025, 12_12_50.png"
          alt="Drive Young aanmelden"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Aanmelden</span> bij Drive Young
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Zet de eerste stap naar je rijbewijs. Vul het aanmeldformulier in en we nemen snel contact met je op.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Persoonlijke Gegevens
                </h2>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">Geboortedatum *</label>
                    <input
                      type="date"
                      name="geboortedatum"
                      required
                      value={formData.geboortedatum}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
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
              </div>

              {/* Address */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Adresgegevens
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Straat en Huisnummer *</label>
                    <input
                      type="text"
                      name="adres"
                      required
                      value={formData.adres}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Voorbeeldstraat 123"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Postcode *</label>
                    <input
                      type="text"
                      name="postcode"
                      required
                      value={formData.postcode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="1234 AB"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Plaats *</label>
                    <input
                      type="text"
                      name="plaats"
                      required
                      value={formData.plaats}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                      placeholder="Amsterdam"
                    />
                  </div>
                </div>
              </div>

              {/* Package Selection */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Pakket Keuze
                </h2>
                <div className="space-y-4">
                  <label className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="radio"
                      name="pakket"
                      value="basis"
                      checked={formData.pakket === 'basis'}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Basis - 10 Lessen</div>
                      <div className="text-gray-500 text-sm">Perfect voor wie al enige rijervaring heeft</div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">&euro;499</div>
                  </label>

                  <label className="flex items-center p-4 bg-blue-50 rounded-xl cursor-pointer hover:bg-blue-100 transition-colors border-2 border-blue-200">
                    <input
                      type="radio"
                      name="pakket"
                      value="voordeel"
                      checked={formData.pakket === 'voordeel'}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Voordeel - 25 Lessen <span className="text-blue-600 text-xs ml-2">POPULAIR</span></div>
                      <div className="text-gray-500 text-sm">Inclusief TTT en praktijkexamen</div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">&euro;1.149</div>
                  </label>

                  <label className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="radio"
                      name="pakket"
                      value="compleet"
                      checked={formData.pakket === 'compleet'}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Compleet - 40 Lessen</div>
                      <div className="text-gray-500 text-sm">Inclusief herexamen garantie</div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">&euro;1.799</div>
                  </label>

                  <label className="flex items-center p-4 bg-gray-50 rounded-xl cursor-pointer hover:bg-gray-100 transition-colors">
                    <input
                      type="radio"
                      name="pakket"
                      value="losse-lessen"
                      checked={formData.pakket === 'losse-lessen'}
                      onChange={handleChange}
                      className="w-5 h-5 text-blue-600"
                    />
                    <div className="ml-4 flex-1">
                      <div className="font-semibold text-gray-900">Losse Lessen</div>
                      <div className="text-gray-500 text-sm">Betaal per les</div>
                    </div>
                    <div className="text-xl font-bold text-blue-600">&euro;52,50/les</div>
                  </label>
                </div>
              </div>

              {/* Additional Info */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  Aanvullende Informatie
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gewenste Startdatum</label>
                    <input
                      type="date"
                      name="startDatum"
                      value={formData.startDatum}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Betaalwijze</label>
                    <select
                      name="betaalwijze"
                      value={formData.betaalwijze}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
                    >
                      <option value="">Selecteer een optie</option>
                      <option value="ineens">In één keer</option>
                      <option value="2-termijnen">In 2 termijnen</option>
                      <option value="3-termijnen">In 3 termijnen</option>
                      <option value="per-les">Per les</option>
                    </select>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Opmerkingen</label>
                  <textarea
                    name="opmerkingen"
                    rows={4}
                    value={formData.opmerkingen}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none resize-none"
                    placeholder="Heb je al rijervaring? Bijzonderheden? Laat het ons weten..."
                  ></textarea>
                </div>
              </div>

              {/* Agreement */}
              <div className="bg-gray-50 rounded-xl p-6">
                <label className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="akkoord"
                    required
                    checked={formData.akkoord}
                    onChange={handleChange}
                    className="w-5 h-5 text-blue-600 mt-0.5 rounded"
                  />
                  <span className="text-gray-600 text-sm">
                    Ik ga akkoord met de <Link href="#" className="text-blue-600 hover:underline">algemene voorwaarden</Link> en het <Link href="#" className="text-blue-600 hover:underline">privacybeleid</Link> van Drive Young Rijschool. *
                  </span>
                </label>
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
                  'Aanmelding Voltooien'
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Vragen over aanmelden? Bel ons op{' '}
              <a href="tel:+31612345678" className="text-blue-600 font-semibold hover:underline">
                +31 6 12345678
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
