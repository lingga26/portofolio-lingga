export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 bg-teal-500 relative overflow-hidden">
      {/* Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20" />
      
      <div className="text-center max-w-3xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Hi, Saya <span className="text-yellow-300">Lingga Nugraha Mandajaya</span>
        </h1>
        <p className="text-xl md:text-2xl text-teal-50 mb-6 font-semibold">
          Fresh Graduate Teknik Komputer | IoT, Machine Learning & IT Professional
        </p>
        <p className="text-base md:text-lg text-teal-100 mb-8 leading-relaxed max-w-2xl mx-auto">
          Lulusan S1 Teknik Komputer (IPK 3.3) dari Universitas Amikom Yogyakarta dengan spesialisasi pada sistem 
          <span className="font-bold text-yellow-200"> Internet of Things (IoT), Machine Learning</span>, dan 
          infrastruktur jaringan. Memiliki pengalaman praktis dalam pengembangan sistem embedded, analisis data, 
          serta pemeliharaan hardware/software. Memegang sertifikasi Cisco CCNA & IT Essentials. 
          Siap berkontribusi dalam membangun solusi teknologi yang inovatif, efisien, dan berdampak.
        </p>
        
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="#projects" className="px-8 py-3 bg-white text-teal-600 rounded-lg font-bold hover:bg-yellow-300 hover:text-teal-700 transition-all transform hover:scale-105 shadow-xl">
            Lihat Proyek
          </a>
          <a href="#contact" className="px-8 py-3 border-2 border-white text-white rounded-lg font-bold hover:bg-white hover:text-teal-600 transition-all transform hover:scale-105">
            Hubungi Saya
          </a>
          <a 
            href="/CV_Lingga-Nugraha-Mandajaya.pdf" 
            download="CV_Lingga_Nugraha_Mandajaya.pdf"
            className="px-8 py-3 bg-yellow-400 text-teal-900 rounded-lg font-bold hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl flex items-center gap-2"
          >
            <span></span>
            <span>Download CV</span>
          </a>
        </div>
      </div>
    </section>
  )
}