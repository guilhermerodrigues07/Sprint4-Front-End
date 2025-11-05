import React, { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Dashboard from './components/Dashboard'
import ContactForm from './components/ContactForm'
import Modal from './components/Modal'
import Dropdown from './components/Dropdown'

export default function App(){
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className='min-h-screen bg-darkbg text-gray-100 dark'>
      <Header onContact={() => setModalOpen(true)} />
      <main className='max-w-6xl mx-auto p-6 grid grid-cols-1 lg:grid-cols-3 gap-6'>
        <section className='lg:col-span-2'>
          <Dashboard />
        </section>
        <aside className='space-y-6'>
          <div className='p-6 bg-gray-900/40 rounded-2xl shadow'>
            <h3 className='text-gold font-semibold mb-3'>Elementos Interativos</h3>
            <Dropdown />
            <button className='mt-4 px-4 py-2 bg-gold text-black rounded-lg' onClick={() => setModalOpen(true)}>Abrir Modal</button>
          </div>
          <div className='p-6 bg-gray-900/40 rounded-2xl shadow'>
            <h3 className='text-gold font-semibold mb-3'>Contato</h3>
            <ContactForm />
          </div>
        </aside>
      </main>
      <Footer />
      <Modal open={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className='p-4'>
          <h2 className='text-xl font-bold'>Modal Exemplo</h2>
          <p className='mt-2 text-sm'>Este é um modal de demonstração, conforme solicitado.</p>
        </div>
      </Modal>
    </div>
  )
}
