import React from 'react'
import logo from '../assets/logo.png'

export default function FrontPage() {
  return (
    <div className="text-gray-100 bg-darkbg min-h-screen flex flex-col items-center justify-center px-6">
      {/* Hero Section */}
      <section className="text-center mt-10">
        <img src={logo} alt="Logo" className="mx-auto w-28 mb-6 drop-shadow-lg" />
        <h1 className="text-5xl font-extrabold text-gold mb-4">
          Projeto Sprint4
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Front-end moderno desenvolvido com <span className="text-gold font-semibold">React + Vite + TailwindCSS</span>.  
          Este projeto integra design responsivo, componentes interativos e dashboard dinâmico.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/dashboard"
            className="px-6 py-3 bg-gold text-black font-semibold rounded-lg shadow hover:bg-yellow-400 transition"
          >
            Ver Dashboard
          </a>
          <a
            href="#sobre"
            className="px-6 py-3 border border-gold text-gold font-semibold rounded-lg hover:bg-gold hover:text-black transition"
          >
            Saiba Mais
          </a>
        </div>
      </section>

      {/* Sobre */}
      <section id="sobre" className="mt-20 max-w-4xl text-center">
        <h2 className="text-3xl font-bold text-gold mb-4">Sobre o Projeto</h2>
        <p className="text-gray-400 leading-relaxed">
          A Sprint4 é uma aplicação front-end desenvolvida como parte do aprendizado em desenvolvimento web moderno.
          O foco é integrar ferramentas como React, TailwindCSS, Vite e boas práticas de UI/UX, resultando em um sistema elegante e eficiente.
        </p>
      </section>

      {/* Features */}
      <section className="mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
        <div className="bg-gray-900/40 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-900/60 transition">
          <h3 className="text-xl font-semibold text-gold mb-2">🚀 Performance</h3>
          <p className="text-gray-400 text-sm">Construído com Vite para um ambiente de desenvolvimento rápido e leve.</p>
        </div>
        <div className="bg-gray-900/40 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-900/60 transition">
          <h3 className="text-xl font-semibold text-gold mb-2">🎨 Design Responsivo</h3>
          <p className="text-gray-400 text-sm">Layout adaptável, mobile-first e otimizado para diferentes dispositivos.</p>
        </div>
        <div className="bg-gray-900/40 p-6 rounded-2xl shadow hover:shadow-lg hover:bg-gray-900/60 transition">
          <h3 className="text-xl font-semibold text-gold mb-2">⚙️ Integrações</h3>
          <p className="text-gray-400 text-sm">Elementos interativos e dashboards integrados com componentes reutilizáveis.</p>
        </div>
      </section>

      {/* Rodapé */}
      <footer className="mt-20 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Sprint4 — Desenvolvido com 💛 usando React + TailwindCSS.
      </footer>
    </div>
  )
}