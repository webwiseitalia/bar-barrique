import { useState, useEffect } from 'react'

// Import logo
import logo from './assets/logobarique+.webp'

// Import photos
import foto1 from './assets/foto/foto-1.webp'
import foto2 from './assets/foto/foto-2.webp'
import foto3 from './assets/foto/foto-3.webp'
import foto4 from './assets/foto/foto-4.webp'
import foto5 from './assets/foto/foto-5.webp'
import foto6 from './assets/foto/foto-6.webp'
import foto7 from './assets/foto/foto-7.webp'
import foto8 from './assets/foto/foto-8.webp'
import foto9 from './assets/foto/foto-9.webp'
import foto10 from './assets/foto/foto-10.webp'
import foto11 from './assets/foto/foto-11.webp'
import foto12 from './assets/foto/foto-12.webp'
import foto13 from './assets/foto/foto-13.webp'
import foto14 from './assets/foto/foto-14.webp'
import foto15 from './assets/foto/foto-15.webp'
import foto16 from './assets/foto/foto-16.webp'
import foto17 from './assets/foto/foto-17.webp'
import foto18 from './assets/foto/foto-18.webp'
import foto19 from './assets/foto/foto-19.webp'
import foto20 from './assets/foto/foto-20.webp'
import foto21 from './assets/foto/foto-21.webp'
import foto22 from './assets/foto/foto-22.webp'
import foto23 from './assets/foto/foto-23.webp'
import foto24 from './assets/foto/foto-24.webp'
import foto25 from './assets/foto/foto-25.webp'
import foto26 from './assets/foto/foto-26.webp'

function App() {
  const [currentReview, setCurrentReview] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const reviews = [
    {
      text: "Il personale è sorridente e cordiale, sempre. Il posto molto carino e curato e gli aperitivi e colazioni soddisfacenti. Locale super consigliato.",
      author: "Cliente Google",
      rating: 5
    },
    {
      text: "Panini ineguagliabili e ottime birre. Atmosfera accogliente, personale simpatico.",
      author: "Cliente Google",
      rating: 5
    },
    {
      text: "Ottimo wine bar con selezione di vini valtellinesi eccezionale. Gli hamburger sono fantastici!",
      author: "Cliente Facebook",
      rating: 5
    },
    {
      text: "Perfetto per un aperitivo dopo una giornata sulle piste. Taglieri abbondanti e vino eccellente.",
      author: "Cliente Google",
      rating: 5
    }
  ]

  const galleryImages = [
    { src: foto5, alt: "Interno del locale" },
    { src: foto6, alt: "Sala principale" },
    { src: foto8, alt: "Bancone bar" },
    { src: foto3, alt: "Botte con vini" },
    { src: foto10, alt: "Hamburger gourmet" },
    { src: foto25, alt: "Hamburger con bacon" },
    { src: foto15, alt: "Tagliere salumi" },
    { src: foto18, alt: "Tagliere formaggi" },
    { src: foto12, alt: "Selezione gin" },
    { src: foto20, alt: "Tavola apparecchiata" },
    { src: foto2, alt: "Quadro montagna" },
    { src: foto1, alt: "Vista invernale" },
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [reviews.length])

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-stone-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-900/95 backdrop-blur-sm border-b border-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            <img src={logo} alt="Barrique - Gusto diVino" className="h-12 md:h-16 w-auto" />

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('chi-siamo')} className="text-stone-300 hover:text-amber-400 transition-colors">Chi Siamo</button>
              <button onClick={() => scrollToSection('offerta')} className="text-stone-300 hover:text-amber-400 transition-colors">Offerta</button>
              <button onClick={() => scrollToSection('galleria')} className="text-stone-300 hover:text-amber-400 transition-colors">Galleria</button>
              <button onClick={() => scrollToSection('contatti')} className="text-stone-300 hover:text-amber-400 transition-colors">Contatti</button>
              <a href="tel:+393922426291" className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Chiamaci
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-stone-300 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-stone-800">
              <div className="flex flex-col gap-4">
                <button onClick={() => scrollToSection('chi-siamo')} className="text-stone-300 hover:text-amber-400 transition-colors text-left">Chi Siamo</button>
                <button onClick={() => scrollToSection('offerta')} className="text-stone-300 hover:text-amber-400 transition-colors text-left">Offerta</button>
                <button onClick={() => scrollToSection('galleria')} className="text-stone-300 hover:text-amber-400 transition-colors text-left">Galleria</button>
                <button onClick={() => scrollToSection('contatti')} className="text-stone-300 hover:text-amber-400 transition-colors text-left">Contatti</button>
                <a href="tel:+393922426291" className="bg-amber-700 hover:bg-amber-600 text-white px-4 py-3 rounded-lg transition-colors flex items-center justify-center gap-2 mt-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  Chiamaci Ora
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${foto6})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-900/80 via-stone-900/60 to-stone-900" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <img src={logo} alt="Barrique - Gusto diVino" className="h-32 md:h-48 w-auto mx-auto mb-8" />
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Vino, gusto e passione<br />
            <span className="text-amber-400">nel cuore di Aprica</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
            Wine bar, birre artigianali e comfort food a 1.181m di altitudine.
            Il tuo rifugio dopo una giornata sulle piste.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+393922426291"
              className="bg-amber-700 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-medium transition-colors flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              +39 392 242 6291
            </a>
            <button
              onClick={() => scrollToSection('offerta')}
              className="border-2 border-stone-400 hover:border-amber-400 text-stone-200 hover:text-amber-400 px-8 py-4 rounded-lg text-lg font-medium transition-colors"
            >
              Scopri il Menu
            </button>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-8 h-8 text-stone-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Chi Siamo Section */}
      <section id="chi-siamo" className="py-20 md:py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
                Benvenuti da <span className="text-amber-400">Barrique</span>
              </h2>
              <p className="text-stone-300 text-lg mb-6 leading-relaxed">
                Nel cuore di Aprica, su Corso Roma, Barrique è il punto di ritrovo per chi cerca
                un'atmosfera calda e accogliente. Le nostre pareti in legno e pietra creano l'ambiente
                perfetto per rilassarsi dopo una giornata sulle piste o durante una passeggiata estiva.
              </p>
              <p className="text-stone-300 text-lg mb-8 leading-relaxed">
                Siamo appassionati di vini valtellinesi - dallo Sforzato all'Inferno, dalla Sassella
                alle nostre selezioni speciali - ma anche di birre artigianali, cocktail e
                caffetteria di qualità. E per accompagnare il tutto? Hamburger gourmet e taglieri
                di salumi e formaggi del territorio.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-stone-300">Vini Valtellinesi</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-stone-300">Birre Artigianali</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-stone-300">Sky Bar</span>
                </div>
                <div className="flex items-center gap-2 text-amber-400">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                  <span className="text-stone-300">Wi-Fi Gratuito</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src={foto5} alt="Interno Barrique" className="rounded-2xl w-full h-48 md:h-64 object-cover" />
              <img src={foto3} alt="Botte con vini" className="rounded-2xl w-full h-48 md:h-64 object-cover mt-8" />
              <img src={foto8} alt="Area bar" className="rounded-2xl w-full h-48 md:h-64 object-cover" />
              <img src={foto2} alt="Dettaglio montagna" className="rounded-2xl w-full h-48 md:h-64 object-cover mt-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Offerta Section */}
      <section id="offerta" className="py-20 md:py-32 bg-stone-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              La Nostra <span className="text-amber-400">Offerta</span>
            </h2>
            <p className="text-stone-400 text-lg max-w-2xl mx-auto">
              Dal vino ai cocktail, dagli hamburger ai taglieri: tutto quello che serve per un momento perfetto
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Wine Card */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src={foto20} alt="Selezione vini" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Vini Valtellinesi</h3>
                <p className="text-stone-400">Sforzato, Inferno, Sassella e le migliori etichette del territorio</p>
              </div>
            </div>

            {/* Food Card */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src={foto10} alt="Hamburger gourmet" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Hamburger & Panini</h3>
                <p className="text-stone-400">Hamburger gourmet e panini preparati con ingredienti di qualità</p>
              </div>
            </div>

            {/* Taglieri Card */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src={foto15} alt="Taglieri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Taglieri Valtellinesi</h3>
                <p className="text-stone-400">Salumi e formaggi locali per accompagnare il tuo calice</p>
              </div>
            </div>

            {/* Sky Bar Card */}
            <div className="bg-stone-900 rounded-2xl overflow-hidden group">
              <div className="h-48 overflow-hidden">
                <img src={foto8} alt="Sky Bar" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Sky Bar</h3>
                <p className="text-stone-400">Partite di calcio in diretta su maxischermo</p>
              </div>
            </div>
          </div>

          {/* Drinks highlight */}
          <div className="mt-12 bg-stone-900 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-serif text-white mb-4">Cocktail & Birre Artigianali</h3>
                <p className="text-stone-400 mb-6">
                  Non solo vino: la nostra selezione include cocktail creativi,
                  gin premium e birre artigianali. Perfetti per un aperitivo
                  o per prolungare la serata in compagnia.
                </p>
                <div className="flex items-center gap-4 text-stone-300">
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Aperitivi
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Cocktail
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                    Caffetteria
                  </span>
                </div>
              </div>
              <img src={foto12} alt="Cocktail e gin" className="rounded-xl w-full h-64 object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="galleria" className="py-20 md:py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              La Nostra <span className="text-amber-400">Galleria</span>
            </h2>
            <p className="text-stone-400 text-lg">
              Scorri le immagini per scoprire l'atmosfera del Barrique
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-xl cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}

      {/* Reviews Section */}
      <section className="py-20 md:py-32 bg-stone-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Cosa Dicono di <span className="text-amber-400">Noi</span>
            </h2>
            <div className="flex items-center justify-center gap-4 text-stone-400">
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">4.3</span>
                <span>/5 Google</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-2">
                <span className="text-amber-400 font-bold">4.5</span>
                <span>/5 Facebook</span>
              </div>
            </div>
          </div>

          <div className="relative bg-stone-900 rounded-2xl p-8 md:p-12">
            <svg className="absolute top-6 left-6 w-12 h-12 text-amber-700/30" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <svg key={i} className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-xl md:text-2xl text-stone-200 italic mb-6 leading-relaxed">
                "{reviews[currentReview].text}"
              </p>
              <p className="text-amber-400 font-medium">— {reviews[currentReview].author}</p>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentReview(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentReview ? 'bg-amber-400' : 'bg-stone-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contatti" className="py-20 md:py-32 bg-stone-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
              Vieni a <span className="text-amber-400">Trovarci</span>
            </h2>
            <p className="text-stone-400 text-lg">
              Ti aspettiamo nel cuore di Aprica, su Corso Roma
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Indirizzo</h3>
                  <p className="text-stone-400">Corso Roma 94, 23031 Aprica (SO)</p>
                  <p className="text-stone-500 text-sm">Valtellina - 1.181m s.l.m.</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Telefono & WhatsApp</h3>
                  <a href="tel:+393922426291" className="text-amber-400 hover:text-amber-300 text-lg font-medium">
                    +39 392 242 6291
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Orari di Apertura</h3>
                  <div className="space-y-1 text-stone-400">
                    <div className="flex justify-between gap-8">
                      <span className="text-red-400 font-medium">Lunedì</span>
                      <span className="text-red-400">Chiuso</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Martedì - Giovedì</span>
                      <span>08:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Venerdì</span>
                      <span>17:00 - 00:00</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span>Sabato - Domenica</span>
                      <span>08:00 - 00:00</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-amber-700/20 rounded-xl flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-2">Seguici</h3>
                  <div className="flex gap-4">
                    <a
                      href="https://www.instagram.com/barrique_aprica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a
                      href="https://www.facebook.com/PublicAprica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="bg-amber-700/20 border border-amber-700/30 rounded-xl p-6">
                <p className="text-stone-300 mb-4">
                  Hai domande o vuoi prenotare? Contattaci direttamente su WhatsApp!
                </p>
                <a
                  href="https://wa.me/393922426291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  Scrivici su WhatsApp
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.5!2d10.152!3d46.153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478500000000000%3A0x0!2sCorso%20Roma%2094%2C%2023031%20Aprica%20SO!5e0!3m2!1sit!2sit!4v1699999999999!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mappa Barrique Aprica"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-950 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <img src={logo} alt="Barrique" className="h-10 w-auto" />
            <p className="text-stone-500 text-sm text-center">
              © 2024 Barrique - Gusto diVino. Tutti i diritti riservati.
            </p>
            <div className="flex items-center gap-2 text-stone-500 text-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
              Aprica, Valtellina
            </div>
          </div>
        </div>
      </footer>

      {/* Fixed Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-stone-900 via-stone-900/95 to-transparent md:hidden z-40">
        <a
          href="tel:+393922426291"
          className="flex items-center justify-center gap-3 bg-amber-700 hover:bg-amber-600 text-white py-4 rounded-xl text-lg font-medium transition-colors w-full"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
          Chiamaci Ora
        </a>
      </div>
    </div>
  )
}

export default App
