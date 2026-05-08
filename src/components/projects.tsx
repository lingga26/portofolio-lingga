// ✅ TIDAK PERLU import React - Vite sudah handle JSX otomatis

const projects = [
  {
    id: 1,
    name: "CMS Dashboard",
    description: "Content Management System untuk pengelolaan konten iklan digital signage pada jaringan TV. Fitur: upload media, playlist otomatis, dan remote monitoring.",
    tags: ["PHP", "MySQL", "Bootstrap"],
    demoUrl: "https://novasign.web.id/login",
    codeUrl: "https://github.com/lingga26/website_cms",
    category: "Web Dev"
  },
  {
    id: 2,
    name: "Sistem Prioritas BPJS (AHP)",
    description: "Sistem Pendukung Keputusan (SPK) penentuan prioritas penerima BPJS PBI di Kecamatan Pondokgede. Menggunakan metode AHP untuk mengolah 5 kriteria penilaian.",
    tags: ["PHP", "MySQL", "AHP", "Data Analysis"],
    demoUrl: "http://ahp-bpjs.infinityfreeapp.com",
    codeUrl: "https://github.com/lingga26/ahp_metode",
    category: "Web Dev"
  },
  {
    id: 3,
    name: "Prediksi Harga Saham BBRI",
    description: "Model Machine Learning untuk prediksi harga saham menggunakan algoritma Decision Tree dan XGBoost. Membangun dan mengoptimalkan model untuk akurasi prediksi optimal.",
    tags: ["Python", "Machine Learning", "XGBoost"],
    demoUrl: "https://github.com/lingga26/machine_learning_prediksi_saham",
    codeUrl: "https://github.com/lingga26/machine_learning_prediksi_saham",
    category: "Data Science"
  },
  {
    id: 4,
    name: "Monitoring Kualitas Udara",
    description: "Sistem IoT end-to-end menggunakan ESP32 dan sensor BME680 untuk pemantauan kualitas udara perkotaan secara real-time. Dilengkapi dengan visualisasi data.",
    tags: ["IoT", "ESP32", "BME680", "Arduino"],
    demoUrl: "https://github.com/lingga26/monitoring_kualitas_udara",
    codeUrl: "https://github.com/lingga26/monitoring_kualitas_udara",
    category: "IoT"
  }
];

const getTheme = (category: string) => {
  switch (category) {
    case "Web Dev": return { gradient: "from-blue-500 to-cyan-400", border: "border-blue-200", bg: "bg-blue-50", badge: "" };
    case "Data Science": return { gradient: "from-purple-500 to-pink-400", border: "border-purple-200", bg: "bg-purple-50", badge: "" };
    case "IoT": return { gradient: "from-green-500 to-emerald-400", border: "border-green-200", bg: "bg-green-50", badge: "📡" };
    default: return { gradient: "from-gray-500 to-gray-400", border: "border-gray-200", bg: "bg-gray-50", badge: "💻" };
  }
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-slate-100 via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Proyek <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Saya</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Koleksi proyek yang mencakup pengembangan web, machine learning, IoT, dan sistem pendukung keputusan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const theme = getTheme(project.category);
            return (
              <article
                key={project.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${theme.border} hover:scale-105`}
              >
                <div className={`h-2 bg-gradient-to-r ${theme.gradient}`} />
                <div className="p-6">
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.bg} text-gray-700 mb-4`}>
                    <span>{theme.badge}</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className={`px-2 py-1 text-xs font-medium rounded-md ${theme.bg} text-gray-700 border ${theme.border}`}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${theme.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105`}>
                      <span></span><span>Live Demo</span>
                    </a>
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all">
                      <span>💻</span><span>Code</span>
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}