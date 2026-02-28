import React from 'react'

function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-[#0F2A4A] text-white pt-20">
      <div className="absolute inset-0 opacity-40">
        <img src="https://images.unsplash.com/photo-1605218427306-6354db696faa?q=80&w=2070" alt="Ассенизатор" className="w-full h-full object-cover" />
      </div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-[#FF6B00]/20 text-[#FF6B00] border border-[#FF6B00]/50 text-sm font-bold mb-4">
          ВЫЕЗД ЗА 30 МИНУТ
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
          Откачка септиков в Краснодаре
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
          Профессиональные ассенизаторские услуги 24/7. Объемы от 3 до 16 м³.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a href="tel:+79990000000" className="px-8 py-4 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold rounded-lg text-lg transition shadow-lg">
            Вызвать машину
          </a>
          <a href="#calculator" className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-bold rounded-lg text-lg transition">
            Рассчитать стоимость
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero