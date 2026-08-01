/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // IMPORTANT: If your GitHub repository is named something else, change '/maskido-web' to '/your-repo-name'
  // If you are using a custom domain (like www.example.com), remove this basePath entirely.
  basePath: '/maskido-web',
  images: {
    unoptimized: true, // Required for static export on GitHub Pages
  }
};

export default nextConfig;
