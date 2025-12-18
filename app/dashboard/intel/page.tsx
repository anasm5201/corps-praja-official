"use client";
import { motion } from "framer-motion";

export default function IntelPage() {
  const modules = [
    { title: "Pilar Negara (Pancasila)", category: "TWK", type: "PDF", status: "UNLOCKED" },
    { title: "Logika Numerik Dasar", category: "TIU", type: "VIDEO", status: "UNLOCKED" },
    { title: "Jejaring Kerja (Networking)", category: "TKP", type: "PDF", status: "LOCKED" },
    { title: "Sejarah Pergerakan Nasional", category: "TWK", type: "VIDEO", status: "UNLOCKED" },
    { title: "Analogi Verbal", category: "TIU", type: "QUIZ", status: "LOCKED" },
    { title: "Integritas & Anti-Korupsi", category: "TWK", type: "PDF", status: "UNLOCKED" },
  ];

  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold font-sans text-white tracking-wider">INTEL DATABASE</h1>
          <p className="text-gray-400 font-mono text-sm mt-1">Akses materi rahasia untuk persiapan operasi seleksi.</p>
        </div>
      </div>

      {/* FILTER TABS (Visual Only) */}
      <div className="flex gap-4">
         {['SEMUA', 'TWK (NASIONALISME)', 'TIU (INTELIGENSI)', 'TKP (KEPRIBADIAN)'].map((tab, i) => (
            <button key={i} className={`px-4 py-2 rounded text-xs font-bold font-mono transition-all ${i === 0 ? 'bg-laser text-white' : 'bg-white/5 text-gray-400 hover:text-white'}`}>
                {tab}
            </button>
         ))}
      </div>

      {/* MODULES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((modul, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
            className={`relative group p-6 bg-black/40 border ${modul.status === 'LOCKED' ? 'border-white/5 opacity-50' : 'border-white/10 hover:border-laser'} rounded-xl transition-all cursor-pointer`}
          >
            {/* Status Badge */}
            <div className="absolute top-4 right-4">
                {modul.status === 'LOCKED' ? (
                    <span className="text-xs font-mono text-gray-600">🔒 ENCRYPTED</span>
                ) : (
                    <span className="text-xs font-mono text-holo animate-pulse">● ACCESSIBLE</span>
                )}
            </div>

            {/* Icon Type */}
            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl mb-4 ${modul.status === 'LOCKED' ? 'bg-white/5 text-gray-600' : 'bg-white/10 text-white group-hover:bg-laser group-hover:text-white transition-colors'}`}>
                {modul.type === 'PDF' && '📄'}
                {modul.type === 'VIDEO' && '▶️'}
                {modul.type === 'QUIZ' && '📝'}
            </div>

            {/* Category Tag */}
            <div className={`inline-block px-2 py-1 rounded text-[10px] font-bold tracking-wider mb-2 ${
                modul.category === 'TWK' ? 'bg-red-900/30 text-red-400' :
                modul.category === 'TIU' ? 'bg-blue-900/30 text-blue-400' :
                'bg-green-900/30 text-green-400'
            }`}>
                // {modul.category}
            </div>

            <h3 className="text-lg font-bold text-white font-sans">{modul.title}</h3>
            <p className="text-gray-500 text-xs font-mono mt-2">Update: 10 Menit yang lalu</p>

            {/* Hover Effect Line */}
            <div className="absolute bottom-0 left-0 h-1 bg-laser w-0 group-hover:w-full transition-all duration-300 rounded-b-xl"></div>
          </motion.div>
        ))}
      </div>

    </div>
  );
}