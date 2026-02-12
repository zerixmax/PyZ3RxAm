/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Omogućuje generiranje statičkih HTML/CSS/JS datoteka
  images: {
    unoptimized: true, // Potrebno za statički izvoz slika
  },
};

export default nextConfig;
