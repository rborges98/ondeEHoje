import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Onde e hoje?',
    short_name: 'Onde é hoje?',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    icons: [
      {
        src: 'images/icon-512.png',
        sizes: '512x512',
        type: 'image/png'
      }
    ]
  }
}
