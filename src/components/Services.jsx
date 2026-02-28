import React from 'react'

function Services() {
  const services = [
    { title: 'Откачка септиков', price: 'от 1500 ₽', desc: 'Любой объем, чистая работа' },
    { title: 'Илосос', price: 'от 2500 ₽', desc: 'Для сложных задач и песка' },
    { title: 'Прочистка канализации', price: 'от 1000 ₽', desc: 'Гидродинамическая прочистка' },
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#0F2A4A]">Наши услуги</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 border border-gray-100 rounded-xl hover:shadow-xl transition bg-white">
              <h3 className="text-xl font-bold mb-2 text-[#0F2A4A]">{s.title}</h3>
              <p className="text-[#FF6B00] font-bold text-lg mb-2">{s.price}</p>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services