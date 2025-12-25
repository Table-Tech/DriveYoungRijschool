import Link from 'next/link';

export default function Prijzen() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-600 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Transparante <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Prijzen</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Geen verborgen kosten. Wat je ziet is wat je betaalt.
          </p>
        </div>
      </section>

      {/* Main Pricing */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Rijlessen <span className="text-blue-600">Tarieven</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Alle prijzen zijn inclusief BTW en ophalen/wegbrengen.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Single Lesson */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Losse Les</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">&euro;52,50</div>
              <p className="text-gray-500 text-sm">per 60 minuten</p>
            </div>

            {/* 10 Lessons */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">10</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">10 Lessen</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">&euro;499</div>
              <p className="text-gray-500 text-sm">&euro;49,90 per les</p>
              <div className="mt-2 text-green-600 text-sm font-medium">Bespaar &euro;51</div>
            </div>

            {/* 25 Lessons */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl p-8 text-center card-hover relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-400 text-blue-900 text-xs font-bold px-3 py-1 rounded-full">
                POPULAIR
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">25</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">25 Lessen</h3>
              <div className="text-4xl font-bold text-white mb-2">&euro;1.149</div>
              <p className="text-blue-200 text-sm">&euro;45,96 per les</p>
              <div className="mt-2 text-cyan-400 text-sm font-medium">Bespaar &euro;226</div>
            </div>

            {/* 40 Lessons */}
            <div className="bg-gray-50 rounded-2xl p-8 text-center card-hover">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">40</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">40 Lessen</h3>
              <div className="text-4xl font-bold text-blue-600 mb-2">&euro;1.799</div>
              <p className="text-gray-500 text-sm">&euro;44,98 per les</p>
              <div className="mt-2 text-green-600 text-sm font-medium">Bespaar &euro;401</div>
            </div>
          </div>

          {/* Additional Services */}
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Overige Diensten</h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Proefles</h4>
                  <p className="text-gray-500 text-sm">60 minuten kennismaking</p>
                </div>
                <div className="text-2xl font-bold text-green-600">GRATIS</div>
              </div>

              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Tussentijdse Toets (TTT)</h4>
                  <p className="text-gray-500 text-sm">Inclusief voorbereiding</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">&euro;195</div>
              </div>

              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Praktijkexamen</h4>
                  <p className="text-gray-500 text-sm">Inclusief lesauto en begeleiding</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">&euro;250</div>
              </div>

              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Herexamen</h4>
                  <p className="text-gray-500 text-sm">Inclusief 2 extra oefenlessen</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">&euro;275</div>
              </div>

              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Theorie App</h4>
                  <p className="text-gray-500 text-sm">6 maanden onbeperkt toegang</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">&euro;29</div>
              </div>

              <div className="bg-white rounded-xl p-6 flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-gray-900">Faalangst Training</h4>
                  <p className="text-gray-500 text-sm">3 sessies met specialist</p>
                </div>
                <div className="text-2xl font-bold text-blue-600">&euro;149</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Options */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexibele <span className="text-blue-600">Betalingsopties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wij maken het makkelijk voor je om je rijbewijs te halen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">iDEAL</h3>
              <p className="text-gray-600">
                Betaal veilig en direct via je eigen bank met iDEAL.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">In Termijnen</h3>
              <p className="text-gray-600">
                Betaal je pakket in 2 of 3 termijnen zonder extra kosten.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg card-hover text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Per Les</h3>
              <p className="text-gray-600">
                Liever per les betalen? Dat kan, je betaalt dan na elke les.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veelgestelde <span className="text-blue-600">Vragen</span>
            </h2>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Zijn er verborgen kosten?</h3>
              <p className="text-gray-600">
                Nee, alle genoemde prijzen zijn inclusief BTW, ophalen en wegbrengen. Er komen geen extra kosten bij.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Kan ik mijn pakket upgraden?</h3>
              <p className="text-gray-600">
                Ja, je kunt altijd extra lessen bijkopen of upgraden naar een groter pakket. Het verschil wordt verrekend.
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Wat als ik eerder klaar ben dan verwacht?</h3>
              <p className="text-gray-600">
                Overgebleven lessen kun je gebruiken voor extra oefening of krijg je terugbetaald (minus administratiekosten).
              </p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Moet ik vooruit betalen?</h3>
              <p className="text-gray-600">
                Voor pakketten betaal je (een deel) vooraf. Je kunt ook kiezen om per les te betalen tegen het losse lestarief.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-0 bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Klaar om te starten?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Begin met een gratis proefles en ontdek welk pakket bij jou past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proefles" className="btn-white text-lg px-10 py-4">
              Gratis Proefles
            </Link>
            <Link href="/aanmelden" className="inline-block px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-800 transition-all">
              Direct Aanmelden
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
