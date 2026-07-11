/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // second dev server support: NEXT_DIST_DIR=.next-alt keeps a parallel
  // session's server from clobbering this one's build dir
  distDir: process.env.NEXT_DIST_DIR || ".next",
};

export default nextConfig;
