/** @type {import('next').NextConfig} */

const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/, // Testa arquivos .svg
      use: ['@svgr/webpack'] // Usa o SVGR para processar os SVGs
    })

    return config
  }
}

export default nextConfig
