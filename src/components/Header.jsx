import React from 'react'

export default function Header({onContact}){
  return (
    <header className='bg-gray-900/30 backdrop-blur sticky top-0 z-20'>
      <div className='max-w-6xl mx-auto flex items-center justify-between p-4'>
        <div className='flex items-center gap-3'>
          <div className='w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-gold to-yellow-600 flex items-center justify-center text-black font-bold'>S4</div>
          <div>
            <h1 className='text-lg font-semibold'>Sprint4</h1>
            <p className='text-xs text-gray-400'>Front-end Design · TailwindCSS · Vite</p>
          </div>
        </div>
        <nav className='flex items-center gap-3'>
          <button className='px-3 py-2 text-sm rounded-lg hover:bg-gray-800' onClick={onContact}>Contato</button>
          <a className='px-3 py-2 bg-gold text-black rounded-lg text-sm' href='#'>Deploy</a>
        </nav>
      </div>
    </header>
  )
}
