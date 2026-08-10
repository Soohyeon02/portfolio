import 'server-only'
import { S3Client, GetObjectCommand, NoSuchKey } from '@aws-sdk/client-s3'
import { PortfolioSchema } from './schemas'
import type { PortfolioContent } from './schemas'

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
})

export async function getPortfolioContent(): Promise<PortfolioContent> {
  let raw: string

  try {
    const res = await s3.send(
      new GetObjectCommand({
        Bucket: process.env.S3_BUCKET_NAME!,
        Key: 'content.json',
      }),
    )

    if (!res.Body) {
      throw new Error('S3 response body is empty')
    }

    raw = await res.Body.transformToString()
  } catch (err) {
    if (err instanceof NoSuchKey) {
      throw new Error(`content.json not found in S3 bucket "${process.env.S3_BUCKET_NAME}"`)
    }
    throw err
  }

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch {
    throw new Error('content.json contains invalid JSON')
  }

  const data = PortfolioSchema.parse(parsed)
  console.log(`[content] v${data.version} updated at ${data.updatedAt}`)
  return data
}
