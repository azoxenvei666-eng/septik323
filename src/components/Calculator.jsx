import React, { useState } from 'react'

function Calculator() {
  const [volume, setVolume] = useState(4)
  const [distance, setDistance] = useState(0)
  const price = 1500 + (volume * 250) + (distance > 10 ? (distance - 10) * 50 : 0)

  return (
    <section id="calculator" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#0F2A4A]">Калькулятор стоимости</h2>
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Объем (м³): {volume}</label>
            <input type="range" min="3" max="16" value={volume} onChange={(e) => setVolume(Number(e.target.value))} className="w-full" />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Расстояние от КАД (км): {distance}</label>
            <input type="range" min="0" max="100" value={distance} onChange={(e) => setDistance(Number(e.target.value))} className="w-full" />
          </div>
          <div className="text-center py-4 bg-[#0F2A4A]/5 rounded-lg mb-6">
            <p className="text-sm text-gray-600">Итоговая стоимость:</p>
            <p className="text-3xl font-bold text-[#FF6B00]">{price} ₽</p>
          </div>
          <a href="#order-form" className="block w-full py-4 bg-[#FF6B00] hover:bg-orange-600 text-white font-bold rounded-lg transition text-center">
            Заказать услугу
          </a>
        </div>
      </div>
    </section>
  )
}

export default Calculator