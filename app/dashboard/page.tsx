"use client";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-extrabold font-sans text-white">COMMAND CENTER</h1>
          <p className="text-gray-400 font-mono text-sm mt-1">Selamat datang kembali, Kadet. Siap untuk misi hari ini?</p>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-xs text-gray-500 font-mono">SERVER TIME</div>
           <div className="text-xl font-bold text-holo font-mono">08:00 WIB</div>
        </div>
      </div>

      {/* STATS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { label: "SKD SCORE", value: "385", color: "text-white", border: "border-white/10" },
          { label: "RANKING NASIONAL", value: "#1,204", color: "text-holo", border: "border-holo/30" },
          { label: "MISI SELESAI", value: "12/50", color: "text-white", border: "border-white/10" },
          { label: "STATUS KELULUSAN", value: "45%", color: "text-laser", border: "border-laser/50" },
        ].map((stat, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`p-6 bg-black/40 backdrop-blur border ${stat.border} rounded-xl`}
          >
            <div className="text-xs text-gray-500 font-mono mb-2">{stat.label}</div>
            <div className={`text-3xl font-bold font-sans ${stat.color}`}>{stat.value}</div>
          </motion.div>
        ))}
      </div>

      {/* ACTIVE MISSION & HISTORY */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 h-[400px]">
        
        {/* Left: Next Mission */}
        <div className="lg:col-span-2 p-8 bg-gradient-to-br from-white/5 to-transparent border border-white/10 rounded-2xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-4 opacity-10 text-9xl">🎯</div>
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <span className="w-2 h-6 bg-laser block"></span>
            MISI PRIORITAS
          </h2>
          <div className="space-y-4">
             <div className="p-4 bg-black/50 border border-white/10 rounded-lg flex justify-between items-center">
                <div>
                   <div className="text-laser font-bold font-mono text-xs mb-1">DAILY QUEST</div>
                   <div className="text-white font-bold">Simulasi TIU: Logika Aritmatika</div>
                </div>
                <button className="bg-white text-black px-4 py-2 text-xs font-bold rounded hover:bg-gray-200">
                  MULAI (15 MENIT)
                </button>
             </div>
             <div className="p-4 bg-black/50 border border-white/10 rounded-lg flex justify-between items-center opacity-50">
                <div>
                   <div className="text-gray-500 font-bold font-mono text-xs mb-1">WEEKLY QUEST</div>
                   <div className="text-gray-400 font-bold">Try Out Akbar SKD Batch 2</div>
                </div>
                <button className="border border-white/20 text-gray-400 px-4 py-2 text-xs font-bold rounded cursor-not-allowed">
                  LOCKED
                </button>
             </div>
          </div>
        </div>

        {/* Right: Radar/Info */}
        <div className="p-6 bg-void border border-white/10 rounded-2xl flex flex-col items-center justify-center text-center relative">
           <div className="w-32 h-32 rounded-full border-4 border-white/5 flex items-center justify-center relative mb-4">
              <div className="w-24 h-24 rounded-full border-t-4 border-laser animate-spin absolute"></div>
              <div className="text-2xl font-bold text-white">45%</div>
           </div>
           <h3 className="text-white font-bold mb-1">PELUANG LULUS</h3>
           <p className="text-xs text-gray-500 px-4">Tingkatkan skor TIU Anda untuk menembus zona aman (Passing Grade).</p>
        </div>

      </div>

    </div>
  );
}