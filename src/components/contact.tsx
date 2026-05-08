export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Hubungi Saya</h2>
        <p className="text-gray-600 mb-10 text-lg">
          Terbuka untuk peluang kerja sebagai Web Developer, IT Support, atau posisi terkait teknologi lainnya.
        </p>
        
        {/* Contact Cards - 3 Kolom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Email */}
          <a 
            href="mailto:lingganugraha26@gmail.com" 
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">📧</div>
            <div className="font-semibold text-gray-900 mb-1">Email</div>
            <div className="text-blue-600 text-sm">lingganugraha26@gmail.com</div>
          </a>

          {/* LinkedIn */}
          <a 
            href="https://linkedin.com/in/lingga-nugraha" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">💼</div>
            <div className="font-semibold text-gray-900 mb-1">LinkedIn</div>
            <div className="text-blue-600 text-sm">linkedin.com/in/lingga-nugraha</div>
          </a>

          {/* WhatsApp */}
          <a 
            href="https://wa.me/6288224634826" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1"
          >
            <div className="text-3xl mb-3">💬</div>
            <div className="font-semibold text-gray-900 mb-1">WhatsApp</div>
            <div className="text-green-600 text-sm">0882-2463-4826</div>
          </a>
        </div>

        {/* Location & Phone */}
        <div className="text-gray-600 space-y-2">
          <p className="flex items-center justify-center gap-2">
            <span>📍</span>
            <span>Jakarta Selatan, DKI Jakarta</span>
          </p>
          <p className="flex items-center justify-center gap-2">
            <span>📱</span>
            <span>0882-2463-4826</span>
          </p>
        </div>
      </div>
    </section>
  )
}