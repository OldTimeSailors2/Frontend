/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'], 
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'res.cloudinary.com',
              // The pathname '**' is a wildcard that allows any path
              pathname: '/**',
            },
          ],
    }
}

module.exports = nextConfig
