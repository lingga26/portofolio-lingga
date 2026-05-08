import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <a href="#" className="text-xl font-bold text-blue-600">Lingga.dev</a>
        
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-blue-600 font-medium transition"
            >
              {link.name}
            </a>
          ))}
        </div>
        
        {/* Mobile menu button (opsional, bisa dikembangkan) */}
        <button className="md:hidden text-gray-700">☰</button>
      </div>
    </nav>
  );
}