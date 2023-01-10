import middleware from '@libs/middleware';

import twilio from 'twilio'

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const fromPhone = "+14155238886"
const client = twilio(accountSid, authToken)

export const handler = middleware(async (event) => {
  const {message} = event.body as any

  const result = await client.messages.create({
    from: `whatsapp:${fromPhone}`,
    body: message,
    to: 'whatsapp:+558199006449'
  })

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
})
