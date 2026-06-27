import React, { useState } from 'react';
import { ShieldAlert, Terminal, AlertTriangle } from 'lucide-react';
import fotoSqli from '../assets/sqli_evidencia.png';

export default function InyeccionSQL() {
  const [payload, setPayload] = useState("");
  const [exito, setExito] = useState(false);

  const handleSimular = (e) => {
    e.preventDefault();
    if (payload.trim() === "' OR '1'='1") {
      setExito(true);
    } else {
      setExito(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Encabezado e info de vulnerabilidad */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex items-center justify-between mb-6 flex-wrap gap-4">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-xl">
              <ShieldAlert size={32} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Inyección SQL (SQLi)</h2>
              <p className="text-sm text-slate-500">Vulnerabilidad de Inyección de Código Crítica</p>
            </div>
          </div>
          <span className="bg-red-100 text-red-800 text-xs font-mono font-bold px-3 py-1.5 rounded-full border border-red-200">
            Métrica CVSS v3.1: 9.8 (CRÍTICA)
          </span>
        </div>

        {/* Bloque de dos columnas: Explicación vs Foto DVWA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 text-sm space-y-4">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Explicación Técnica:</h4>
              <p className="text-slate-600 leading-relaxed">
                La aplicación en el portal de AeroAustral concatena directamente la entrada del usuario en la consulta SQL sin sanitizar. 
                Al ingresar una comilla simple (<code className="bg-slate-200 px-1 rounded">'</code>), se rompe la lógica y se inyecta la condición 
                <code className="bg-slate-200 px-1 rounded">OR '1'='1</code>, forzando a la base de datos a retornar todos los registros de los pasajeros.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">Mitigación OWASP:</h4>
              <p className="text-slate-600 leading-relaxed">
                Implementar <strong>Consultas Parametrizadas (Prepared Statements)</strong>. Esto obliga al motor de la base de datos a tratar 
                cualquier entrada estrictamente como un parámetro de datos y nunca como código ejecutable.
              </p>
            </div>
          </div>

          {/* Contenedor de la Imagen Real de DVWA */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col justify-center text-center">
            <h4 className="font-bold text-slate-800 mb-2 text-sm">Evidencia de Laboratorio Real (DVWA):</h4>
            <img 
              src={fotoSqli} 
              alt="Evidencia Inyección SQL" 
              className="rounded-lg shadow-md border border-slate-300 max-h-56 mx-auto object-contain bg-white"
            />
          </div>
        </div>

        {/* Laboratorio de Simulación Interactivo */}
        <div className="border border-slate-200 rounded-xl p-6 bg-white shadow-xs">
          <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
            <Terminal size={18} className="text-blue-500" /> 
            Laboratorio de Simulación: Consulta de Pasajes AeroAustral
          </h3>
          
          <form onSubmit={handleSimular} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-500 uppercase mb-2">
                Ingresa Código de Reserva o Payload (DVWA):
              </label>
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={payload}
                  onChange={(e) => setPayload(e.target.value)}
                  placeholder="Ej: AA-4521 o el payload de la guía..."
                  className="flex-1 p-2.5 border border-slate-300 rounded-lg text-sm bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-hidden font-mono"
                />
                <button 
                  type="submit"
                  className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 text-sm font-medium rounded-lg transition-colors"
                >
                  Ejecutar Consulta
                </button>
              </div>
              <p className="text-xs text-slate-400 mt-2">
                Pista para evaluación: Copia y pega exactamente el payload de la guía: <code className="bg-slate-100 px-1 font-bold rounded text-slate-700">' OR '1'='1</code>
              </p>
            </div>
          </form>

          {exito && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-xl">
              <div className="flex items-start space-x-3">
                <AlertTriangle className="text-red-600 shrink-0 mt-0.5" size={20} />
                <div>
                  <h4 className="font-bold text-red-900 text-sm">¡Bypass Exitoso! Vulnerabilidad Explotada</h4>
                  <p className="text-xs text-red-700 mt-1 mb-3">
                    La consulta SQL se transformó internamente. Se ha vulnerado el activo <strong>ACT-01 (BD de Reservas)</strong>.
                  </p>
                  <div className="overflow-x-auto bg-slate-900 text-emerald-400 p-3 rounded-lg font-mono text-xs space-y-1 shadow-inner">
                    <p className="text-slate-500 border-b border-slate-800 pb-1 mb-1">OUTPUT_SQL_DUMP:</p>
                    <p>[ID: 01] RUT: 14.322.111-K | Nombre: Juan Pérez | Vuelo: AA-204 | Asiento: 12B</p>
                    <p>[ID: 02] RUT: 18.544.933-2 | Nombre: Maria Soto | Vuelo: AA-102 | Asiento: 03A</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}