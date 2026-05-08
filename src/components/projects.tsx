import { useGitHubRepos } from "../hooks/useGitHubRepos";

const GITHUB_USERNAME = import.meta.env.VITE_GITHUB_USERNAME || "lingga26";

// 🔥 MANUAL PROJECTS - Semua proyek didefinisikan di sini
const manualProjects = [
  {
    id: 1001,
    name: "CMS Dashboard",
    description: "Platform CMS untuk manajemen konten iklan digital signage pada jaringan TV. Memungkinkan admin mengupload, menjadwalkan, dan memonitor distribusi konten secara terpusat dengan fitur playlist otomatis, real-time scheduling, dan remote device management. Solusi efisien untuk optimasi penayangan iklan komersial dengan kontrol penuh dari dashboard web. Demo silahkan login dengan user: admin. pass: password",
    topics: ["PHP", "MySQL", "Admin Panel", "CMS"],
    html_url: "https://github.com/lingga26/website_cms",
    homepage: "https://novasign.web.id/login",
    category: "CMS"
  },
  {
    id: 1002,
    name: "Sistem Prioritas BPJS (AHP)",
    description: "Sistem Pendukung Keputusan (SPK) penentuan prioritas penerima BPJS PBI di Kecamatan Pondokgede. Menggunakan metode AHP untuk mengolah 5 kriteria (Ekonomi, Tanggungan, Kesehatan) secara objektif.",
    topics: ["PHP", "MySQL", "AHP", "Data Analysis"],
    html_url: "https://github.com/lingga26/ahp_metode",
    homepage: "http://ahp-bpjs.infinityfreeapp.com",
    category: "Web Development"
  },
  {
    id: 1003,
    name: "Prediksi Harga Saham BBRI",
    description: "Model Machine Learning untuk prediksi harga saham menggunakan algoritma Decision Tree dan XGBoost. Membangun dan mengoptimalkan model untuk akurasi prediksi optimal dalam pengambilan keputusan investasi.",
    topics: ["Python", "Machine Learning", "XGBoost", "Data Science"],
    html_url: "https://github.com/lingga26/machine_learning_prediksi_saham",
    homepage: "https://github.com/lingga26/machine_learning_prediksi_saham",
    category: "Machine Learning"
  },
  {
    id: 1004,
    name: "Monitoring Kualitas Udara",
    description: "Sistem IoT end-to-end menggunakan ESP32 dan sensor BME680 untuk pemantauan kualitas udara perkotaan secara real-time. Dilengkapi dengan visualisasi data untuk monitoring kondisi lingkungan.",
    topics: ["IoT", "ESP32", "BME680", "Arduino"],
    html_url: "https://github.com/lingga26/monitoring_kualitas_udara",
    homepage: "https://github.com/lingga26/monitoring_kualitas_udara",
    category: "IoT System"
  }
];

// Tema warna untuk setiap kategori
const projectThemes = {
  "Web Development": { gradient: "from-blue-500 to-cyan-400", bg: "bg-blue-50", border: "border-blue-200", icon: "📊" },
  "Machine Learning": { gradient: "from-purple-500 to-pink-400", bg: "bg-purple-50", border: "border-purple-200", icon: "🤖" },
  "IoT System": { gradient: "from-green-500 to-emerald-400", bg: "bg-green-50", border: "border-green-200", icon: "📡" },
  "CMS": { gradient: "from-orange-500 to-amber-400", bg: "bg-orange-50", border: "border-orange-200", icon: "🌐" },
  default: { gradient: "from-gray-500 to-gray-400", bg: "bg-gray-50", border: "border-gray-200", icon: "💻" }
};

const getProjectTheme = (category: string) => {
  return projectThemes[category as keyof typeof projectThemes] || projectThemes.default;
};

export default function Projects() {
  // Hanya gunakan manual projects, tidak perlu GitHub API
  const allProjects = manualProjects;

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
          {allProjects.map((repo) => {
            const theme = getProjectTheme(repo.category);
            
            return (
              <article
                key={repo.id}
                className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 ${theme.border} hover:scale-105`}
              >
                {/* Gradient Header Bar */}
                <div className={`h-2 bg-gradient-to-r ${theme.gradient}`} />
                
                <div className="p-6">
                  {/* Category Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold ${theme.bg} text-gray-700 mb-4`}>
                    <span>{theme.icon}</span>
                    <span>{repo.category}</span>
                  </div>

                  {/* Project Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {repo.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {repo.description}
                  </p>

                  {/* Tech Stack Tags */}
                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-5">
                      {repo.topics.map((topic: string) => (
                        <span
                          key={topic}
                          className={`px-2 py-1 text-xs font-medium rounded-md ${theme.bg} text-gray-700 border ${theme.border}`}
                        >
                          {topic}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="flex gap-3 pt-4 border-t border-gray-100">
                    <a
                      href={repo.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r ${theme.gradient} text-white rounded-lg font-medium hover:opacity-90 transition-all transform hover:scale-105`}
                    >
                      <span>🔗</span>
                      <span>Live Demo</span>
                    </a>
                    <a
                      href={repo.html_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-all"
                    >
                      <span>💻</span>
                      <span>Code</span>
                    </a>
                  </div>
                </div>

                {/* Hover Overlay Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${theme.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </article>
            );
          })}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <a
            href={`https://github.com/${GITHUB_USERNAME}?tab=repositories`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-all hover:shadow-lg transform hover:scale-105"
          >
            <span>Lihat Lebih Banyak di GitHub</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}