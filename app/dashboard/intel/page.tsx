"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// DATA MATERI (Nanti bisa dari Database)
const materials = [
  {
    id: "TWK",
    title: "TWK - WAWASAN KEBANGSAAN",
    color: "bg-red-900/50 border-red-500",
    icon: "🇮🇩",
    topics: [
      { title: "Pilar Negara: Pancasila", content: "Pancasila adalah dasar ideologi negara. Sila ke-1: Ketuhanan (Bintang), Sila ke-2: Kemanusiaan (Rantai), Sila ke-3: Persatuan (Pohon Beringin), Sila ke-4: Kerakyatan (Kepala Banteng), Sila ke-5: Keadilan (Padi & Kapas)." },
      { title: "Sejarah: BPUPKI & PPKI", content: "BPUPKI (Dokuritsu Junbi Cosakai) dibentuk 1 Maret 1945. PPKI dibentuk 7 Agustus 1945 setelah BPUPKI dibubarkan." },
      { title: "UUD 1945 & Amandemen", content: "Amandemen dilakukan 4 kali (1999, 2000, 2001, 2002). Batang tubuh berubah menjadi pasal-pasal." }
    ]
  },
  {
    id: "TIU",
    title: "TIU - INTELEGENSIA UMUM",
    color: "bg-yellow-900/50 border-yellow-500",
    icon: "🧠",
    topics: [
      { title: "Verbal: Analogi", content: "Tips: Buat kalimat penghubung. Contoh: KITA : BATA = ... (Jawaban: SEMEN : BETON). Hubungan: Bahan bangunan." },
      { title: "Numerik: Deret Angka", content: "Cari pola: Loncat 1, Loncat 2, Fibonacci, atau Pola Bertingkat. Jangan terpaku pada satu pola saja." },
      { title: "Logika: Silogisme", content: "Semua A adalah B. Sebagian B adalah C. Kesimpulan: Sebagian A adalah C (Salah/Benar tergantung premis)." }
    ]
  },
  {
    id: "TKP",
    title: "TKP - KARAKTERISTIK PRIBADI",
    color: "bg-green-900/50 border-green-500",
    icon: "🤝",
    topics: [
      { title: "Pelayanan Publik", content: "Kata kunci: Kepuasan masyarakat, ramah, cekatan, solutif. Pilih jawaban yang paling menguntungkan orang banyak." },
      { title: "Jejaring Kerja", content: "Kata kunci: Koneksi, kerjasama, tidak egois. Pilih jawaban yang menunjukkan sikap terbuka dan kolaboratif." },
      { title: "Profesionalisme", content: "Kata kunci: Fokus tugas, tidak terganggu urusan pribadi. Utamakan pekerjaan di atas kepentingan lain saat jam kerja." }
    ]
  }
];

export default function IntelPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="space-y-8 pb-20">
      {/* HEADER */}
      <div>
        <div className="inline-block px-3 py-1 bg-laser/20 border border-laser text-laser text-xs font-mono mb-2 rounded tracking-widest">
          TOP SECRET // EYES ONLY
        </div>
        <h1 className="text-3xl font-extrabold text-white tracking-wider font-sans">INTEL LIBRARY</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">Arsip materi strategis untuk menaklukkan soal SKD.</p>
      </div>

      {/* GRID KATEGORI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {materials.map((item) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setSelectedCategory(selectedCategory === item.id ? null : item.id)}
            className={`cursor-pointer p-6 rounded-xl border-2 transition-all ${
              selectedCategory === item.id 
                ? `${item.color} shadow-[0_0_30px_rgba(255,255,255,0.1)]` 
                : 'bg-white/5 border-white/10 hover:border-white/30'
            }`}
          >
            <div className="text-4xl mb-4">{item.icon}</div>
            <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
            <p className="text-xs text-gray-400 font-mono">Klik untuk membuka berkas rahasia.</p>
          </motion.div>
        ))}
      </div>

      {/* DETAIL MATERI (ACCORDION) */}
      <AnimatePresence mode="wait">
        {selectedCategory && (
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="bg-black border border-white/10 rounded-2xl p-8 relative overflow-hidden"
          >
            {/* Hiasan Scanline */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-scan"></div>

            <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4">
              DOKUMEN: {materials.find(m => m.id === selectedCategory)?.title}
            </h3>

            <div className="space-y-4">
              {materials.find(m => m.id === selectedCategory)?.topics.map((topic, idx) => (
                <div key={idx} className="bg-white/5 p-4 rounded-lg border-l-4 border-white/20 hover:bg-white/10 transition-colors">
                  <h4 className="text-laser font-bold text-lg mb-2 flex items-center gap-2">
                    <span className="text-xs bg-laser text-white px-2 rounded">BAB 0{idx + 1}</span>
                    {topic.title}
                  </h4>
                  <p className="text-gray-300 leading-relaxed text-sm font-mono">
                    {topic.content}
                  </p>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setSelectedCategory(null)}
              className="mt-8 text-gray-500 text-sm hover:text-white flex items-center gap-2"
            >
              🔒 TUTUP DOKUMEN
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* GAMIFICATION BANNER */}
      {!selectedCategory && (
        <div className="mt-12 p-8 border border-dashed border-white/20 rounded-xl text-center">
            <h3 className="text-gray-500 font-bold mb-2">AKSES MATERI PREMIUM?</h3>
            <p className="text-gray-600 text-sm mb-4">Upgrade ke Elite Squad untuk membuka 500+ modul video dan PDF lengkap.</p>
            <button className="px-6 py-2 bg-white/10 text-gray-400 rounded cursor-not-allowed">SEGERA HADIR</button>
        </div>
      )}
    </div>
  );
}