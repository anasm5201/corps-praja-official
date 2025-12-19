"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* HEADER: SALAM KOMANDO */}
      <div className="flex justify-between items-end border-b border-white/10 pb-6">
        <div>
          <h1 className="text-3xl font-extrabold font-sans text-white tracking-wider">COMMAND CENTER</h1>
          <p className="text-gray-400 font-mono text-sm mt-1">Selamat datang kembali, Kadet. Siap untuk misi hari ini?</p>
        </div>
        <div className="text-right hidden md:block">
           <div className="text-3xl font-bold text-white font-mono">08:00 WIB</div>
        </div>
      </div>

      {/* STATS ROW */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
         {[
           { label: "SKD SCORE", val: "385", color: "text-white" },
           { label: "RANKING NASIONAL", val: "#1,204", color: "text-white" },
           { label: "MISI SELESAI", val: "12/50", color: "text-white" },
           { label: "STATUS KELULUSAN", val: "45%", color: "text-white" }
         ].map((stat, i) => (
           <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl hover:border-laser transition-colors">
              <div className="text-xs font-bold text-gray-500 mb-1 font-mono">{stat.label}</div>
              <div className={`text-3xl font-bold ${stat.color} font-sans`}>{stat.val}</div>
           </div>
         ))}
      </div>

      {/* MAIN MISSION AREA */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left: Next Mission */}
        <div className="md:col-span-2 bg-gradient-to-br from-white/5 to-black border border-white/10 rounded-2xl p-8 relative overflow-hidden group">
           <div className="absolute right-0 top-0 w-64 h-64 bg-laser/20 blur-[100px] rounded-full group-hover:bg-laser/30 transition-all"></div>
           <div className="relative z-10">
              <h2 className="text-xl font-bold text-white mb-6 font-sans">MISI PRIORITAS</h2>
              
              <div className="bg-black/50 border border-white/10 p-4 rounded-xl mb-4 flex justify-between items-center">
                 <div>
                    <div className="text-xs text-gray-400 font-mono mb-1">DAILY QUEST</div>
                    <div className="text-white font-bold">Simulasi TIU: Logika Aritmatika</div>
                 </div>
                 <Link href="/dashboard/mission">
                    <button className="bg-white text-black px-4 py-2 rounded text-xs font-bold hover:scale-105 transition-transform">MULAI (15 MENIT)</button>
                 </Link>
              </div>

              <div className="bg-black/30 border border-white/5 p-4 rounded-xl flex justify-between items-center opacity-50">
                 <div>
                    <div className="text-xs text-gray-500 font-mono mb-1">WEEKLY QUEST</div>
                    <div className="text-gray-400 font-bold">Try Out Akbar SKD Batch 2</div>
                 </div>
                 <button className="border border-white/20 text-gray-500 px-4 py-2 rounded text-xs font-bold cursor-not-allowed">LOCKED</button>
              </div>
           </div>
        </div>

        {/* Right: Progress Circle */}
        <div className="bg-black border border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center relative">
           <div className="w-32 h-32 rounded-full border-4 border-white/10 flex items-center justify-center relative">
              <div className="absolute inset-0 border-4 border-t-white border-r-white border-b-transparent border-l-transparent rounded-full rotate-45"></div>
              <div className="text-2xl font-bold text-white">45%</div>
           </div>
           <h3 className="text-white font-bold mt-6">PELUANG LULUS</h3>
           <p className="text-gray-500 text-xs mt-2 max-w-[200px]">Tingkatkan skor TIU Anda untuk menembus zona aman (Passing Grade).</p>
        </div>

      </div>
    </div>
  );
}