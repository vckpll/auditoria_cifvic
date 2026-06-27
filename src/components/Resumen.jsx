import React from 'react';
import { Plane, Database, ShieldCheck, AlertTriangle } from 'lucide-react';

export default function Resumen() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      {/* Tarjeta de Presentación Corporativa */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-blue-100 text-blue-600 rounded-xl">
            <Plane size={32} />
          </div>
          <div>
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              AeroAustral Líneas Aéreas S.A.
            </h1>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
              Código de Entidad: E06 • Rubro: Transporte Aéreo / Aerolínea
            </p>
          </div>
        </div>

        <p className="text-slate-600 leading-relaxed text-lg mb-6">
          Este informe técnico detalla la auditoría de seguridad realizada sobre el Portal de Clientes de 
          <strong> AeroAustral</strong>. Al operar en la industria aeronáutica, la plataforma procesa 
          transacciones financieras de alta cuantía, datos migratorios regulados y la logística de 
          itinerarios en tiempo real. Un fallo en este sistema no solo compromete la privacidad, sino 
          también la continuidad operacional de la aerolínea.
        </p>
      </div>

      {/* Identificación y Clasificación de Activos */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-amber-100 text-amber-600 rounded-xl">
            <Database size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">
              Clasificación de Activos de Información (CIA)
            </h2>
            <p className="text-sm text-slate-500">
              Identificación de los activos críticos expuestos en el portal de la aerolínea.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">ACT-01</span>
            <h3 className="font-bold text-slate-800 mt-2">Base de Datos de Reservas e Itinerarios</h3>
            <p className="text-xs text-slate-500 mt-1">Contiene las asignaciones de vuelos, escalas y manifiestos de pasajeros.</p>
            <div className="mt-3 flex space-x-2 text-xs font-mono">
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">C: ALTA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">I: CRÍTICA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">A: CRÍTICA</span>
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">ACT-02</span>
            <h3 className="font-bold text-slate-800 mt-2">Registros de Pasaportes y Datos Migratorios</h3>
            <p className="text-xs text-slate-500 mt-1">Información de identidad sensible requerida por aduanas y la DGAC.</p>
            <div className="mt-3 flex space-x-2 text-xs font-mono">
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">C: CRÍTICA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">I: ALTA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">A: MEDIA</span>
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">ACT-03</span>
            <h3 className="font-bold text-slate-800 mt-2">Pasarela de Pagos (Tokens de Tarjetas bancarias)</h3>
            <p className="text-xs text-slate-500 mt-1">Datos transaccionales de compra de pasajes y servicios complementarios.</p>
            <div className="mt-3 flex space-x-2 text-xs font-mono">
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">C: CRÍTICA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">I: CRÍTICA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">A: ALTA</span>
            </div>
          </div>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <span className="text-xs font-bold bg-blue-100 text-blue-800 px-2.5 py-0.5 rounded-full">ACT-04</span>
            <h3 className="font-bold text-slate-800 mt-2">Cuentas y Millas del Programa "AeroAustral Club"</h3>
            <p className="text-xs text-slate-500 mt-1">Saldos de fidelización canjeables con valor financiero directo.</p>
            <div className="mt-3 flex space-x-2 text-xs font-mono">
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">C: ALTA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">I: ALTA</span>
              <span className="bg-red-50 text-red-700 px-2 py-0.5 rounded">A: MEDIA</span>
            </div>
          </div>
        </div>
      </div>

      {/* SECCIÓN ACTUALIZADA: Matriz Completa de Control de Riesgos */}
      <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
        <div className="flex items-center space-x-4 mb-6">
          <div className="p-3 bg-red-100 text-red-600 rounded-xl">
            <AlertTriangle size={32} />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Matriz de Evaluación de Riesgos</h2>
            <p className="text-sm text-slate-500">
              Análisis completo de amenazas reales bajo el estándar de gestión de incidentes del portal.
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-slate-200 text-sm text-left">
            <thead className="bg-slate-900 text-white font-semibold">
              <tr>
                <th className="p-4 rounded-tl-lg">ID Amenaza</th>
                <th className="p-4">Vulnerabilidad / Amenaza</th>
                <th className="p-4">Activo Expuesto</th>
                <th className="p-4 text-center">Riesgo Inherente<br/><span className="text-xs text-slate-400">(Sin Controles)</span></th>
                <th className="p-4 text-center">Riesgo Residual<br/><span className="text-xs text-slate-400">(Con Mitigación)</span></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-medium">
              {/* 1. SQLi */}
              <tr>
                <td className="p-4 font-mono font-bold text-slate-600">AM-SQLi</td>
                <td className="p-4 text-slate-700">Inyección de código malicioso en el formulario de reservas (Laboratorio 1).</td>
                <td className="p-4 text-slate-500">ACT-01 / ACT-02</td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md shadow-xs">
                    CRÍTICO
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md shadow-xs">
                    BAJO
                  </span>
                </td>
              </tr>
              {/* 2. XSS */}
              <tr>
                <td className="p-4 font-mono font-bold text-slate-600">AM-XSS</td>
                <td className="p-4 text-slate-700">Ejecución de scripts reflejados en el buscador de la app (Laboratorio 2).</td>
                <td className="p-4 text-slate-500">ACT-04 / Sesiones</td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-amber-500 text-white text-xs font-bold rounded-md shadow-xs">
                    MEDIO
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md shadow-xs">
                    BAJO
                  </span>
                </td>
              </tr>
              {/* 3. DoS */}
              <tr>
                <td className="p-4 font-mono font-bold text-slate-600">AM-DoS</td>
                <td className="p-4 text-slate-700">Saturación por denegación de servicio distribuido que impide comprar pasajes.</td>
                <td className="p-4 text-slate-500">ACT-01 (Disponibilidad)</td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-md shadow-xs">
                    ALTO
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md shadow-xs">
                    BAJO
                  </span>
                </td>
              </tr>
              {/* 4. MitM */}
              <tr>
                <td className="p-4 font-mono font-bold text-slate-600">AM-Mitm</td>
                <td className="p-4 text-slate-700">Interceptación del tráfico de red en la pasarela por falta de cifrado TLS.</td>
                <td className="p-4 text-slate-500">ACT-03 (Tarjetas)</td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-md shadow-xs">
                    CRÍTICO
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md shadow-xs">
                    BAJO
                  </span>
                </td>
              </tr>
              {/* 5. Auth */}
              <tr>
                <td className="p-4 font-mono font-bold text-slate-600">AM-Auth</td>
                <td className="p-4 text-slate-700">Fuerza bruta automatizada para adivinar contraseñas de "AeroAustral Club".</td>
                <td className="p-4 text-slate-500">ACT-04 (Millas)</td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-md shadow-xs">
                    ALTO
                  </span>
                </td>
                <td className="p-4 text-center">
                  <span className="inline-block w-24 px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-md shadow-xs">
                    BAJO
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-start space-x-2 text-xs text-slate-500">
          <ShieldCheck className="text-emerald-600 shrink-0 mt-0.5" size={16} />
          <p>
            <strong>Nota de Auditoría ampliada:</strong> Cada control implementado sigue estrictamente los requerimientos 
            del proyecto (WAF de mitigación DDoS, HTTP Strict Transport Security para redes, y políticas robustas de Rate Limiting / MFA para accesos), logrando mitigar de manera eficiente el riesgo residual corporativo.
          </p>
        </div>
      </div>
    </div>
  );
}