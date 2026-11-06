import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // Trailing slashes off so canonical URLs and sitemap entries agree.
  trailingSlash: false,
  async redirects() {
    return [
      // There is no demo page; "Talk to us" opens Calendly. Anyone holding an
      // old link still lands somewhere useful rather than on a 404.
      { source: "/demo", destination: "/", permanent: false },
      // /customers was renamed to /buyers.
      // The product's login page still links to the old path; repoint it there
      // and this redirect can go.
      { source: "/customers", destination: "/buyers", permanent: true },
      // The design export's cross-page links used filenames.
      { source: "/Home.dc.html", destination: "/", permanent: true },
      // Pricing and compare pages are hidden (v2.2): they live in app/_pricing and
      // app/_compare and return 404 until they are brought back.
      { source: "/Pricing.dc.html", destination: "/", permanent: true },
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
