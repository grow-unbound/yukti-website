import { ImageResponse } from "next/og";

/**
 * Apple touch icon.
 *
 * iOS ignores SVG favicons and composites this onto a home-screen tile, so it
 * needs its own opaque background — a transparent mark would sit on whatever
 * colour the OS chooses. This mirrors the design system's app-icon-copper:
 * solid copper field, cream mark, tight interior padding so the mark fills the
 * tile rather than floating in it.
 *
 * Generated rather than checked in as a PNG so it cannot drift from the mark.
 */

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#B5642F",
        }}
      >
        <svg width="118" height="118" viewBox="0 0 32 32" fill="none">
          <path fill="#F3EEE6" d="M4.2 15.9L10.6 17.0L12.5 25.1L6.4 25.1Z" />
          <path fill="#F3EEE6" d="M27.8 15.9L21.4 17.0L19.5 25.1L25.6 25.1Z" />
          <path fill="#F3EEE6" d="M13 7.4L19 7.4L21.2 16.6L10.8 16.6Z" />
        </svg>
      </div>
    ),
    size
  );
}
