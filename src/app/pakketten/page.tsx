import Link from 'next/link';
import Image from 'next/image';

export default function Pakketten() {
  const packages = [
    {
      name: 'Basis',
      title: '10 Lessen Pakket',
      price: 499,
      pricePerLesson: 49.90,
      description: 'Perfect voor wie al enige rijervaring heeft of compact wil starten.',
      features: [
        '10 rijlessen van 60 minuten',
        'Gratis ophalen en wegbrengen',
        'Theorie ondersteuning',
        'Voortgangsrapportage',
        'Flexibel inplannen',
      ],
      notIncluded: [
        'Tussentijdse toets (TTT)',
        'Praktijkexamen',
        'Theorie app',
      ],
      popular: false,
      color: 'gray',
    },
    {
      name: 'Voordeel',
      title: '25 Lessen Pakket',
      price: 1149,
      pricePerLesson: 45.96,
      description: 'Ons meest gekozen pakket. Alles wat je nodig hebt om te slagen.',
      features: [
        '25 rijlessen van 60 minuten',
        'Gratis ophalen en wegbrengen',
        'Tussentijdse toets (TTT) inbegrepen',
        'Praktijkexamen inbegrepen',
        'Theorie app toegang',
        'Voortgangsrapportage',
        'Persoonlijk leerplan',
      ],
      notIncluded: [
        'Herexamen garantie',
      ],
      popular: true,
      color: 'blue',
    },
    {
      name: 'Compleet',
      title: '40 Lessen Pakket',
      price: 1799,
      pricePerLesson: 44.98,
      description: 'Voor wie extra zeker wil zijn. Inclusief herexamen garantie.',
      features: [
        '40 rijlessen van 60 minuten',
        'Gratis ophalen en wegbrengen',
        'Tussentijdse toets (TTT) inbegrepen',
        'Praktijkexamen inbegrepen',
        'Herexamen garantie (1x)',
        'Theorie app toegang',
        'Voortgangsrapportage',
        'Persoonlijk leerplan',
        'Priority planning',
      ],
      notIncluded: [],
      popular: false,
      color: 'gray',
    },
  ];

  const addons = [
    {
      name: 'Extra Rijles',
      price: 52.50,
      description: 'Per les van 60 minuten',
    },
    {
      name: 'Tussentijdse Toets (TTT)',
      price: 195,
      description: 'Inclusief voorbereiding en begeleiding',
    },
    {
      name: 'Praktijkexamen',
      price: 250,
      description: 'Inclusief gebruik lesauto en begeleiding',
    },
    {
      name: 'Herexamen',
      price: 275,
      description: 'Inclusief 2 extra oefenlessen',
    },
    {
      name: 'Theorie App',
      price: 29,
      description: '6 maanden onbeperkt toegang',
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-56 pb-48 overflow-hidden">
        <Image
          src="/ChatGPT Image 25 dec 2025, 11_39_22.png"
          alt="Drive Young rijlessen"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Lespakketten</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Kies het pakket dat bij jou past. Alle pakketten inclusief gratis ophalen en persoonlijke begeleiding.
          </p>
        </div>
      </section>

      {/* Packages Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 card-hover relative ${
                  pkg.popular
                    ? 'bg-gradient-to-br from-blue-600 to-blue-800 transform scale-105 shadow-2xl'
                    : 'bg-gray-50 border-2 border-transparent hover:border-blue-200'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-cyan-400 text-blue-900 font-bold px-4 py-1 rounded-full text-sm">
                    Meest Gekozen
                  </div>
                )}

                <div className={`font-semibold mb-2 ${pkg.popular ? 'text-blue-200' : 'text-blue-600'}`}>
                  {pkg.name}
                </div>

                <h3 className={`text-2xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  {pkg.title}
                </h3>

                <p className={`text-sm mb-4 ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  {pkg.description}
                </p>

                <div className={`text-4xl font-bold mb-2 ${pkg.popular ? 'text-white' : 'text-gray-900'}`}>
                  &euro;{pkg.price}
                </div>

                <div className={`text-sm mb-6 ${pkg.popular ? 'text-blue-200' : 'text-gray-500'}`}>
                  &euro;{pkg.pricePerLesson.toFixed(2)} per les
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className={pkg.popular ? 'text-white' : 'text-gray-600'}>{feature}</span>
                    </li>
                  ))}
                  {pkg.notIncluded.map((feature, i) => (
                    <li key={i} className="flex items-start space-x-3 opacity-50">
                      <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${pkg.popular ? 'text-blue-300' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className={pkg.popular ? 'text-blue-200' : 'text-gray-400'}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/aanmelden"
                  className={`block w-full text-center py-3 rounded-full font-semibold transition-all ${
                    pkg.popular
                      ? 'bg-white text-blue-800 hover:bg-blue-50'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  Kies Dit Pakket
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Losse <span className="text-blue-600">Opties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Voeg extra lessen of diensten toe aan je pakket.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-gray-900">{addon.name}</h3>
                  <div className="text-2xl font-bold text-blue-600">&euro;{addon.price}</div>
                </div>
                <p className="text-gray-600 text-sm">{addon.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pakketten <span className="text-blue-600">Vergelijken</span>
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-4 px-4 font-semibold text-gray-900">Onderdeel</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Basis</th>
                  <th className="text-center py-4 px-4 font-semibold text-blue-600 bg-blue-50 rounded-t-lg">Voordeel</th>
                  <th className="text-center py-4 px-4 font-semibold text-gray-900">Compleet</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Aantal lessen</td>
                  <td className="py-4 px-4 text-center text-gray-900 font-medium">10</td>
                  <td className="py-4 px-4 text-center text-gray-900 font-medium bg-blue-50">25</td>
                  <td className="py-4 px-4 text-center text-gray-900 font-medium">40</td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Ophalen & wegbrengen</td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                  <td className="py-4 px-4 text-center bg-blue-50"><span className="text-green-600">&#10003;</span></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Tussentijdse Toets</td>
                  <td className="py-4 px-4 text-center"><span className="text-red-500">&#10007;</span></td>
                  <td className="py-4 px-4 text-center bg-blue-50"><span className="text-green-600">&#10003;</span></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Praktijkexamen</td>
                  <td className="py-4 px-4 text-center"><span className="text-red-500">&#10007;</span></td>
                  <td className="py-4 px-4 text-center bg-blue-50"><span className="text-green-600">&#10003;</span></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Theorie App</td>
                  <td className="py-4 px-4 text-center"><span className="text-red-500">&#10007;</span></td>
                  <td className="py-4 px-4 text-center bg-blue-50"><span className="text-green-600">&#10003;</span></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                </tr>
                <tr className="border-b border-gray-100">
                  <td className="py-4 px-4 text-gray-600">Herexamen garantie</td>
                  <td className="py-4 px-4 text-center"><span className="text-red-500">&#10007;</span></td>
                  <td className="py-4 px-4 text-center bg-blue-50"><span className="text-red-500">&#10007;</span></td>
                  <td className="py-4 px-4 text-center"><span className="text-green-600">&#10003;</span></td>
                </tr>
                <tr>
                  <td className="py-4 px-4 text-gray-900 font-bold">Totaalprijs</td>
                  <td className="py-4 px-4 text-center text-gray-900 font-bold">&euro;499</td>
                  <td className="py-4 px-4 text-center text-blue-600 font-bold bg-blue-50 rounded-b-lg">&euro;1.149</td>
                  <td className="py-4 px-4 text-center text-gray-900 font-bold">&euro;1.799</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Hulp nodig bij het kiezen?
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Vraag een gratis proefles aan en we adviseren je welk pakket het beste bij jou past.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proefles" className="btn-white text-lg px-10 py-4">
              Gratis Proefles Aanvragen
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center px-10 py-4 text-white font-semibold hover:text-blue-200 transition-colors">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Bel voor Advies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
