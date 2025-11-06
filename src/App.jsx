import React, { useState, useEffect } from 'react'
import newsData from './data/news.json'
import athletesData from './data/athletes.json'

function Carousel({items}){
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(v => (v+1)%items.length), 4000)
    return ()=> clearInterval(t)
  },[items.length])
  return (
    <div className="relative overflow-hidden rounded-lg">
      <div className="flex transition-transform" style={{transform:`translateX(-${i*100}%)`, width:`${items.length*100}%`}}>
        {items.map((n, idx)=> (
          <article key={n.id} className="w-full flex-shrink-0">
            <img src={n.image} alt={n.title} loading="lazy" className="w-full h-56 object-cover rounded-lg" />
            <div className="p-4 bg-black">
              <h4 className="font-semibold text-gold">{n.title}</h4>
              <p className="text-sm text-gray-300">{n.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2">
        {items.map((_, idx)=> <button key={idx} onClick={()=>setI(idx)} className={`w-3 h-3 rounded-full ${i===idx? 'bg-gold':'bg-gray-500'}`} aria-label={`go ${idx}`}></button>)}
      </div>
    </div>
  )
}

function AthleteModal({athlete, onClose}){
  if(!athlete) return null
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/60" onClick={onClose}></div>
      <div className="relative bg-gray-900 rounded-lg p-6 max-w-xl w-full mx-4">
        <button className="absolute top-3 right-3" onClick={onClose}>✕</button>
        <div className="flex gap-4 items-center">
          <img src={athlete.image} alt={athlete.name} className="w-28 h-28 rounded-full object-cover" loading="lazy"/>
          <div>
            <h3 className="text-xl font-bold text-gold">{athlete.name}</h3>
            <p className="text-sm text-gray-300">{athlete.role} — {athlete.club}</p>
            <p className="mt-3 text-gray-200">{athlete.bio}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function App(){
  const [selected, setSelected] = useState(null)
  useEffect(()=>{
    document.title = 'Passa a Bola — Inovação no Futebol Feminino'
  },[])
  return (
    <div className="bg-darkbg text-gray-100 min-h-screen">
      <header className="fixed w-full bg-black/90 backdrop-blur z-50 border-b border-gray-800">
        <nav className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="text-2xl font-extrabold text-gold">Passa a Bola</h1>
          <ul className="hidden md:flex flex-wrap gap-6 text-sm uppercase">
            <li><a href="#inicio" className="hover:text-gold">Início</a></li>
            <li><a href="#sobre" className="hover:text-gold">Sobre</a></li>
            <li><a href="#objetivos" className="hover:text-gold">Objetivos</a></li>
            <li><a href="#inovacao" className="hover:text-gold">Inovação</a></li>
            <li><a href="#noticias" className="hover:text-gold">Notícias</a></li>
            <li><a href="#atletas" className="hover:text-gold">Atletas</a></li>
            <li><a href="#contato" className="hover:text-gold">Contato</a></li>
          </ul>
        </nav>
      </header>

      <main className="pt-28">
        <section id="inicio" className="bg-cover bg-center min-h-screen flex items-center justify-center text-center" style={{backgroundImage:'url(https://images.unsplash.com/photo-1607957743729-2e8f708be0a0?auto=format&fit=crop&w=1600&q=80)'}}>
          <div className="bg-black/70 p-10 rounded-xl max-w-3xl mx-4">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gold">Futebol Feminino & Tecnologia</h2>
            <p className="mt-4 text-lg max-w-2xl mx-auto">Unindo paixão e inovação para transformar a visibilidade do futebol feminino.</p>
            <a href="#sobre" className="mt-6 inline-block bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition">Saiba Mais</a>
          </div>
        </section>

        <section id="sobre" className="max-w-6xl mx-auto py-20 px-6">
          <h3 className="text-3xl font-bold text-gold mb-6">Sobre o Projeto</h3>
          <p className="text-gray-300 leading-relaxed">O projeto <strong>Passa a Bola</strong> é uma iniciativa do Desafio de Inovação Tecnológica FIAP, em parceria com o maior canal dedicado ao esporte feminino na América Latina. Nosso objetivo é usar a tecnologia como ferramenta para aumentar a visibilidade, engajamento e reconhecimento das atletas brasileiras.</p>
        </section>

        <section id="objetivos" className="bg-gray-900 py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-gold mb-10 text-center">Objetivos</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div className="bg-black p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gold mb-3">Visibilidade</h4>
                <p>Ampliar o alcance midiático do futebol feminino, destacando atletas e competições.</p>
              </div>
              <div className="bg-black p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gold mb-3">Empoderamento</h4>
                <p>Promover impacto social positivo, valorizando o protagonismo feminino no esporte.</p>
              </div>
              <div className="bg-black p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gold mb-3">Experiência</h4>
                <p>Potencializar a forma como os fãs vivenciam o futebol feminino.</p>
              </div>
              <div className="bg-black p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gold mb-3">Engajamento</h4>
                <p>Estimular a interação e a participação ativa nas plataformas digitais.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="inovacao" className="max-w-6xl mx-auto py-20 px-6">
          <h3 className="text-3xl font-bold text-gold mb-10 text-center">Inspiração para Inovação</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/** Cards rendered above in App */}
            <div className="bg-gray-900 rounded-xl p-6 shadow">
              <img src="https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80" className="rounded-lg mb-4" alt="Estatísticas" />
              <h4 className="text-xl font-semibold mb-2 text-gold">Plataformas de Dados</h4>
              <p>Sistemas que capturem e analisem estatísticas de jogos e desempenho em tempo real.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 shadow">
              <img src="https://images.unsplash.com/photo-1598214886806-c87b84b7078a?auto=format&fit=crop&w=800&q=80" className="rounded-lg mb-4" alt="Simulador" />
              <h4 className="text-xl font-semibold mb-2 text-gold">Jogos e Simuladores</h4>
              <p>Experiências gamificadas que aproximem os fãs do universo do futebol feminino.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 shadow">
              <img src="https://images.unsplash.com/photo-1600431521340-491eca880813?auto=format&fit=crop&w=800&q=80" className="rounded-lg mb-4" alt="Storytelling" />
              <h4 className="text-xl font-semibold mb-2 text-gold">Storytelling</h4>
              <p>Plataformas que contem as histórias inspiradoras de atletas e clubes.</p>
            </div>
            <div className="bg-gray-900 rounded-xl p-6 shadow">
              <img src="https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=800&q=80" className="rounded-lg mb-4" alt="Comunidade" />
              <h4 className="text-xl font-semibold mb-2 text-gold">Hubs de Engajamento</h4>
              <p>Espaços digitais que conectem clubes, atletas e fãs.</p>
            </div>
          </div>
        </section>

        <section id="noticias" className="bg-gray-900 py-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gold mb-10">Notícias Recentes</h3>
            <Carousel items={newsData} />
          </div>
        </section>

        <section id="atletas" className="max-w-6xl mx-auto py-20 px-6">
          <h3 className="text-3xl font-bold text-gold mb-10 text-center">Atletas em Destaque</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {athletesData.map(a=> (
              <div key={a.id} className="bg-gray-900 rounded-xl p-6 shadow">
                <img src={a.image} alt={a.name} className="rounded-full w-32 h-32 mx-auto mb-4 object-cover" loading="lazy"/>
                <h4 className="text-xl font-semibold text-gold mb-2">{a.name}</h4>
                <p className="text-gray-300">{a.role} — {a.club}</p>
                <button className="mt-4 px-4 py-2 bg-gold text-black rounded" onClick={()=>setSelected(a)}>Ver Perfil</button>
              </div>
            ))}
          </div>
        </section>

        <section id="contato" className="bg-gray-900 py-20 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gold mb-6">Entre em Contato</h3>
            <p className="mb-8 text-gray-300">Tem uma ideia ou quer fazer parte do projeto? Envie sua mensagem!</p>
            <form className="space-y-4" onSubmit={(e)=>{ e.preventDefault(); alert('Mensagem enviada — obrigado!') }}>
              <input type="text" placeholder="Nome" className="w-full p-3 rounded bg-black text-gray-100 border border-gray-700" />
              <input type="email" placeholder="Email" className="w-full p-3 rounded bg-black text-gray-100 border border-gray-700" />
              <textarea placeholder="Mensagem" rows="4" className="w-full p-3 rounded bg-black text-gray-100 border border-gray-700"></textarea>
              <button type="submit" className="bg-gold text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300">Enviar</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-black py-6 text-center border-t border-gray-800">
        <p className="text-gray-400 text-sm">Desenvolvido para o Desafio de Inovação Tecnológica – FIAP & Passa a Bola 2025</p>
      </footer>

      <AthleteModal athlete={selected} onClose={()=>setSelected(null)} />
    </div>
  )
}
