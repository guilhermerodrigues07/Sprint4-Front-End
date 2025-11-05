import React, { useState } from 'react'

export default function ContactForm(){
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [msg, setMsg] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e){
    e.preventDefault()
    if(!name || !email) return alert('Preencha nome e email')
    setSent(true)
    setTimeout(()=> { setName(''); setEmail(''); setMsg(''); setSent(false) }, 1200)
  }

  return (
    <form onSubmit={handleSubmit} className='space-y-3'>
      <input className='w-full p-2 rounded bg-gray-800 border border-gray-700' placeholder='Nome' value={name} onChange={e=>setName(e.target.value)} />
      <input className='w-full p-2 rounded bg-gray-800 border border-gray-700' placeholder='Email' value={email} onChange={e=>setEmail(e.target.value)} />
      <textarea className='w-full p-2 rounded bg-gray-800 border border-gray-700' rows='3' placeholder='Mensagem (opcional)' value={msg} onChange={e=>setMsg(e.target.value)} />
      <button type='submit' className='px-4 py-2 bg-gold text-black rounded-lg'>{sent ? 'Enviado' : 'Enviar'}</button>
    </form>
  )
}
