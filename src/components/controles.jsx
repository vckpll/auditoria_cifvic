import React from 'react';

export default function Controles() {
  return (
    <div className="p-6 space-y-6">
      <div className="border border-emerald-500/20 rounded-xl p-6 bg-slate-900/40">
        <h2 className="text-xl font-black text-white mb-2">Controles de Mitigación</h2>
        <p className="text-slate-400 text-sm">Medidas de seguridad implementadas en la infraestructura de AeroAustral.</p>
      </div>

      <div className="grid gap-4">
        <div className="bg-slate-900/30 p-4 rounded-lg border-l-4 border-emerald-500">
          <h4 className="text-white font-bold">Firewall de Aplicaciones (WAF)</h4>
          <p className="text-slate-400 text-xs mt-1">Protección perimetral ante ataques de inyección y denegación de servicio.</p>
        </div>
        <div className="bg-slate-900/30 p-4 rounded-lg border-l-4 border-emerald-500">
          <h4 className="text-white font-bold">Cifrado de Datos en Reposo</h4>
          <p className="text-slate-400 text-xs mt-1">Implementación de AES-256 para bases de datos de pasajeros.</p>
        </div>
      </div>
    </div>
  );
}