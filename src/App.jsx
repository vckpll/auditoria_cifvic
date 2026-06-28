import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XssReflected from './components/XssReflected';
import CommandInjection from './components/cmdInjection';
import Controles from './components/controles';
import Recuperacion from './components/recuperacion';

export default function App() {
  const [seccion, setSeccion] = useState('resumen');

  return (
    <div className="relative h-screen w-screen bg-[#050816] font-sans text-slate-200 overflow-hidden flex">
      
      {/* FONDO ANIMADO */}
      <div className="cyber-bg fixed inset-0 z-0">
        <div className="cyber-glow"></div>
        {[...Array(90)].map((_, i) => (
          <span
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${12 + Math.random() * 20}s`,
              animationDelay: `-${Math.random() * 25}s`,
              transform: `scale(${0.5 + Math.random() * 2})`
            }}
          />
        ))}
      </div>

      {/* SIDEBAR PROFESIONAL */}
      <aside className="relative z-10 w-64 border-r border-white/5 bg-[#0b1120]/80 backdrop-blur-xl p-8 flex flex-col shadow-2xl">
        <div className="mb-10">
          <h1 className="text-xl font-black text-white">AeroAustral</h1>
          <p className="text-[10px] text-cyan-500 font-bold uppercase tracking-widest mt-1">Portal de Auditoría</p>
        </div>

        <nav className="flex flex-col gap-3 flex-grow">
          {[
            {id: 'resumen', label: 'Resumen'},
            {id: 'sqli', label: 'Inyección SQL'},
            {id: 'xss', label: 'XSS Reflejado'},
            {id: 'cmd', label: 'Command Injection'},
            {id: 'controles', label: 'Controles'},
            {id: 'recuperacion', label: 'Recuperación'}
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setSeccion(item.id)}
              className={`text-left px-4 py-3 rounded-xl text-xs font-black uppercase tracking-wider transition-all ${
                seccion === item.id 
                  ? 'bg-cyan-600/20 text-cyan-400 border-l-2 border-cyan-500' 
                  : 'text-slate-500 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* FIRMA RESTAURADA */}
        <div className="mt-auto pt-8 border-t border-white/5 space-y-4">
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-[9px] text-sky-400 font-black">// SIG_VC_CIFVIC //</span>
            <p className="text-xs font-bold text-white">Vicente Cifuentes</p>
            <a href="mailto:vicente.cifuentes02@inacapmail.cl" className="text-[10px] text-sky-500 font-mono hover:underline">vicente.cifuentes02@inacapmail.cl</a>
          </div>
          <div className="flex flex-col space-y-1">
            <span className="font-mono text-[9px] text-slate-600 italic">[ PENDING_HASH ]</span>
            <p className="text-xs font-bold text-slate-400">CISO AeroAustral</p>
          </div>
        </div>
      </aside>

      {/* ÁREA DE CONTENIDO */}
      <main className="relative z-10 flex-1 overflow-y-auto p-12">
        <div className="max-w-5xl mx-auto space-y-8">
          <header className="rounded-3xl border border-white/5 bg-[#0b1120]/70 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(0,180,255,0.08)]">
            <h2 className="text-4xl font-black text-white capitalize">{seccion}</h2>
            <p className="text-slate-400 text-sm mt-2">Dashboard de seguridad corporativa AeroAustral S.A.</p>
          </header>

          <div className="rounded-3xl border border-white/5 bg-[#0b1120]/60 backdrop-blur-md p-8 shadow-2xl min-h-[500px]">
            {seccion === 'resumen' && <Resumen />}
            {seccion === 'sqli' && <InyeccionSQL />}
            {seccion === 'xss' && <XssReflected />}
            {seccion === 'cmd' && <CommandInjection />}
            {seccion === 'controles' && <Controles />}
            {seccion === 'recuperacion' && <Recuperacion />}
          </div>
        </div>
      </main>
    </div>
  );
}