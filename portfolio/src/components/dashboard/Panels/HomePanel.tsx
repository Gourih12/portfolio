"use client";

import { useDashboard } from "../DashboardContext";

export default function HomePanel() {
  const { setActivePanel } = useDashboard();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        gap: "18px",
        backgroundImage: "url(/images/gouri.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        position: "relative",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(14, 26, 43, 0.5)",
          zIndex: 1,
        }}
      />

      {/* Content Wrapper */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "18px",
        }}
      >
      {/* Profile Image */}
      <img
        src="/images/gouri.jpg"
        alt="Gouri"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          objectFit: "cover",
          boxShadow: "0 0 35px rgba(0,180,255,0.4)",
          marginBottom: "8px",
          border: "2px solid rgba(125, 211, 252, 0.4)",
        }}
      />


      {/* Name */}
      <h1
        style={{
          fontSize: "36px",
          fontWeight: 600,
          margin: 0,
          color: "#e6eefc",
        }}
      >
        Hi, I’m <span style={{ color: "#7dd3fc" }}>Gouri</span>
      </h1>


      {/* Subtitle */}
      <p
        style={{
          fontSize: "16px",
          color: "#9fb3c8",
          margin: 0,
          maxWidth: "420px",
        }}
      >
        Electronics • GNC • Robotics • Machine Learning
      </p>


      {/* Buttons */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          marginTop: "14px",
        }}
      >
        <button
          onClick={() => setActivePanel("projects")}
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            border: "none",
            background: "#38bdf8",
            color: "#020617",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          View Work
        </button>


        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = "/resume/Gouri_H_Resume.pdf";
            link.download = "Gouri_H_Resume.pdf";
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          }}
          style={{
            padding: "10px 22px",
            borderRadius: "999px",
            border: "1px solid rgba(125, 211, 252, 0.6)",
            background: "transparent",
            color: "#7dd3fc",
            fontSize: "14px",
            fontWeight: 500,
            cursor: "pointer",
          }}
        >
          Download CV
        </button>
      </div>
      </div>
    </div>
  );
}



