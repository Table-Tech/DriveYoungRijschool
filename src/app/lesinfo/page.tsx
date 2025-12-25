import Link from 'next/link';
import Image from 'next/image';

export default function Lesinfo() {
  const lestijden = [
    { dag: 'Maandag', tijden: '08:00 - 21:00' },
    { dag: 'Dinsdag', tijden: '08:00 - 21:00' },
    { dag: 'Woensdag', tijden: '08:00 - 21:00' },
    { dag: 'Donderdag', tijden: '08:00 - 21:00' },
    { dag: 'Vrijdag', tijden: '08:00 - 21:00' },
    { dag: 'Zaterdag', tijden: '09:00 - 18:00' },
    { dag: 'Zondag', tijden: '10:00 - 17:00' },
  ];

  const locaties = [
    {
      naam: 'Rotterdam',
      gebieden: ['Centrum', 'Zuid', 'Noord', 'West', 'Kralingen', 'IJsselmonde'],
      examenlocatie: 'CBR Rotterdam',
    },
    {
      naam: 'Barendrecht',
      gebieden: ['Centrum', 'Carnisselande', 'Vrijheidsakker', 'Buitenoord'],
      examenlocatie: 'CBR Rotterdam',
    },
    {
      naam: 'Ridderkerk',
      gebieden: ['Centrum', 'Drievliet', 'Ridderkerk-West', 'Bolnes'],
      examenlocatie: 'CBR Rotterdam',
    },
    {
      naam: 'Rhoon',
      gebieden: ['Centrum', 'Portland', 'Rhoon-Zuid'],
      examenlocatie: 'CBR Rotterdam',
    },
  ];

  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative pt-64 pb-56 overflow-hidden">
        <Image
          src="/ChatGPT Image 25 dec 2025, 11_44_29.png"
          alt="Drive Young rijlessen locaties"
          fill
          className="object-cover object-[center_40%]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/70 via-blue-800/60 to-blue-900/80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            Lestijden & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-300">Locaties</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto drop-shadow">
            Flexibele lestijden die passen in jouw schema. Wij rijden 7 dagen per week in Rotterdam en omgeving.
          </p>
        </div>
      </section>

      {/* Lestijden Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Lestijden */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                <span className="text-blue-600">Les</span>tijden
              </h2>
              <p className="text-gray-600 mb-8">
                Wij bieden rijlessen aan op alle dagen van de week, zodat je altijd een moment kunt vinden dat bij je past.
              </p>

              <div className="bg-gray-50 rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-blue-600 text-white">
                      <th className="py-4 px-6 text-left font-semibold">Dag</th>
                      <th className="py-4 px-6 text-right font-semibold">Beschikbaar</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lestijden.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        <td className="py-4 px-6 font-medium text-gray-900">{item.dag}</td>
                        <td className="py-4 px-6 text-right text-gray-600">{item.tijden}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-blue-50 rounded-xl p-6">
                <h3 className="font-bold text-gray-900 mb-2">Flexibel Inplannen</h3>
                <p className="text-gray-600 text-sm">
                  Heb je een onregelmatig schema? Geen probleem! We stemmen de lestijden af op jouw beschikbaarheid.
                  Je kunt les per les inplannen of een vast schema afspreken.
                </p>
              </div>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Wat we <span className="text-blue-600">bieden</span>
              </h2>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Ophalen aan Huis</h3>
                    <p className="text-gray-600">
                      We halen je op en brengen je terug waar jij wilt. Thuis, werk, school of een andere locatie.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">60 Minuten Lessen</h3>
                    <p className="text-gray-600">
                      Elke les duurt 60 minuten, zodat je voldoende tijd hebt om te oefenen en te leren.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Makkelijk Afzeggen</h3>
                    <p className="text-gray-600">
                      Afzeggen kan tot 48 uur van tevoren kosteloos. Zo ben je altijd flexibel.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Voortgang Bijhouden</h3>
                    <p className="text-gray-600">
                      Na elke les bespreken we je voortgang. Je weet altijd waar je staat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locaties Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Les<span className="text-blue-600">locaties</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Wij geven rijles in Rotterdam en de directe omgeving.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locaties.map((locatie, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg card-hover">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{locatie.naam}</h3>
                <div className="space-y-1 mb-4">
                  {locatie.gebieden.map((gebied, i) => (
                    <span key={i} className="inline-block bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded mr-1 mb-1">
                      {gebied}
                    </span>
                  ))}
                </div>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-sm text-gray-500">
                    <span className="font-medium">Examen:</span> {locatie.examenlocatie}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Google Maps */}
          <div className="mt-16 bg-white rounded-3xl p-4 shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78368.54661828848!2d4.3842893!3d51.8566927!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c4333e3c1c3c3d%3A0x2a760a9c2e5c1f0!2sRhoon!5e0!3m2!1snl!2snl!4v1703505600000!5m2!1snl!2snl"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Lesauto Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Onze <span className="text-blue-600">Lesauto</span>
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Wij rijden in moderne, goed onderhouden lesauto&apos;s met de nieuwste veiligheidsvoorzieningen.
                Onze auto&apos;s zijn voorzien van dubbele bediening voor maximale veiligheid.
              </p>

              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Moderne auto met dubbele bediening</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Airconditioning voor comfort</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Schakelbak (handgeschakeld)</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Nieuwste veiligheidsvoorzieningen</span>
                </li>
                <li className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700">Altijd schoon en verzorgd</span>
                </li>
              </ul>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-xl">
              <Image
                src="/ChatGPT Image 25 dec 2025, 12_41_17.png"
                alt="Drive Young lesauto"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
              />
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
            Plan vandaag nog je eerste les en begin je weg naar je rijbewijs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/proefles" className="btn-white text-lg px-10 py-4">
              Gratis Proefles
            </Link>
            <Link href="/contact" className="inline-block px-10 py-4 text-lg font-semibold text-white border-2 border-white rounded-full hover:bg-white hover:text-blue-800 transition-all">
              Neem Contact Op
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
