"use client";
import { motion } from "framer-motion";

export default function RankingPage() {
  // Data Dummy Kadet (Nanti bisa diganti database asli)
  const topCadets = [
    { name: "Kadet Bima", score: 485, province: "JAWA BARAT", rank: 1, avatar: "🥇" },
    { name: "Kadet Sarah", score: 480, province: "DKI JAKARTA", rank: 2, avatar: "🥈" },
    { name: "Kadet Rizky", score: 475, province: "SUMATERA UTARA", rank: 3, avatar: "🥉" },
  ];

  const otherCadets = [
    { name: "Kadet Putri", score: 460, province: "BALI", rank: 4 },
    { name: "Kadet Johan", score: 455, province: "PAPUA", rank: 5 },
    { name: "Kadet Siti", score: 450, province: "ACEH", rank: 6 },
    { name: "Kadet Alex", score: 445, province: "SULAWESI SELATAN", rank: 7 },
    { name: "Kadet ANAS (ANDA)", score: 385, province: "JAWA BARAT", rank: 1204, isMe: true }, // Posisi User
  ];

  return (
    <div className="space-y-8">
      
      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-extrabold font-sans text-white tracking-widest">HALL OF FAME</h1>
        <p className="text-gray-400 font-mono text-sm mt-2">Peringkat Nasional Try Out SKD Batch 2</p>
      </div>

      {/* TOP 3 PODIUM */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end mb-12">
        {/* Juara 2 (Kiri) */}
        <div className="order-2 md:order-1 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-gray-400 bg-gray-900 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(156,163,175,0.5)]">
                {topCadets[1].avatar}
            </div>
            <div className="mt-4 bg-gray-900/80 border border-gray-600 p-4 rounded-xl text-center w-full">
                <div className="text-gray-400 font-bold text-xl">#2</div>
                <div className="text-white font-bold">{topCadets[1].name}</div>
                <div className="text-laser font-mono font-bold">{topCadets[1].score} PTS</div>
            </div>
        </div>

        {/* Juara 1 (Tengah - Paling Tinggi) */}
        <div className="order-1 md:order-2 flex flex-col items-center transform -translate-y-4">
            <div className="relative">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-2xl animate-bounce">👑</div>
                <div className="w-24 h-24 rounded-full border-4 border-yellow-500 bg-yellow-900/30 flex items-center justify-center text-4xl shadow-[0_0_30px_rgba(234,179,8,0.6)]">
                    {topCadets[0].avatar}
                </div>
            </div>
            <div className="mt-4 bg-gradient-to-b from-yellow-900/50 to-black border border-yellow-500 p-6 rounded-xl text-center w-full relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-400/10 animate-pulse"></div>
                <div className="relative z-10">
                    <div className="text-yellow-500 font-bold text-2xl">#1</div>
                    <div className="text-white font-bold text-lg">{topCadets[0].name}</div>
                    <div className="text-white font-mono font-bold text-xl">{topCadets[0].score} PTS</div>
                    <div className="text-[10px] text-gray-400 mt-1">{topCadets[0].province}</div>
                </div>
            </div>
        </div>

        {/* Juara 3 (Kanan) */}
        <div className="order-3 flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-4 border-orange-700 bg-gray-900 flex items-center justify-center text-3xl shadow-[0_0_20px_rgba(194,65,12,0.5)]">
                {topCadets[2].avatar}
            </div>
            <div className="mt-4 bg-gray-900/80 border border-orange-800 p-4 rounded-xl text-center w-full">
                <div className="text-orange-700 font-bold text-xl">#3</div>
                <div className="text-white font-bold">{topCadets[2].name}</div>
                <div className="text-laser font-mono font-bold">{topCadets[2].score} PTS</div>
            </div>
        </div>
      </div>

      {/* LIST PERINGKAT LAINNYA */}
      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
         <div className="grid grid-cols-12 gap-4 p-4 border-b border-white/10 text-gray-500 font-mono text-xs font-bold bg-black/50">
             <div className="col-span-2 md:col-span-1">RANK</div>
             <div className="col-span-6 md:col-span-7">NAMA KADET</div>
             <div className="col-span-4 md:col-span-4 text-right">SKOR SKD</div>
         </div>
         
         {otherCadets.map((cadet, i) => (
             <motion.div 
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`grid grid-cols-12 gap-4 p-4 border-b border-white/5 items-center hover:bg-white/5 transition-colors ${cadet.isMe ? 'bg-laser/10 border-l-4 border-l-laser' : ''}`}
             >
                 <div className={`col-span-2 md:col-span-1 font-bold ${cadet.isMe ? 'text-laser' : 'text-gray-400'}`}>#{cadet.rank}</div>
                 <div className="col-span-6 md:col-span-7">
                     <div className={`font-bold ${cadet.isMe ? 'text-white' : 'text-gray-300'}`}>
                        {cadet.name} {cadet.isMe && <span className="ml-2 text-[10px] bg-laser text-white px-1 rounded">YOU</span>}
                     </div>
                     <div className="text-[10px] text-gray-500">{cadet.province}</div>
                 </div>
                 <div className="col-span-4 md:col-span-4 text-right font-mono font-bold text-white">
                     {cadet.score}
                 </div>
             </motion.div>
         ))}
      </div>

    </div>
  );
}