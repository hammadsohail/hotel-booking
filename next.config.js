/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['links.papareact.com', 'www.jsonkeeper.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoibXVoYW1tYWRoYW1tYWQ4NDgiLCJhIjoiY2xjOXkzdjd2MXVzZTNucDYxMDg5M3c4eSJ9.BBSkEnvqsR__JhGGvzid9Q',
  }
}

module.exports = nextConfig
