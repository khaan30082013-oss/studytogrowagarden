import React from 'react';

interface GeometryDiagramProps {
  type?: 'quadrilateral' | 'trapezoid' | 'parallelogram' | 'thales' | 'pythagoras' | 'pyramid' | 'coordinate' | 'chart';
  data?: Record<string, any>;
}

export const GeometryDiagram: React.FC<GeometryDiagramProps> = ({ type, data }) => {
  if (!type) return null;

  switch (type) {
    case 'quadrilateral':
      return (
        <div className="my-3 flex flex-col items-center justify-center p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
          <svg viewBox="0 0 280 180" className="w-64 h-40 max-w-full drop-shadow-sm">
            {/* Polygon ABCD */}
            <polygon
              points="40,140 230,150 200,40 70,50"
              fill="#dcfce7"
              stroke="#059669"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Vertices */}
            <circle cx="70" cy="50" r="4" fill="#047857" />
            <circle cx="200" cy="40" r="4" fill="#047857" />
            <circle cx="230" cy="150" r="4" fill="#047857" />
            <circle cx="40" cy="140" r="4" fill="#047857" />
            
            {/* Vertex Labels */}
            <text x="60" y="38" className="font-bold fill-slate-800 text-sm">A ({data?.a || '110'}°)</text>
            <text x="208" y="38" className="font-bold fill-slate-800 text-sm">B ({data?.b || '120'}°)</text>
            <text x="238" y="155" className="font-bold fill-slate-800 text-sm">C ({data?.c || '80'}°)</text>
            <text x="15" y="152" className="font-bold fill-amber-700 text-sm">D ({data?.d || '?'}°)</text>

            {/* Optional Diagonal */}
            <line x1="70" y1="50" x2="230" y2="150" stroke="#10b981" strokeDasharray="4 3" strokeWidth="1.5" />
          </svg>
          <span className="text-xs text-emerald-800 font-medium mt-1">Hình minh họa: Tứ giác ABCD (Tổng 4 góc = 360°)</span>
        </div>
      );

    case 'thales':
      return (
        <div className="my-3 flex flex-col items-center justify-center p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
          <svg viewBox="0 0 280 190" className="w-64 h-44 max-w-full drop-shadow-sm">
            {/* Triangle ABC */}
            <polygon
              points="140,25 30,165 250,165"
              fill="#ecfdf5"
              stroke="#059669"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Line MN parallel to BC */}
            <line x1="70" y1="115" x2="210" y2="115" stroke="#dc2626" strokeWidth="2.5" />
            
            {/* Parallel markers */}
            <polygon points="135,112 145,115 135,118" fill="#dc2626" />
            <polygon points="135,162 145,165 135,168" fill="#059669" />

            {/* Vertices points */}
            <circle cx="140" cy="25" r="4" fill="#047857" />
            <circle cx="30" cy="165" r="4" fill="#047857" />
            <circle cx="250" cy="165" r="4" fill="#047857" />
            <circle cx="70" cy="115" r="4" fill="#dc2626" />
            <circle cx="210" cy="115" r="4" fill="#dc2626" />

            {/* Labels */}
            <text x="135" y="18" className="font-bold fill-slate-900 text-sm">A</text>
            <text x="15" y="172" className="font-bold fill-slate-900 text-sm">B</text>
            <text x="255" y="172" className="font-bold fill-slate-900 text-sm">C</text>
            <text x="50" y="112" className="font-bold fill-rose-700 text-sm">M</text>
            <text x="220" y="112" className="font-bold fill-rose-700 text-sm">N</text>

            {/* Segment length labels */}
            <text x="85" y="65" className="font-semibold fill-slate-700 text-xs">{data?.ad || data?.dm || '2'}</text>
            <text x="35" y="142" className="font-semibold fill-slate-700 text-xs">{data?.db || data?.me || '4'}</text>
            <text x="180" y="65" className="font-semibold fill-slate-700 text-xs">{data?.ae || data?.dn || '3'}</text>
            <text x="235" y="142" className="font-bold fill-amber-700 text-xs">{data?.ec || data?.nf || '?'}</text>
          </svg>
          <span className="text-xs text-emerald-800 font-medium mt-1">Định lí Thalès: MN // BC ⇒ AM/MB = AN/NC</span>
        </div>
      );

    case 'pythagoras':
      return (
        <div className="my-3 flex flex-col items-center justify-center p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
          <svg viewBox="0 0 280 180" className="w-64 h-40 max-w-full drop-shadow-sm">
            {/* Right Triangle ABC */}
            <polygon
              points="50,150 220,150 50,40"
              fill="#ecfdf5"
              stroke="#059669"
              strokeWidth="2.5"
              strokeLinejoin="round"
            />
            {/* Right angle marker at A */}
            <rect x="50" y="135" width="15" height="15" fill="none" stroke="#047857" strokeWidth="1.5" />
            <circle cx="58" cy="142" r="1.5" fill="#047857" />

            {/* Vertices */}
            <circle cx="50" cy="150" r="4" fill="#047857" />
            <circle cx="220" cy="150" r="4" fill="#047857" />
            <circle cx="50" cy="40" r="4" fill="#047857" />

            {/* Labels */}
            <text x="30" y="165" className="font-bold fill-slate-900 text-sm">A</text>
            <text x="228" y="160" className="font-bold fill-slate-900 text-sm">B</text>
            <text x="40" y="32" className="font-bold fill-slate-900 text-sm">C</text>

            {/* Edge labels */}
            <text x="130" y="170" className="font-semibold fill-emerald-800 text-sm">AB = {data?.ab || data?.de || '4 cm'}</text>
            <text x="10" y="100" className="font-semibold fill-emerald-800 text-sm">AC = {data?.ac || data?.df || '3 cm'}</text>
            <text x="145" y="90" className="font-bold fill-amber-700 text-sm">BC = {data?.bc || data?.ef || '5 cm'}</text>
          </svg>
          <span className="text-xs text-emerald-800 font-medium mt-1">Định lí Pythagore: BC² = AB² + AC²</span>
        </div>
      );

    case 'pyramid':
      return (
        <div className="my-3 flex flex-col items-center justify-center p-3 bg-emerald-50/80 rounded-xl border border-emerald-200">
          <svg viewBox="0 0 280 190" className="w-64 h-44 max-w-full drop-shadow-sm">
            {/* Pyramid S.ABC */}
            {/* Back base line (dashed) */}
            <line x1="60" y1="140" x2="220" y2="140" stroke="#059669" strokeDasharray="4 3" strokeWidth="1.5" />
            
            {/* Base front edges */}
            <polygon
              points="60,140 140,175 220,140"
              fill="#a7f3d0"
              fillOpacity="0.4"
              stroke="#059669"
              strokeWidth="2.5"
            />
            
            {/* Apex S */}
            <line x1="140" y1="20" x2="60" y2="140" stroke="#059669" strokeWidth="2.5" />
            <line x1="140" y1="20" x2="220" y2="140" stroke="#059669" strokeWidth="2.5" />
            <line x1="140" y1="20" x2="140" y2="175" stroke="#059669" strokeWidth="2.5" />

            {/* Height h from S down to H (dashed) */}
            <line x1="140" y1="20" x2="140" y2="150" stroke="#dc2626" strokeDasharray="3 3" strokeWidth="2" />
            <circle cx="140" cy="150" r="3" fill="#dc2626" />
            <text x="145" y="90" className="font-bold fill-rose-700 text-xs">h (chiều cao)</text>

            {/* Apothem d (trung đoạn) on front face (dashed) */}
            <line x1="140" y1="20" x2="100" y2="157" stroke="#2563eb" strokeDasharray="3 3" strokeWidth="2" />
            <text x="95" y="85" className="font-bold fill-blue-700 text-xs">d (trung đoạn)</text>

            {/* Vertices */}
            <circle cx="140" cy="20" r="4" fill="#047857" />
            <circle cx="60" cy="140" r="4" fill="#047857" />
            <circle cx="140" cy="175" r="4" fill="#047857" />
            <circle cx="220" cy="140" r="4" fill="#047857" />

            {/* Labels */}
            <text x="135" y="14" className="font-bold fill-slate-900 text-sm">S</text>
            <text x="45" y="145" className="font-bold fill-slate-900 text-sm">A</text>
            <text x="138" y="190" className="font-bold fill-slate-900 text-sm">B</text>
            <text x="228" y="145" className="font-bold fill-slate-900 text-sm">C</text>
          </svg>
          <span className="text-xs text-emerald-800 font-medium mt-1">Hình chóp tam giác đều S.ABC: Sxq = p · d, V = 1/3 S·h</span>
        </div>
      );

    default:
      return null;
  }
};
