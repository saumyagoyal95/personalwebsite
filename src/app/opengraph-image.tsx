import { ImageResponse } from "next/og";
import { siteConfig } from "@/content/siteConfig";

export const alt = `${siteConfig.name} — ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#06264c",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        {/* top row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 999,
              background: "#edbda3",
              color: "#06264c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
              fontWeight: 800,
            }}
          >
            S
          </div>
          <div style={{ color: "rgba(243,230,214,0.6)", fontSize: 26, letterSpacing: 4 }}>
            {siteConfig.name.toUpperCase()}
          </div>
        </div>

        {/* headline */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#f3e6d6",
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
            }}
          >
            I make ML systems
          </div>
          <div
            style={{
              display: "flex",
              gap: 24,
              fontSize: 82,
              fontWeight: 800,
              lineHeight: 1.02,
              letterSpacing: -2,
              color: "#f3e6d6",
            }}
          >
            <span>you can</span>
            <span style={{ color: "#e07f48" }}>trust.</span>
          </div>
        </div>

        {/* bottom row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "rgba(243,230,214,0.6)",
            fontSize: 26,
          }}
        >
          {/*
            Derived from siteConfig, not retyped — this line and the page title
            used to drift apart, which is how the card ended up advertising a
            different job title than the site itself.
          */}
          <span>
            {siteConfig.role} · {siteConfig.location.split(",")[0]}
          </span>
          <span>{siteConfig.url.replace("https://", "")}</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
