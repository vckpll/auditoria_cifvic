import React, { useState } from 'react';
import { ShieldAlert, Terminal, Code } from 'lucide-react';
import fotoXss from '../assets/xss_evidencia.png';

export default function XssReflected() {
  const [payload, setPayload] = useState("");
  const [resultado, setResultado] = useState("");

  const handleSimular = (e) => {
    e.preventDefault();
    if (payload.includes("<script>")) {
      setResultado("Alerta activada: " + payload);
    } else {
      setResultado(payload);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Encabezado e info de vulnerabilidad */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-orange-100 text-orange-600 rounded-xl">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Cross-Site Scripting Reflejado (XSS)</h2>
              <p className="text-sm text-slate-500">Vulnerabilidad de Inyección de Scripts del Lado del Cliente</p>
            </div>
          </div>
          <span className="bg-orange-100 text-orange-800 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-orange-200">
            Métrica CVSS v3.1: 6.1 (MEDIA)
          </span>
        </div>

        {/* Bloque de dos columnas: Explicación vs Foto DVWA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Explicación Técnica:</h4>
              <p className="text-slate-600 leading-relaxed">
                El buscador de AeroAustral recibe datos del usuario y los muestra de vuelta en la pantalla sin sanitizar. 
                Al ingresar etiquetas <code className="bg-slate-200 px-1 rounded">&lt;script&gt;</code>, el navegador las confunde con código ejecutable real y corre las instrucciones de JavaScript inmediatamente.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Mitigación OWASP:</h4>
              <p className="text-slate-600 leading-relaxed">
                Implementar <strong>Context-Aware Output Encoding</strong>. Esto convierte caracteres especiales como 
                <code className="bg-slate-200 px-1 rounded">&lt;</code> en texto plano inofensivo (<code className="bg-slate-200 px-1 rounded">&amp;lt;</code>), evitando su ejecución.
              </p>
            </div>
          </div>

          {/* Contenedor de la Imagen Real de DVWA */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center text-center">
            <h4 className="font-bold text-slate-800 mb-2 text-sm">Evidencia de Laboratorio Real (DVWA):</h4>
            <img 
              src={fotoXss} 
              alt="Evidencia XSS Reflejado" 
              className="rounded-lg shadow-md border border-slate-300 max-h-56 mx-auto object-contain bg-white"
            />
          </div>
        </div>

        {/* Laboratorio de Simulación Interactivo */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-orange-500" /> 
            Laboratorio de Simulación: Saludo Personalizado de Pasajeros
          </h3>
          
          <form onSubmit={handleSimular} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">
                Ingresa Nombre del Pasajero o Payload (DVWA):
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  placeholder="Ej: Vicente Cifuentes o el script de la guía..."
                  className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-orange-500 outline-hidden font-mono"
                />
                <button 
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-sm font-medium rounded-lg transition-colors"
                >
                  Enviar Datos
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Pista para evaluación: Copia y pega el payload que usaste en clase: <code className="bg-slate-100 px-1 font-bold rounded text-slate-700">&lt;script&gt;alert('XSS')&lt;/script&gt;</code>
              </p>
            </div>
          </form>

          {resultado && (
            <div className="mt-6 p-4 bg-orange-50 border border-orange-200 rounded-xl">
              <h4 className="font-bold text-orange-900 text-sm flex items-center gap-2">
                <Code size={16} /> Resultado del Renderizado en Navegador:
              </h4>
              <div className="mt-2 p-3 bg-white rounded-lg border border-orange-200 font-mono text-xs text-slate-700">
                {resultado}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}