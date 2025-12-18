"use client";
import { useState } from "react";
import Image from "next/image";

export default function SettingsPage() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="space-y-8 max-w-4xl">
      
      {/* HEADER */}
      <div className="border-b border-white/10 pb-6">
        <h1 className="text-3xl font-extrabold font-sans text-white tracking-wider">CONFIGURATION</h1>
        <p className="text-gray-400 font-mono text-sm mt-1">Atur identitas agen dan preferensi sistem markas.</p>
      </div>

      {/* 1. IDENTITY PROTOCOL (Profil) */}
      <div className="p-8 bg-white/5 border border-white/10 rounded-xl">
        <h2 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
            <span className="w-2 h-6 bg-laser block"></span>
            IDENTITY PROTOCOL
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8 items-start">
            {/* Avatar Upload */}
            <div className="flex flex-col items-center gap-3">
                <div className="relative w-24 h-24 rounded-full border-2 border-dashed border-gray-500 flex items-center justify-center overflow-hidden group cursor-pointer hover:border-laser transition-colors">
                    {/* Placeholder Image */}
                    <Image src="/assets/satria.png" alt="Profile" fill className="object-cover opacity-50 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white opacity-0 group-hover:opacity-100 bg-black/50">
                        CHANGE
                    </div>
                </div>
                <div className="text-[10px] text-gray-500 font-mono">MAX: 2MB (JPG/PNG)</div>
            </div>

            {/* Form Fields */}
            <div className="flex-1 space-y-4 w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400">CODENAME (NAMA LENGKAP)</label>
                        <input type="text" defaultValue="Anas Kirsam" className="w-full bg-black border border-white/20 p-3 rounded text-white focus:border-laser focus:outline-none font-mono" />
                    </div>
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-gray-400">EMAIL ENCRYPTION</label>
                        <input type="email" defaultValue="anas@corpspraja.id" className="w-full bg-black border border-white/20 p-3 rounded text-gray-500 cursor-not-allowed font-mono" disabled />
                    </div>
                </div>
                <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-400">TARGET INSTANSI</label>
                    <select className="w-full bg-black border border-white/20 p-3 rounded text-white focus:border-laser focus:outline-none font-mono">
                        <option>IPDN (Institut Pemerintahan Dalam Negeri)</option>
                        <option>STIN (Sekolah Tinggi Intelijen Negara)</option>
                        <option>POLTEKIP/POLTEKIM</option>
                    </select>
                </div>
            </div>
        </div>
      </div>

      {/* 2. SYSTEM PREFERENCES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Notifications */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
             <h3 className="text-lg font-bold text-white mb-4">COMMS (NOTIFIKASI)</h3>
             <div className="space-y-4">
                 {['Info Try Out Terbaru', 'Pengingat Jadwal Belajar', 'Hasil Analisis Mingguan'].map((item, i) => (
                     <div key={i} className="flex justify-between items-center">
                         <span className="text-sm text-gray-300 font-mono">{item}</span>
                         <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" defaultChecked className="sr-only peer" />
                            <div className="w-11 h-6 bg-gray-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-holo"></div>
                         </label>
                     </div>
                 ))}
             </div>
          </div>

          {/* Security */}
          <div className="p-6 bg-white/5 border border-white/10 rounded-xl">
             <h3 className="text-lg font-bold text-white mb-4">SECURITY CLEARANCE</h3>
             <div className="space-y-4">
                 <button className="w-full py-3 border border-white/20 text-white rounded hover:bg-white/10 transition-all font-mono text-sm">
                    GANTI PASSWORD
                 </button>
                 <button className="w-full py-3 border border-red-900/50 text-red-500 rounded hover:bg-red-900/20 transition-all font-mono text-sm flex justify-center items-center gap-2">
                    ⚠ DELETE ACCOUNT
                 </button>
             </div>
          </div>

      </div>

      {/* SAVE BUTTON */}
      <div className="flex justify-end pt-4">
        <button className="bg-laser text-white px-8 py-3 rounded font-bold hover:bg-red-700 transition-all shadow-[0_0_20px_rgba(214,0,28,0.4)]">
            SIMPAN KONFIGURASI
        </button>
      </div>

    </div>
  );
}