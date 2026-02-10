"use client";

/* ------------------ SKILLS DATA ------------------ */

const skills = [
  // Core Programming
  {
    name: "Python",
    level: 85,
    icon: "/icons/python.svg",
  },
  {
    name: "C / C++",
    level: 80,
    icon: "/icons/c.svg",
  },

  // Embedded & Flight Systems
  {
    name: "Embedded Systems",
    level: 85,
    icon: "/icons/embeddedc.svg",
  },

  {
    name: "ESP32",
    level: 82,
    icon: "/icons/esp32.svg",
  },
  {
    name: "Raspberry Pi",
    level: 78,
    icon: "/icons/raspberrypi.svg",
  },

  

  // Computer Vision & AI
  {
    name: "Computer Vision",
    level: 68,
    icon: "/icons/cv.svg",
  },
  {
    name: "Machine Learning & Deep Learning",
    level: 70,
    icon: "/icons/dl.svg",
  },
    {
    name: "MATLAB",
    level: 72,
    icon: "/icons/matlab.svg",
  },

  // Digital / VLSI
  {
    name: "Digital Electronics",
    level: 82,
    icon: "/icons/digital.svg",
  },
  {
    name: "Verilog HDL",
    level: 72,
    icon: "/icons/verilog.svg",
  },
  {
    name: "FPGA & HLS",
    level: 68,
    icon: "/icons/fpga.svg",
  },

  // Tools

  {
    name: "Git / Version Control",
    level: 85,
    icon: "/icons/git.svg",
  },
    {
    name: "RTOS & Deterministic Systems",
    level: 75,
    icon: "/icons/rtos.svg",
  },
  // Control, GNC, Avionics
  {
    name: "Control Systems (GNC)",
    level: 75,
    icon: "/icons/gnc.svg",
  },
  {
    name: "Avionics Systems",
    level: 72,
    icon: "/icons/avionics.svg",
  },
  {
    name: "Sensor Fusion & INS",
    level: 70,
    icon: "/icons/ins.svg",
  },
];

/* ------------------ TOOL BUBBLE ------------------ */

function ToolBubble({
  name,
  level,
}: {
  name: string;
  level: number;
}) {
  const totalCells = 10;
  const filled = Math.round((level / 100) * totalCells);

  return (
    <div
      style={{
        position: "absolute",
        bottom: "120%",
        left: "50%",
        transform: "translateX(-50%)",
        background: "rgba(15, 30, 50, 0.95)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "14px",
        padding: "10px 14px",
        boxShadow: "0 0 22px rgba(56,189,248,0.45)",
        color: "#e6eefc",
        fontSize: "12px",
        zIndex: 20,
        minWidth: "160px",
      }}
    >
      {/* Skill Name */}
      <div
        style={{
          marginBottom: "8px",
          textAlign: "center",
          fontWeight: 500,
        }}
      >
        {name}
      </div>

      {/* Battery Bar */}
      <div
        style={{
          display: "flex",
          gap: "4px",
          justifyContent: "center",
        }}
      >
        {Array.from({ length: totalCells }).map((_, i) => (
          <div
            key={i}
            style={{
              width: "8px",
              height: "12px",
              borderRadius: "3px",
              background:
                i < filled
                  ? "linear-gradient(180deg, #7dd3fc, #38bdf8)"
                  : "rgba(255,255,255,0.18)",
              boxShadow:
                i < filled
                  ? "0 0 6px rgba(56,189,248,0.7)"
                  : "none",
            }}
          />
        ))}
      </div>
    </div>
  );
}

/* ------------------ MAIN PANEL ------------------ */

export default function SkillsPanel() {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* Icon Grid */}
      <div
      style={{
        maxWidth: "900px",        // 👈 IMPORTANT
        width: "100%",
        borderRadius: "24px",
        background: "rgba(0, 180, 255, 0.08)",
        display: "grid",
        gridTemplateColumns: "repeat(8, 1fr)", // 👈 8 PER ROW
        gap: "20px",
        padding: "28px",
        position: "relative",
      }}
    >
        {skills.map((tool) => (
          <div
            key={tool.name}
            style={{
              position: "relative",
              width: "90px",
              height: "90px",
              borderRadius: "18px",
              background: "rgba(255,255,255,0.06)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "default",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 20px rgba(56,189,248,0.4)";
              const bubble =
                e.currentTarget.querySelector(
                  ".tool-bubble"
                ) as HTMLElement;
              if (bubble) bubble.style.opacity = "1";

              const img = e.currentTarget.querySelector(
                "img"
              ) as HTMLElement;
              if (img) img.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              const bubble =
                e.currentTarget.querySelector(
                  ".tool-bubble"
                ) as HTMLElement;
              if (bubble) bubble.style.opacity = "0";

              const img = e.currentTarget.querySelector(
                "img"
              ) as HTMLElement;
              if (img) img.style.transform = "scale(1)";
            }}
          >
            {/* Icon */}
            <img
              src={tool.icon}
              alt={tool.name}
              style={{
                width: "42px",
                height: "42px",
                objectFit: "contain",
                transition: "transform 0.2s ease",
                filter:
                  "drop-shadow(0 0 6px rgba(56,189,248,0.4))",
              }}
            />

            {/* Hover Bubble */}
            <div
              className="tool-bubble"
              style={{
                position: "absolute",
                opacity: 0,
                transition: "opacity 0.2s ease",
              }}
            >
              <ToolBubble
                name={tool.name}
                level={tool.level}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
