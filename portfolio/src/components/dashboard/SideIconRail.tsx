"use client";


import { useDashboard } from "./DashboardContext";


const icons = [
  { id: "home", label: "Home", symbol: "🏠" },
  { id: "skills", label: "Skills", symbol: "🧠" },
  { id: "education", label: "Education", symbol: "🎓" },
  { id: "languages", label: "Languages", symbol: "🌍" },
  { id: "experience", label: "Experience", symbol: "💼" },
  { id: "projects", label: "Projects", symbol: "📁" },
  { id: "moretome", label: "More to Me", symbol: "✨" },
];


export default function SideIconRail() {
  const { activePanel, setActivePanel } = useDashboard();


  return (
    <div
      style={{
        width: "72px",
        height: "100%",
        padding: "16px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "14px",
        background: "rgba(10, 20, 35, 0.75)",
        borderRight: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {icons.map((icon) => {
        const isActive = activePanel === icon.id;


        return (
          <button
            key={icon.id}
            onClick={() => setActivePanel(icon.id as any)}
            title={icon.label}
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              border: "none",
              background: isActive
                ? "rgba(0, 180, 255, 0.18)"
                : "transparent",
              color: isActive ? "#7dd3fc" : "#94a3b8",
              cursor: "pointer",
              boxShadow: isActive
                ? "0 0 18px rgba(0,180,255,0.7)"
                : "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "18px",
              transition: "all 0.25s ease",
            }}
          >
            {icon.symbol}
          </button>
        );
      })}
    </div>
  );
}
