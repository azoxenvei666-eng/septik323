import React from 'react'

function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#0F2A4A]/95 backdrop-blur-md text-white shadow-lg">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-black tracking-tighter">
          SEPTIK<span className="text-[#FF6B00]">323</span>
        </div>
        <nav className="hidden md:flex gap-8 font-medium">
          <a href="#services" className="hover:text-[#FF6B00] transition">Услуги</a>
          <a href="#calculator" className="hover:text-[#FF6B00] transition">Калькулятор</a>
          <a href="#contacts" className="hover:text-[#FF6B00] transition">Контакты</a>
        </nav>
        <a href="tel:+79990000000" className="bg-[#FF6B00] hover:bg-orange-600 px-5 py-2 rounded-lg font-bold transition">
          Позвонить
        </a>
      </div>
    </header>
  )
}

export default Header