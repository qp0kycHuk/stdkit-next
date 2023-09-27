import axios from 'axios'
import type { NextApiRequest, NextApiResponse } from 'next'

const fields: Record<string, string> = {
  service: 'Услуга',
  name: 'Имя',
  phone: 'Телефон',
  address: 'Адрес',
  email: 'Email',
  question: 'Вопрос',
  review: 'Отзыв',
  utm_term: 'utm_term',
  utm_medium: 'utm_medium',
  utm_campaign: 'utm_campaign',
  utm_content: 'utm_content',
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // const data = req.body
  const CHAT_ID = '-707118674'
  const TELEGRAM_TOKEN = '5729428675:AAFPDzoDP7OBZHvideLY0cIjMXbR4QXEG-Y'

  let message = ''

  if (req.body.form) {
    message += `<b>Форма</b>: ${req.body.form} \n\n`
  }

  for (const key in fields) {
    if (!Object.prototype.hasOwnProperty.call(fields, key)) return

    if (req.body[key]) {
      message += `<b>${fields[key]}</b>: ${req.body[key]} \n`
    }
  }

  const { data } = await axios.post('https://api.telegram.org/bot' + TELEGRAM_TOKEN + '/sendMessage', {
    chat_id: CHAT_ID,
    text: message,
    parse_mode: 'HTML',
  })

  res.status(200).json(data)
}
