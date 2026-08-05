import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The site is one page now; keep the old routes pointing at their sections.
  async redirects() {
    return [
      { source: "/about", destination: "/#profile", permanent: true },
      { source: "/research", destination: "/#findings", permanent: true },
      { source: "/contact", destination: "/#contact", permanent: true },
    ];
  },
};

export default nextConfig;
