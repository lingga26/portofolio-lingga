export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">Tentang Saya</h2>
        
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          <p>
            Saya adalah lulusan <span className="font-semibold">S1 Teknik Komputer</span> dari 
            Universitas Amikom Yogyakarta dengan IPK 3.3. Saya memiliki passion di bidang 
            <span className="font-semibold text-blue-700"> Internet of Things (IoT)</span>, 
            <span className="font-semibold text-blue-700"> Machine Learning</span>, dan 
            infrastruktur jaringan.
          </p>
          
          <p>
            Pengalaman kerja saya mencakup pemeliharaan hardware di 
            <span className="font-semibold"> ACS Computer</span> serta analisis data media di 
            <span className="font-semibold"> PT Media Monitoring Indonesia</span>. Saya terampil 
            dalam merancang solusi berbasis mikrokontroler, membangun model prediksi, dan 
            troubleshooting sistem.
          </p>
          
          <p>
            Saya memegang sertifikasi internasional 
            <span className="font-semibold text-blue-700"> Cisco CCNA</span> dan 
            <span className="font-semibold text-blue-700"> IT Essentials</span>, serta terus 
            mengembangkan diri dalam teknologi web modern dan pemrograman.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">2026</div>
            <div className="text-gray-700">Lulus S1 Teknik Komputer</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">3.3</div>
            <div className="text-gray-700">IPK</div>
          </div>
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">Cisco</div>
            <div className="text-gray-700">Certified Professional</div>
          </div>
        </div>
      </div>
    </section>
  )
}