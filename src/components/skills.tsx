export default function Skills() {
  const skillCategories = [
    {
      title: "Web Development",
      icon: "💻",
      color: "text-blue-600",
      bg: "bg-blue-100",
      skills: ["React.js", "TypeScript", "JavaScript", "Tailwind CSS", "PHP", "MySQL", "HTML5", "CSS3", "Vite", "AHP Method"]
    },
    {
      title: "AI & Data Science",
      icon: "🤖",
      color: "text-purple-600",
      bg: "bg-purple-100",
      skills: ["Python", "Machine Learning", "XGBoost", "Decision Tree", "Data Analysis", "Sentiment Analysis", "Stable Diffusion"]
    },
    {
      title: "IoT & Embedded Systems",
      icon: "📡",
      color: "text-green-600",
      bg: "bg-green-100",
      skills: ["C++", "Arduino", "ESP32", "BME680 Sensor", "Wireless Protocols", "Real-Time Monitoring"]
    },
    {
      title: "Networking & IT Support",
      icon: "🔧",
      color: "text-orange-600",
      bg: "bg-orange-100",
      skills: ["Cisco CCNA", "IT Essentials", "Hardware/Software Troubleshooting", "Network Infrastructure", "System Maintenance"]
    },
    {
      title: "Tools & Workflow",
      icon: "🛠️",
      color: "text-gray-600",
      bg: "bg-gray-200",
      skills: ["Git & GitHub", "VS Code", "Postman", "Figma", "CI/CD Basics", "Agile/Scrum"]
    },
    {
      title: "Soft Skills",
      icon: "💡",
      color: "text-teal-600",
      bg: "bg-teal-100",
      skills: ["Problem Solving", "Analytical Thinking", "Team Collaboration", "Self-Motivated", "Adaptive Learner", "Detail Oriented"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-100 relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full opacity-20 blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-200 to-blue-200 rounded-full opacity-20 blur-3xl translate-x-1/3 translate-y-1/3" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Keahlian <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-cyan-600">& Kompetensi</span>
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-lg font-medium">
            Menggabungkan keahlian teknis dalam pengembangan web, IoT, dan data science dengan 
            sertifikasi jaringan Cisco dan pengalaman praktis lintas industri.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`${category.bg} rounded-xl p-6 hover:shadow-xl transition-all duration-300 border-2 border-white hover:border-gray-200 transform hover:-translate-y-2 backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{category.icon}</span>
                <h3 className={`text-xl font-bold ${category.color}`}>{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-white text-gray-700 text-sm font-semibold rounded-lg shadow-sm border border-gray-200 hover:shadow-md hover:scale-105 transition-all duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}