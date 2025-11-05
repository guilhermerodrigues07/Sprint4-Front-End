import React, { useState } from 'react'

export default function Dropdown(){
  const [open, setOpen] = useState(false)
  const items = ['Opção 1','Opção 2','Opção 3']
  return (
    <div className='relative'>
      <button onClick={()=>setOpen(v=>!v)} className='w-full text-left px-3 py-2 bg-gray-800 rounded'>{open ? 'Fechar ▴' : 'Abrir ▾'}</button>
      {open && (
        <div className='mt-2 bg-gray-800 rounded shadow p-2'>
          {items.map((it,i)=> <div key={i} className='p-2 hover:bg-gray-700 rounded'>{it}</div>)}
        </div>
      )}
    </div>
  )
}
