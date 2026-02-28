import React, { useState } from 'react'

function ContactForm() {
  const [formData, setFormData] = useState({ name: '', phone: '', volume: '4' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/sendTelegram', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', phone: '', volume: '4' })
      }
    } catch (error) {
      console.error('Ошибка:', error)
    }

    setLoading(false)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <section id="order-form" className="py-20 bg-[#0F2A4A] text-white">
      <div className="container mx-auto px-4 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8">Оставить заявку</h2>
        {submitted ? (
          <div className="bg-green-500 text-white p-6 rounded-xl text-center">
            <p className="text-xl font-bold">✓ Заявка отправлена!</p>
            <p>Мы перезвоним в течение 5 минут</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white/10 p-8 rounded-2xl backdrop-blur-md">
            <div className="mb-4">
              <label className="block text-sm mb-2">Ваше имя</label>
              <input 
                type="text" 
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-[#FF6B00] text-white"
                placeholder="Иван"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm mb-2">Телефон</label>
              <input 
                type="tel" 
                required
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-[#FF6B00] text-white"
                placeholder="+7 (999) 000-00-00"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm mb-2">Объём (м³)</label>
              <select 
                className="w-full p-3 rounded-lg bg-white/20 border border-white/30 focus:outline-none focus:border-[#FF6B00] text-white"
                value={formData.volume}
                onChange={(e) => setFormData({...formData, volume: e.target.value})}
              >
                <option value="3">3 м³</option>
                <option value="4">4 м³</option>
                <option value="5">5 м³</option>
                <option value="8">8 м³</option>
                <option value="10">10 м³</option>
                <option value="16">16 м³</option>
              </select>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-[#FF6B00] hover:bg-orange-600 disabled:bg-gray-400 font-bold rounded-lg transition"
            >
              {loading ? 'Отправка...' : 'Отправить заявку'}
            </button>
          </form>
        )}
      </div>
    </section>
  )
}

export default ContactForm