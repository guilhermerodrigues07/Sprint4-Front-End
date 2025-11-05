import React from 'react'
export default function Footer(){
  return (
    <footer className='mt-12'>
      <div className='max-w-6xl mx-auto p-6 text-center text-sm text-gray-500'>
        © {new Date().getFullYear()} Sprint4 — Projeto modernizado com React + Vite + Tailwind.
      </div>
    </footer>
  )
}
