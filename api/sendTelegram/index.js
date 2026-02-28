export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const { name, phone, volume } = req.body

  const message = `
🔔 Новая заявка с сайта Septik323!

👤 Имя: ${name}
📞 Телефон: ${phone}
📦 Объём: ${volume} м³
  `.trim()

  try {
    await fetch(`https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: process.env.TELEGRAM_CHAT_ID,
        text: message
      })
    })
    return res.status(200).json({ message: 'Success' })
  } catch (error) {
    return res.status(500).json({ message: 'Error' })
  }
}