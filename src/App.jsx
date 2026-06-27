import React, { useState } from 'react';
import Resumen from './components/Resumen';
import InyeccionSQL from './components/InyeccionSQL';
import XssReflected from './components/XssReflected';


export default function App() {
  const [seccion, setSeccion] = useState('resumen');

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#050816] font-sans text-slate-200 antialiased selection:bg-cyan-400 selection:text-white">
      <div className="cyber-bg">

    <div className="cyber-glow"></div>

    {[...Array(90)].map((_,i)=>(

        <span

            key={i}

            className="particle"

            style={{

                left:`${Math.random()*100}%`,

                animationDuration:`${12+Math.random()*20}s`,

                animationDelay:`-${Math.random()*25}s`,

                transform:`scale(${0.5+Math.random()*2})`

            }}

        />

    ))}

</div>

      {/* CAPA DE CONTENIDO */}
      <div className="relative z-20 mx-auto max-w-5xl  px-3 py-8 sm:px-6 lg:px-8 space-y-6">
        
        {/* ENCABEZADO */}
        <header className="relative overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 backdrop-blur-xl p-8 shadow-[0_0_50px_rgba(0,180,255,0.08)]">

    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5"></div>

    <div className="relative">

        <div className="flex items-center gap-3 mb-5">

            <div className="h-3 w-3 rounded-full bg-emerald-400 animate-pulse"></div>

            <span className="text-cyan-400 tracking-[.35em] text-xs font-black">

                SECURITY OPERATIONS CENTER

            </span>

        </div>

        <h1 className="text-5xl font-black tracking-tight text-white">

            Portal de Auditoría

        </h1>

        <p className="mt-3 text-slate-400 max-w-2xl">

            Plataforma interactiva para la demostración y análisis de vulnerabilidades
            web, orientada a auditorías de seguridad ofensiva.

        </p>

    </div>

</header>

        {/* NAVEGACIÓN */}
        <nav className="flex justify-center">
          <div className="flex flex-col sm:flex-row items-center gap-2 rounded-xl border border-white/5 bg-slate-900/70 p-1.5 shadow-2xl shadow-black/50 backdrop-blur-md w-full sm:w-auto">
            <button onClick={() => setSeccion('resumen')} className={`w-full sm:w-auto rounded-lg px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${seccion === 'resumen' ? 'bg-sky-600 text-white shadow-lg shadow-sky-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Resumen</button>
            <button onClick={() => setSeccion('sqli')} className={`w-full sm:w-auto rounded-lg px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${seccion === 'sqli' ? 'bg-red-600 text-white shadow-lg shadow-red-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>Inyección SQL</button>
            <button onClick={() => setSeccion('xss')} className={`w-full sm:w-auto rounded-lg px-4 py-2 text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all ${seccion === 'xss' ? 'bg-amber-600 text-white shadow-lg shadow-amber-900/50' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>XSS Reflejado</button>
          </div>
        </nav>

        {/* CONTENEDOR PRINCIPAL */}
        <main className="rounded-2xl border border-white/5 bg-[#0b1120]/60 shadow-2xl shadow-black/50 backdrop-blur-md p-2 sm:p-4">
          <div key={seccion} className="animate-[fadeIn_0.3s_ease-out]">
            {seccion === 'resumen' && <Resumen />}
            {seccion === 'sqli' && <InyeccionSQL />}
            {seccion === 'xss' && <XssReflected />}
          </div>
        </main>

        {/* PIE DE PÁGINA */}
        <footer className="rounded-2xl border border-white/5 bg-[#0b1120]/80 backdrop-blur-md p-6 space-y-6 shadow-2xl shadow-black/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-4">
            <div className="flex flex-col items-center space-y-2">
              <span className="font-mono text-[9px] text-sky-400 font-black">// SIG_VC_CIFVIC //</span>
              <p className="text-xs font-bold text-white">Vicente Cifuentes</p>
              <a href="mailto:vicente.cifuentes02@inacapmail.cl" className="text-[10px] text-sky-500 font-mono hover:underline">vicente.cifuentes02@inacapmail.cl</a>
            </div>
            <div className="flex flex-col items-center space-y-2">
              <span className="font-mono text-[9px] text-slate-600 italic">[ PENDING_HASH ]</span>
              <p className="text-xs font-bold text-slate-400">CISO AeroAustral</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}