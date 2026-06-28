import React from 'react';
import cmdEvidencia from '../assets/cmd.png'; //C:\Users\vicen\auditoria_cifvic
export default function cmdInjection() {
  return (
    <div className="p-6 space-y-6">
      <div className="border border-red-500/20 rounded-xl p-6 bg-slate-900/40 shadow-xl">
        <h3 className="font-bold text-white text-lg mb-2">
          Laboratorio: Explotación de Vulnerabilidad Command Injection
        </h3>
        <p className="text-xs text-slate-400 mb-4">
          Payload utilizado: <code className="bg-slate-950 px-1.5 py-0.5 font-bold rounded text-red-400 font-mono">127.0.0.1; cat /etc/passwd</code>
        </p>

        {/* CONTENEDOR DE LA IMAGEN DE EVIDENCIA */}
        <div className="border border-slate-800 rounded-lg overflow-hidden bg-slate-950 p-2">
          <img 
            src={cmdEvidencia} 
            alt="Evidencia Command Injection" 
            className="w-full h-auto rounded border border-white/10"
          />
          <p className="text-[11px] text-slate-400 italic mt-2 text-center">
            Figura 3: Captura de pantalla de la inyección de comandos del sistema operativo concatenando instrucciones mediante caracteres especiales de la shell.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
        <div className="border border-white/5 bg-slate-900/30 rounded-xl p-5 space-y-2">
          <h4 className="font-black text-red-400 uppercase tracking-widest font-mono">// Explicación Técnica</h4>
          <p className="text-slate-300 leading-relaxed">
            La funcionalidad del servidor ejecuta comandos en la shell del sistema operativo concatenando directamente la IP provista. Al usar el secuenciador punto y coma (<code className="text-red-400 font-mono">;</code>), se fuerza la finalización prematura de la rutina de red actual y se inicia la ejecución del comando secundario inyectado, comprometiendo archivos de configuración internos de la máquina.
          </p>
        </div>

        <div className="border border-white/5 bg-slate-900/30 rounded-xl p-5 space-y-2">
          <h4 className="font-black text-emerald-400 uppercase tracking-widest font-mono">// Defensa y Mitigación (OWASP)</h4>
          <p className="text-slate-300 leading-relaxed">
            Evitar pasar strings directamente a funciones de ejecución de bajo nivel del intérprete de comandos. Utilizar en su lugar **listas blancas de caracteres estrictas (White-listing)** mediante expresiones regulares para corroborar que la entrada sea únicamente un formato de IP legítimo.
          </p>
        </div>
      </div>
    </div>
  );
}