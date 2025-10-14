import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['design-system'],
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      'design-system': path.resolve(__dirname, '../design-system/dist/index.js'),
    }
    return config
  },
}

export default nextConfig


