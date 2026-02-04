import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from '@studio-freight/lenis'
import { motion, AnimatePresence } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

import logo from './assets/logobarique+.webp'
import foto1 from './assets/foto/foto-1.webp'
import foto2 from './assets/foto/foto-2.webp'
import foto3 from './assets/foto/foto-3.webp'
import foto5 from './assets/foto/foto-5.webp'
import foto6 from './assets/foto/foto-6.webp'
import foto8 from './assets/foto/foto-8.webp'
import foto10 from './assets/foto/foto-10.webp'
import foto12 from './assets/foto/foto-12.webp'
import foto15 from './assets/foto/foto-15.webp'
import foto18 from './assets/foto/foto-18.webp'
import foto20 from './assets/foto/foto-20.webp'
import foto22 from './assets/foto/foto-22.webp'
import foto25 from './assets/foto/foto-25.webp'

function App() {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentReview, setCurrentReview] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

  const lenisRef = useRef(null)
  const heroRef = useRef(null)
  const marqueeRef = useRef(null)

  const reviews = [
    { text: "Il personale è sorridente e cordiale, sempre. Il posto molto carino e curato.", author: "Google Review" },
    { text: "Panini ineguagliabili e ottime birre. Atmosfera accogliente.", author: "Google Review" },
    { text: "Perfetto per un aperitivo dopo le piste. Taglieri abbondanti e vino eccellente.", author: "Facebook Review" },
  ]

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    lenisRef.current = lenis
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    // Marquee
    if (marqueeRef.current) {
      gsap.to(marqueeRef.current, {
        xPercent: -50,
        repeat: -1,
        duration: 20,
        ease: 'linear'
      })
    }

    // Review rotation
    const reviewInterval = setInterval(() => {
      setCurrentReview(prev => (prev + 1) % reviews.length)
    }, 5000)

    return () => {
      lenis.destroy()
      ScrollTrigger.getAll().forEach(t => t.kill())
      clearInterval(reviewInterval)
    }
  }, [])

  const scrollTo = (id) => {
    const target = document.getElementById(id)
    if (target && lenisRef.current) {
      lenisRef.current.scrollTo(target, { offset: 0, duration: 1.5 })
    }
    setMenuOpen(false)
  }

  return (
    <div className="bg-[#0c0a09] text-stone-100 overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference">
        <div className="flex justify-between items-center py-6 px-6 md:px-12">
          <motion.img
            src={logo}
            alt="Barrique"
            className="h-10 md:h-14 w-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          />

          <div className="hidden md:flex items-center gap-12">
            {['chi-siamo', 'offerta', 'galleria', 'contatti'].map((item, i) => (
              <motion.button
                key={item}
                onClick={() => scrollTo(item)}
                className="text-white hover:text-amber-400 transition-colors text-sm tracking-widest uppercase"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                {item.replace('-', ' ')}
              </motion.button>
            ))}
          </div>

          <motion.button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div className="w-7 flex flex-col gap-1.5">
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-0.5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </motion.button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="md:hidden fixed inset-0 bg-[#0c0a09] flex flex-col items-center justify-center gap-8"
            >
              {['chi-siamo', 'offerta', 'galleria', 'contatti'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="text-4xl font-serif text-white hover:text-amber-400 uppercase tracking-wider"
                >
                  {item.replace('-', ' ')}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* HERO - Overlapping & Asymmetric */}
      <section ref={heroRef} className="relative min-h-screen pt-32 pb-20 md:pt-40 md:pb-32">
        <div className="px-6 md:px-12">
          {/* Main grid with overlapping elements */}
          <div className="grid grid-cols-12 gap-4">

            {/* Big title - spans across and overlaps image */}
            <div className="col-span-12 md:col-span-8 relative z-20">
              <motion.h1
                className="font-serif text-[15vw] md:text-[12vw] leading-[0.85] tracking-tight"
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <span className="block">BAR</span>
                <span className="block text-amber-500 -mt-4 md:-mt-8 ml-[20%]">RIQUE</span>
              </motion.h1>
            </div>

            {/* Hero image - overlapped by title */}
            <motion.div
              className="col-span-10 col-start-2 md:col-span-6 md:col-start-6 -mt-[25vw] md:-mt-[18vw] relative z-10"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={foto5}
                alt="Interno Barrique"
                className="w-full h-[60vh] md:h-[70vh] object-cover"
              />
              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-amber-600 p-4 md:p-6">
                <span className="text-3xl md:text-5xl font-serif block">4.3</span>
                <span className="text-xs uppercase tracking-wider">Google</span>
              </div>
            </motion.div>

            {/* Tagline - positioned asymmetrically */}
            <motion.div
              className="col-span-12 md:col-span-4 md:col-start-1 mt-12 md:mt-0 md:-mt-32 relative z-30"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <p className="text-amber-500 text-xs uppercase tracking-[0.3em] mb-3">Wine Bar — Aprica</p>
              <p className="text-stone-400 text-lg md:text-xl leading-relaxed max-w-sm">
                Il tuo rifugio a 1.181 metri. Vini valtellinesi, taglieri e atmosfera alpina.
              </p>
            </motion.div>

            {/* CTA + Info - bottom right */}
            <motion.div
              className="col-span-12 md:col-span-5 md:col-start-8 mt-16 md:mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex gap-4">
                <a
                  href="tel:+393922426291"
                  className="bg-white text-black px-6 py-4 text-sm uppercase tracking-wider hover:bg-amber-400 transition-colors"
                >
                  Chiama
                </a>
                <a
                  href="https://wa.me/393922426291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone-600 px-6 py-4 text-sm uppercase tracking-wider hover:border-amber-500 hover:text-amber-400 transition-colors"
                >
                  WhatsApp
                </a>
              </div>
              <div className="text-right text-stone-500 text-sm">
                <p>Corso Roma 94</p>
                <p>23031 Aprica (SO)</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="py-6 border-y border-stone-800/40 overflow-hidden">
        <div ref={marqueeRef} className="flex whitespace-nowrap">
          {[...Array(4)].map((_, i) => (
            <span key={i} className="text-[8rem] md:text-[12rem] font-serif text-stone-900 mx-4" style={{WebkitTextStroke: '1px #44403c'}}>
              VINO • GUSTO • MONTAGNA •
            </span>
          ))}
        </div>
      </div>

      {/* CHI SIAMO - Overlapping Layout */}
      <section id="chi-siamo" className="py-24 md:py-40">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-4 md:gap-6">

            {/* Section title - huge and overlapping */}
            <div className="col-span-12 relative z-10">
              <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-4">01 — Chi siamo</span>
              <h2 className="font-serif text-[18vw] md:text-[14vw] leading-[0.8] tracking-tight">
                <span className="text-stone-800" style={{WebkitTextStroke: '1px #78716c'}}>UN</span>
                <span className="text-white ml-4">ANGOLO</span>
              </h2>
            </div>

            {/* First image - overlapped by title */}
            <div className="col-span-10 md:col-span-5 -mt-16 md:-mt-24 relative">
              <img
                src={foto6}
                alt="Atmosfera"
                className="w-full h-[50vh] md:h-[65vh] object-cover"
              />
            </div>

            {/* Text block - offset */}
            <div className="col-span-12 md:col-span-5 md:col-start-7 mt-8 md:mt-20">
              <h3 className="font-serif text-4xl md:text-6xl mb-6">
                di <span className="text-amber-400">Valtellina</span>
              </h3>
              <p className="text-stone-400 text-lg leading-relaxed mb-8">
                Nel cuore di Aprica, le nostre pareti in legno e pietra creano
                l'ambiente perfetto per rilassarsi dopo una giornata sulle piste
                o durante una passeggiata estiva.
              </p>
              <div className="flex gap-8">
                <div>
                  <span className="text-4xl font-serif text-amber-500">1181</span>
                  <span className="block text-xs text-stone-500 uppercase tracking-wider mt-1">Metri s.l.m.</span>
                </div>
                <div>
                  <span className="text-4xl font-serif text-amber-500">2015</span>
                  <span className="block text-xs text-stone-500 uppercase tracking-wider mt-1">Anno apertura</span>
                </div>
              </div>
            </div>

            {/* Second image - different size, overlapping */}
            <div className="col-span-8 col-start-4 md:col-span-4 md:col-start-2 -mt-8 md:-mt-32">
              <img
                src={foto3}
                alt="Vini"
                className="w-full h-[40vh] md:h-[55vh] object-cover"
              />
            </div>

            {/* Third image - small, offset */}
            <div className="col-span-6 md:col-span-3 md:col-start-8 mt-8 md:mt-16">
              <img
                src={foto2}
                alt="Montagna"
                className="w-full h-[30vh] object-cover"
              />
              <p className="text-stone-500 text-sm mt-4 leading-relaxed">
                Siamo appassionati di vini valtellinesi — dallo Sforzato all'Inferno,
                dalla Sassella alle nostre selezioni speciali.
              </p>
            </div>

          </div>

          {/* Features row */}
          <div className="mt-24 md:mt-40 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-stone-800 pt-12">
            {['Vini Valtellinesi', 'Birre Artigianali', 'Sky Sport Live', 'Wi-Fi Free'].map((item, i) => (
              <div key={i} className="group">
                <span className="text-amber-500 text-3xl font-serif block mb-2">0{i + 1}</span>
                <span className="text-stone-300 text-sm uppercase tracking-wider group-hover:text-amber-400 transition-colors">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFFERTA - Dramatic Overlapping Cards */}
      <section id="offerta" className="py-24 md:py-40 bg-stone-900/30">
        <div className="px-6 md:px-12">

          {/* Section header with overlapping text */}
          <div className="relative mb-20 md:mb-32">
            <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-4">02 — Offerta</span>
            <h2 className="font-serif text-[14vw] md:text-[10vw] leading-[0.85]">
              <span className="block">LA NOSTRA</span>
              <span className="block text-amber-400 ml-[10%] md:ml-[20%]">SELEZIONE</span>
            </h2>
            {/* Overlapping subtitle */}
            <p className="absolute bottom-0 right-0 md:right-[10%] text-stone-500 text-sm uppercase tracking-widest">
              Dal vino al comfort food
            </p>
          </div>

          {/* Cards grid with overlapping */}
          <div className="grid grid-cols-12 gap-4">

            {/* Wine - Large card */}
            <div className="col-span-12 md:col-span-7 relative group">
              <div className="overflow-hidden">
                <img
                  src={foto20}
                  alt="Vini"
                  className="w-full h-[55vh] md:h-[75vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              {/* Overlapping text box */}
              <div className="absolute -bottom-8 -right-4 md:right-8 bg-[#0c0a09] p-6 md:p-10 max-w-sm">
                <span className="text-amber-500 text-xs uppercase tracking-widest">Selezione</span>
                <h3 className="font-serif text-3xl md:text-5xl mt-2">Vini Valtellinesi</h3>
                <p className="text-stone-400 mt-3 text-sm">Sforzato, Inferno, Sassella e le migliori etichette locali</p>
              </div>
            </div>

            {/* Hamburger - smaller, offset */}
            <div className="col-span-10 col-start-2 md:col-span-5 md:col-start-8 mt-16 md:mt-40 relative group">
              <div className="overflow-hidden">
                <img
                  src={foto10}
                  alt="Hamburger"
                  className="w-full h-[45vh] md:h-[55vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-2xl md:text-3xl">Hamburger Gourmet</h3>
                <p className="text-stone-500 text-sm mt-1">Ingredienti premium, gusto autentico</p>
              </div>
            </div>

            {/* Taglieri - medium, overlapping previous */}
            <div className="col-span-11 md:col-span-6 -mt-8 md:-mt-20 relative group z-10">
              <div className="overflow-hidden">
                <img
                  src={foto15}
                  alt="Taglieri"
                  className="w-full h-[50vh] md:h-[60vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                <h3 className="font-serif text-3xl md:text-4xl text-white drop-shadow-lg">Taglieri del Territorio</h3>
                <p className="text-stone-200 text-sm mt-2 drop-shadow-lg">Salumi e formaggi valtellinesi</p>
              </div>
            </div>

            {/* Cocktails - small accent */}
            <div className="col-span-8 col-start-5 md:col-span-4 md:col-start-8 mt-8 md:-mt-16 relative group">
              <div className="overflow-hidden">
                <img
                  src={foto12}
                  alt="Cocktail"
                  className="w-full h-[35vh] md:h-[45vh] object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl mt-4">Cocktail & Spirits</h3>
            </div>
          </div>

          {/* Sky Bar banner */}
          <div className="mt-24 md:mt-40 border-t border-b border-stone-800 py-12 md:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div>
              <span className="text-[6rem] md:text-[10rem] font-serif text-stone-800 leading-none" style={{WebkitTextStroke: '1px #78716c'}}>SKY</span>
            </div>
            <div className="max-w-lg">
              <h3 className="font-serif text-3xl md:text-4xl text-white mb-4">Bar & Sport Live</h3>
              <p className="text-stone-400">
                Partite di calcio in diretta su maxischermo. L'atmosfera perfetta
                per seguire la tua squadra con un buon calice in mano.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* GALLERIA - Irregular Masonry */}
      <section id="galleria" className="py-24 md:py-40">
        <div className="px-6 md:px-12">

          {/* Title with overlapping */}
          <div className="relative mb-16 md:mb-24">
            <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-4">03 — Galleria</span>
            <h2 className="font-serif text-[12vw] md:text-[9vw] leading-[0.85]">
              <span className="text-stone-700">MOMENTI</span>
            </h2>
            <h2 className="font-serif text-[12vw] md:text-[9vw] leading-[0.85] -mt-4 md:-mt-8 ml-[15%] md:ml-[25%]">
              <span className="text-white">& SAPORI</span>
            </h2>
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-12 gap-3 md:gap-4">
            <div className="col-span-7 md:col-span-5 row-span-2 cursor-pointer group" onClick={() => setSelectedImage(foto5)}>
              <img src={foto5} alt="" className="w-full h-full object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-5 md:col-span-4 cursor-pointer group" onClick={() => setSelectedImage(foto8)}>
              <img src={foto8} alt="" className="w-full h-[25vh] md:h-[30vh] object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-5 md:col-span-3 md:row-span-2 cursor-pointer group" onClick={() => setSelectedImage(foto10)}>
              <img src={foto10} alt="" className="w-full h-[30vh] md:h-full object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-7 md:col-span-4 cursor-pointer group" onClick={() => setSelectedImage(foto25)}>
              <img src={foto25} alt="" className="w-full h-[25vh] md:h-[35vh] object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-6 md:col-span-4 cursor-pointer group" onClick={() => setSelectedImage(foto18)}>
              <img src={foto18} alt="" className="w-full h-[28vh] md:h-[32vh] object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-6 md:col-span-3 cursor-pointer group" onClick={() => setSelectedImage(foto22)}>
              <img src={foto22} alt="" className="w-full h-[28vh] md:h-[32vh] object-cover group-hover:opacity-80 transition-opacity" />
            </div>
            <div className="col-span-12 md:col-span-5 -mt-4 md:-mt-16 cursor-pointer group" onClick={() => setSelectedImage(foto1)}>
              <img src={foto1} alt="" className="w-full h-[30vh] md:h-[40vh] object-cover group-hover:opacity-80 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt=""
              className="max-w-full max-h-[90vh] object-contain"
            />
            <button className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400">×</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RECENSIONI */}
      <section className="py-24 md:py-40 border-t border-stone-800/50">
        <div className="px-6 md:px-12">
          <div className="grid grid-cols-12 gap-8">

            {/* Ratings - overlapping style */}
            <div className="col-span-12 md:col-span-4">
              <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-8">04 — Recensioni</span>
              <div className="relative">
                <span className="text-[8rem] md:text-[12rem] font-serif text-amber-500 leading-none">4.3</span>
                <span className="absolute bottom-4 left-32 md:left-48 text-stone-500 text-sm">/5 Google</span>
              </div>
              <div className="mt-4">
                <span className="text-5xl md:text-7xl font-serif text-stone-700">4.5</span>
                <span className="text-stone-600 text-sm ml-4">/5 Facebook</span>
              </div>
            </div>

            {/* Review carousel */}
            <div className="col-span-12 md:col-span-7 md:col-start-6 md:mt-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentReview}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <blockquote className="font-serif text-2xl md:text-4xl leading-relaxed text-stone-200">
                    "{reviews[currentReview].text}"
                  </blockquote>
                  <cite className="block mt-6 text-stone-500 not-italic text-sm uppercase tracking-wider">
                    — {reviews[currentReview].author}
                  </cite>
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-3 mt-10">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentReview(i)}
                    className={`w-10 h-1 transition-colors ${i === currentReview ? 'bg-amber-500' : 'bg-stone-700'}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTATTI - Dramatic Overlapping */}
      <section id="contatti" className="py-24 md:py-40 bg-stone-900/30 relative overflow-hidden">
        <div className="px-6 md:px-12">

          {/* Huge background text */}
          <div className="absolute top-20 -left-10 md:left-0 opacity-5 pointer-events-none">
            <span className="text-[30vw] font-serif leading-none">VIENI</span>
          </div>

          <div className="relative z-10">
            <span className="text-amber-500 text-xs uppercase tracking-[0.3em] block mb-4">05 — Contatti</span>
            <h2 className="font-serif text-[12vw] md:text-[8vw] leading-[0.85] mb-16 md:mb-24">
              <span className="block">VIENI A</span>
              <span className="block text-amber-400 ml-[5%] md:ml-[15%]">TROVARCI</span>
            </h2>

            <div className="grid grid-cols-12 gap-8">

              {/* Info column */}
              <div className="col-span-12 md:col-span-5 space-y-10">
                <div>
                  <span className="text-amber-500 text-xs uppercase tracking-widest">Indirizzo</span>
                  <p className="text-2xl md:text-3xl mt-3 font-light">
                    Corso Roma 94<br/>23031 Aprica (SO)
                  </p>
                  <p className="text-stone-500 mt-2">Valtellina — 1.181m</p>
                </div>

                <div>
                  <span className="text-amber-500 text-xs uppercase tracking-widest">Telefono</span>
                  <a href="tel:+393922426291" className="block text-2xl md:text-4xl mt-3 font-light hover:text-amber-400 transition-colors">
                    392 242 6291
                  </a>
                </div>

                <div>
                  <span className="text-amber-500 text-xs uppercase tracking-widest">Social</span>
                  <div className="flex gap-6 mt-3">
                    <a href="https://www.instagram.com/barrique_aprica" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                      Instagram
                    </a>
                    <a href="https://www.facebook.com/PublicAprica" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-white transition-colors text-sm uppercase tracking-wider">
                      Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours + CTA */}
              <div className="col-span-12 md:col-span-6 md:col-start-7">
                <div className="bg-stone-800/40 p-8 md:p-10">
                  <span className="text-amber-500 text-xs uppercase tracking-widest">Orari</span>
                  <div className="mt-6 space-y-4 text-sm md:text-base">
                    <div className="flex justify-between border-b border-stone-700/50 pb-3">
                      <span className="text-red-400">Lunedì</span>
                      <span className="text-red-400">Chiuso</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-700/50 pb-3">
                      <span>Mar — Gio</span>
                      <span className="text-stone-400">08:00 — 00:00</span>
                    </div>
                    <div className="flex justify-between border-b border-stone-700/50 pb-3">
                      <span>Venerdì</span>
                      <span className="text-stone-400">17:00 — 00:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sab — Dom</span>
                      <span className="text-stone-400">08:00 — 00:00</span>
                    </div>
                  </div>
                </div>

                <a
                  href="https://wa.me/393922426291"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 flex items-center justify-center gap-4 bg-green-600 hover:bg-green-500 text-white py-5 transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>Scrivici su WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-20 md:mt-32 h-[40vh] md:h-[50vh] grayscale hover:grayscale-0 transition-all duration-500">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.5!2d10.152!3d46.153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478500000000000%3A0x0!2sCorso%20Roma%2094%2C%2023031%20Aprica%20SO!5e0!3m2!1sit!2sit!4v1699999999999!5m2!1sit!2sit"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Mappa"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t border-stone-800/50">
        <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <img src={logo} alt="Barrique" className="h-8 w-auto opacity-40" />
          <p className="text-stone-600 text-sm">© 2024 Barrique — Gusto diVino</p>
          <span className="text-stone-600 text-xs uppercase tracking-wider">Aprica, Valtellina</span>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#0c0a09] to-transparent md:hidden z-40">
        <a
          href="tel:+393922426291"
          className="flex items-center justify-center gap-2 bg-amber-600 text-white py-4 font-medium"
        >
          Chiamaci Ora
          <span>→</span>
        </a>
      </div>
    </div>
  )
}

export default App
