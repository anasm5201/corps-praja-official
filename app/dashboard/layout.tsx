"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menuItems = [
    { name: "COMMAND CENTER", href: "/dashboard", icon: "🏠" },
    { name: "MISSION (TRY OUT)", href: "/dashboard/mission", icon: "🎯" },
    { name: "INTEL (MATERI)", href: "/dashboard/intel", icon: "📚" },
    { name: "RANKING", href: "/dashboard/ranking", icon: "🏆" },
    { name: "SETTINGS", href: "/dashboard/settings", icon: "⚙️" },
  ];

  return (
    <div className="flex h-screen bg-void text-white overflow-hidden">
      
      {/* --- SIDEBAR (TACTICAL MENU) --- */}
      <aside className="w-64 border-r border-white/10 bg-black/50 backdrop-blur-md hidden md:flex flex-col">
        
        {/* Logo Area */}
        <div className="h-20 flex items-center justify-center border-b border-white/5">
           <div className="relative w-10 h-10 mr-3">
             <Image src="/assets/logo.png" alt="Logo" fill className="object-contain" />
           </div>
           <span className="font-bold tracking-widest font-sans text-sm">CORPS PRAJA</span>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-8 px-4 space-y-2">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link 
                key={item.name} 
                href={item.href}
                className={`flex items-center gap-4 px-4 py-3 rounded text-sm font-mono transition-all ${
                  isActive 
                    ? "bg-laser/20 text-laser border border-laser/50 shadow-[0_0_15px_rgba(214,0,28,0.2)]" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <span>{item.icon}</span>
                {item.name}
              </Link>
            );
          })}
        </nav>

        {/* User Profile Mini (UPDATED) */}
        <div className="p-4 border-t border-white/10">
          <div className="flex items-center justify-between bg-white/5 p-3 rounded border border-white/5">
            
            {/* Bagian Foto & Nama */}
            <div className="flex items-center gap-3">
               <div className="relative w-10 h-10 rounded-full border border-white/20 overflow-hidden bg-white/10">
                  <Image src="/assets/satria.png" alt="Profile" fill className="object-cover" />
               </div>
               <div>
                 <div className="text-xs font-bold text-white">KADET ANAS</div>
                 <div className="text-[10px] text-holo">LEVEL 1 - ROOKIE</div>
               </div>
            </div>

            {/* Tombol Logout (Ikon Pintu) */}
            <Link href="/" className="p-2 text-gray-500 hover:text-red-500 transition-colors" title="Keluar Markas">
              🚪
            </Link>

          </div>
        </div>
      </aside>

      {/* --- MAIN CONTENT AREA --- */}
      <main className="flex-1 overflow-y-auto relative">
        {/* Background Grid di Dashboard */}
        <div className="absolute inset-0 bg-[url('/assets/grid.png')] opacity-5 pointer-events-none bg-[size:30px_30px]"></div>
        <div className="relative z-10 p-8">
            {children}
        </div>
      </main>

    </div>
  );
}