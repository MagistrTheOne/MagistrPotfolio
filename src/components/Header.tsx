'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-black/60 backdrop-blur-xl border-b border-white/10 text-white font-poppins">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-semibold tracking-wider">
          MAGISTRSTUDIO
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wider text-white/70">
          <a href="#hero" className="hover:text-white transition">Главная</a>
          <a href="#projects" className="hover:text-white transition">Проекты</a>
          <a
            href="https://t.me/Jkoffical2024"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            Контакты
          </a>
        </nav>

        {/* Mobile Burger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-white bg-black/90 border-t border-white/10">
          <a href="#hero" onClick={() => setOpen(false)} className="py-2 border-b border-white/10">Главная</a>
          <a href="#projects" onClick={() => setOpen(false)} className="py-2 border-b border-white/10">Проекты</a>
          <a
            href="https://t.me/Jkoffical2024"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="py-2"
          >
            Контакты
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
