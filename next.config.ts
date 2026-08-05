import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trailing slashes off so canonical URLs and sitemap entries agree.
  trailingSlash: false,
  async redirects() {
    return [
      // The brief specced a /demo page with an enquiry form. That was dropped:
      // "Book a demo" now opens WhatsApp directly. Anyone holding an old link
      // still lands somewhere useful rather than on a 404.
      { source: "/demo", destination: "/", permanent: false },
      // The design export's cross-page links used filenames.
      { source: "/Home.dc.html", destination: "/", permanent: true },
      { source: "/Pricing.dc.html", destination: "/pricing", permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
