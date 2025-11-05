import React from 'react'

export default function Modal({open, children, onClose}){
  if(!open) return null
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center'>
      <div className='absolute inset-0 bg-black/50' onClick={onClose}></div>
      <div className='relative bg-gray-900 rounded-2xl p-6 w-full max-w-xl shadow-2xl'>
        <button className='absolute top-3 right-3' onClick={onClose}>✕</button>
        {children}
      </div>
    </div>
  )
}
