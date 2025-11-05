import React from 'react'

const sample = [
  {label: 'Seg', value: 12},
  {label: 'Ter', value: 22},
  {label: 'Qua', value: 9},
  {label: 'Qui', value: 30},
  {label: 'Sex', value: 18},
  {label: 'Sab', value: 25},
  {label: 'Dom', value: 14},
]

function MiniStat({title, value}){
  return (
    <div className='p-4 bg-gray-800/40 rounded-lg'>
      <div className='text-sm text-gray-300'>{title}</div>
      <div className='text-2xl font-bold text-white'>{value}</div>
    </div>
  )
}

function BarChart({data}){
  const max = Math.max(...data.map(d=>d.value))
  return (
    <svg viewBox={`0 0 ${data.length*40} 120`} className='w-full h-40'>
      {data.map((d,i)=>{
        const h = Math.round((d.value / max) * 80) + 10
        return (
          <g key={i} transform={`translate(${i*40 + 10}, 0)`}>
            <rect x={0} y={100 - h} width={20} height={h} rx={4} className='fill-gold' />
            <text x={10} y={115} fontSize='10' textAnchor='middle' fill='#cbd5e1'>{d.label}</text>
          </g>
        )
      })}
    </svg>
  )
}

export default function Dashboard(){
  return (
    <div className='p-6 bg-gray-900/20 rounded-3xl shadow-lg'>
      <h2 className='text-2xl font-semibold text-gold mb-4'>Dashboards</h2>
      <div className='grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4'>
        <MiniStat title='Usuários' value='1.2k' />
        <MiniStat title='Ativos' value='842' />
        <MiniStat title='Conversão' value='5.4%' />
      </div>
      <div className='mb-4'>
        <h3 className='text-sm text-gray-300 mb-2'>Visitas (última semana)</h3>
        <BarChart data={sample} />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='p-4 bg-gray-800/30 rounded-lg'>
          <h4 className='text-sm text-gray-300'>CSS Grid</h4>
          <p className='text-sm text-gray-400 mt-2'>Exemplo de layout com Grid Item e container.</p>
        </div>
        <div className='p-4 bg-gray-800/30 rounded-lg'>
          <h4 className='text-sm text-gray-300'>Responsividade</h4>
          <p className='text-sm text-gray-400 mt-2'>Layout mobile-first com pontos de quebra eficientes.</p>
        </div>
      </div>
    </div>
  )
}
