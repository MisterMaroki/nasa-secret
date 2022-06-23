/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ['apod.nasa.gov', 'www.youtube.com'],
	},
}

module.exports = nextConfig
