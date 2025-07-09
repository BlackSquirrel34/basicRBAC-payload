import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import config from '@/payload.config'
import './styles.css'

export default async function HomePage() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <h1>
      {user
        ? `You are authenticated as ${user.roles?.map((role) => role).join(', ')} with email ${user.email}`
        : `You are not logged in`}
    </h1>
  )
}
