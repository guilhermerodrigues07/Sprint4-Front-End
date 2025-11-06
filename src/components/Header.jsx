import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900/70 backdrop-blur-md border-b border-gray-800 z-50 shadow-smooth">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo + Nome */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="text-gold font-bold text-lg tracking-wide">Sprint4</span>
        </Link>

        {/* Menu Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="text-gray-300 hover:text-gold transition"
          >
            Início
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-gold transition"
          >
            Dashboard
          </Link>
          <a
            href="#sobre"
            className="text-gray-300 hover:text-gold transition"
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-gray-300 hover:text-gold transition"
          >
            Contato
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gold text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Deploy
          </a>
        </nav>

        {/* Botão Mobile */}
        <button
          className="md:hidden text-gray-300 hover:text-gold transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col items-center space-y-4 py-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Início
          </Link>
          <Link
            to="/dashboard"
            className="text-gray-300 hover:text-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Dashboard
          </Link>
          <a
            href="#sobre"
            className="text-gray-300 hover:text-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Sobre
          </a>
          <a
            href="#contato"
            className="text-gray-300 hover:text-gold transition"
            onClick={() => setMenuOpen(false)}
          >
            Contato
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-gold text-black rounded-lg font-semibold hover:bg-yellow-400 transition"
          >
            Deploy
          </a>
        </div>
      )}
    </header>
  )
}
