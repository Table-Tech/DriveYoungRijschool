import Link from 'next/link';
import Image from 'next/image';

export default function Geslaagden() {
  const geslaagden = [
    { naam: 'Sophie K.', datum: 'December 2024', quote: 'Super fijne rijschool! In één keer geslaagd!', initialen: 'SK' },
    { naam: 'Mohammed V.', datum: 'December 2024', quote: 'Flexibele lestijden, perfect naast mijn studie.', initialen: 'MV' },
    { naam: 'Lisa B.', datum: 'November 2024', quote: 'Eindelijk een rijschool waar ik me op mijn gemak voelde.', initialen: 'LB' },
    { naam: 'Tim H.', datum: 'November 2024', quote: 'Duidelijke uitleg en veel geduld. Aanrader!', initialen: 'TH' },
    { naam: 'Emma J.', datum: 'Oktober 2024', quote: 'Dankzij Drive Young heb ik nu mijn vrijheid!', initialen: 'EJ' },
    { naam: 'Kevin M.', datum: 'Oktober 2024', quote: 'Top instructeur, eerste keer geslaagd!', initialen: 'KM' },
    { naam: 'Naomi R.', datum: 'September 2024', quote: 'Ik durfde niet te rijden, nu voel ik me zeker.', initialen: 'NR' },
    { naam: 'Jesse D.', datum: 'September 2024', quote: 'Beste keuze die ik kon maken!', initialen: 'JD' },
    { naam: 'Sara O.', datum: 'Augustus 2024', quote: 'Sneller geslaagd dan verwacht!', initialen: 'SO' },
    { naam: 'Thomas P.', datum: 'Augustus 2024', quote: 'Professioneel en vriendelijk team.', initialen: 'TP' },
    { naam: 'Amber W.', datum: 'Juli 2024', quote: 'Na mijn herexamen hier wel geslaagd!', initialen: 'AW' },
    { naam: 'Lars V.', datum: 'Juli 2024', quote: 'Goede voorbereiding op het examen.', initialen: 'LV' },
  ];

  const stats = [
    { number: '500+', label: 'Geslaagde Leerlingen' },
    { number: '95%', label: 'Slagingspercentage' },
    { number: '4.9', label: 'Gemiddelde Beoordeling' },
    { number: '10+', label: 'Jaar Ervaring' },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-56 pb-48 overflow-hidden">
        <Image
          src="/ChatGPT Image 25 dec 2025, 11_53_13.png"
          alt="Drive Young geslaagden"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Onze <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Geslaagden</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Trots op al onze leerlingen die met succes hun rijbewijs hebben gehaald. Jij kunt de volgende zijn!
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Onze <span className="text-blue-600">Trotse Leerlingen</span>
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_31_27.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_28_38.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/ChatGPT Image 25 dec 2025, 11_25_12.png"
                alt="Geslaagde leerling"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg group">
              <Image
                src="/Geslaagd voor je rijexamen!.png"
                alt="Geslaagd voor je rijexamen"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Wall of <span className="text-blue-600">Fame</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Enkele van onze geslaagde leerlingen en hun ervaringen.
            </p>
          </div>

          {/* Success Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {geslaagden.map((leerling, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center">
                    <span className="text-xl font-bold text-white">{leerling.initialen}</span>
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-gray-900">{leerling.naam}</div>
                    <div className="text-sm text-gray-500">{leerling.datum}</div>
                  </div>
                  <div className="ml-auto">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">&ldquo;{leerling.quote}&rdquo;</p>
              </div>
            ))}
          </div>

          {/* Photo Placeholder */}
          <div className="mt-16 bg-white rounded-3xl p-8 shadow-lg text-center">
            <div className="max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Geslaagd? Deel je foto!</h3>
              <p className="text-gray-600 mb-6">
                Ben je geslaagd bij Drive Young? Stuur ons je foto en we plaatsen je op onze Wall of Fame!
                Tag ons op Instagram @driveyoung of stuur je foto via WhatsApp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  Volg op Instagram
                </a>
                <a href="#" className="inline-flex items-center justify-center px-6 py-3 bg-green-500 text-white font-semibold rounded-full hover:bg-green-600 transition-colors">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="pt-24 pb-0 bg-gradient-to-b from-blue-600 via-blue-800 to-blue-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Word de volgende geslaagde!
          </h2>
          <p className="text-xl text-blue-100 mb-10">
            Start vandaag nog met je rijlessen en haal je rijbewijs met vertrouwen.
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
