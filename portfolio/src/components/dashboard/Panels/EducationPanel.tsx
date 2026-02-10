"use client";

import { useState } from "react";

/* ------------------ DATA ------------------ */

const education = [
  {
    title: "B.Tech in Electronics & Communication Engineering",
    place: "SCT College of Engineering, Trivandrum",
    year: "2021 – 2025",
    score: "CGPA: 8.8",
  },
  {
    title: "SFS Public School",
    place: "Higher Secondary Education",
    year: "2019 – 2021",
    score: "Percentage: 96%",
  },
  {
    title: "Jawahar Navodaya Vidyalaya",
    place: "Secondary Education",
    year: "2014 – 2019",
    score: "Percentage: 97%",
  },
];

const certifications = [
  {
    title: "Deep Learning",
    source: "NPTEL",
    period: "Jan – Apr 2024",
    file: "/certificates/deep-learning.pdf",
  },
  {
    title: "Introduction to Machine Learning",
    source: "NPTEL",
    period: "Jul – Sep 2023",
    file: "/certificates/introduction-to-ml.pdf",
  },
  {
    title: "System Design Through Verilog",
    source: "NPTEL",
    period: "Jul – Sep 2024",
    file: "/certificates/verilog-system-design.pdf",
  },
  {
    title: "Nanotechnology: Science and Applications",
    source: "NPTEL",
    period: "Jul – Sep 2024",
    file: "/certificates/nanotechnology.pdf",
  },
];

/* ------------------ COMPONENTS ------------------ */

function InfoCard({
  title,
  subtitle,
  year,
  extra,
  clickable,
  onClick,
}: {
  title: string;
  subtitle: string;
  year: string;
  extra?: string;
  clickable?: boolean;
  onClick?: () => void;
}) {
  return (
    <div
      onClick={onClick}
      style={{
        padding: "16px 18px",
        borderRadius: "16px",
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.08)",
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        cursor: clickable ? "pointer" : "default",
        transition: "all 0.25s ease",
      }}
      onMouseEnter={(e) => {
        if (clickable)
          e.currentTarget.style.boxShadow =
            "0 0 18px rgba(56,189,248,0.25)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <div style={{ fontSize: "14px", color: "#e6eefc" }}>
        {title}
      </div>
      <div style={{ fontSize: "12px", color: "#9fb3c8" }}>
        {subtitle}
      </div>
      {extra && (
        <div style={{ fontSize: "12px", color: "#7dd3fc" }}>
          {extra}
        </div>
      )}
      <div style={{ fontSize: "11px", color: "#7dd3fc" }}>
        {year}
      </div>
    </div>
  );
}

function CertificateModal({
  title,
  file,
  onClose,
}: {
  title: string;
  file: string;
  onClose: () => void;
}) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.65)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 999,
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "520px",
          borderRadius: "20px",
          background: "rgba(14, 26, 43, 0.95)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 0 40px rgba(56,189,248,0.4)",
          padding: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            fontSize: "16px",
            color: "#e6eefc",
            marginBottom: "12px",
          }}
        >
          {title}
        </div>

        <iframe
          src={`${file}#toolbar=0`}
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.08)",
            border: "none",
            marginBottom: "16px",
          }}
        />
        

        <a
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "block",
            textAlign: "center",
            padding: "8px",
            borderRadius: "999px",
            border: "1px solid rgba(125,211,252,0.4)",
            color: "#7dd3fc",
            textDecoration: "none",
            marginBottom: "10px",
          }}
        >
          Open Full Certificate
        </a>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "8px",
            borderRadius: "999px",
            border: "none",
            background: "rgba(125,211,252,0.15)",
            color: "#7dd3fc",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}

/* ------------------ MAIN PANEL ------------------ */

export default function EducationPanel() {
  const [activeCert, setActiveCert] = useState<{
    title: string;
    file: string;
  } | null>(null);

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "26px",
      }}
    >
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 600,
          margin: 0,
          color: "#e6eefc",
        }}
      >
        Education & Certifications
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "28px",
        }}
      >
        {/* Education */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: "14px", color: "#7dd3fc" }}>
            Education
          </div>
          {education.map((e) => (
            <InfoCard
              key={e.title}
              title={e.title}
              subtitle={e.place}
              year={e.year}
              extra={e.score}
            />
          ))}
        </div>

        {/* Certifications */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div style={{ fontSize: "14px", color: "#7dd3fc" }}>
            NPTEL & Industry Certifications
          </div>
          {certifications.map((c) => (
            <InfoCard
              key={c.title}
              title={c.title}
              subtitle={`${c.source} • ${c.period}`}
              year="Click to view"
              clickable
              onClick={() =>
                setActiveCert({ title: c.title, file: c.file })
              }
            />
          ))}
        </div>
      </div>

      {activeCert && (
        <CertificateModal
          title={activeCert.title}
          file={activeCert.file}
          onClose={() => setActiveCert(null)}
        />
      )}
    </div>
  );
}