import React from 'react';

export default function Recuperacion() {
  return (
    <div className="p-6 space-y-6">
      <div className="border border-amber-500/20 rounded-xl p-6 bg-slate-900/40">
        <h2 className="text-xl font-black text-white mb-2">Plan de Recuperación (DRP)</h2>
        <p className="text-slate-400 text-sm">Estrategias de continuidad ante fallos críticos en AeroAustral.</p>
      </div>

      <div className="p-6 bg-slate-950 rounded-xl border border-white/5 space-y-4">
        <h3 className="text-amber-400 font-bold uppercase text-xs tracking-widest">// Procedimiento</h3>
        <ul className="list-decimal list-inside text-slate-300 text-sm space-y-2">
          <li>Activación de servidores en región redundante (Failover).</li>
          <li>Restauración de backups sincronizados de las últimas 24 horas.</li>
          <li>Notificación a stakeholders y comunicación de crisis.</li>
        </ul>
      </div>
    </div>
  );
}