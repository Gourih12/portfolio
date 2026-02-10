const experience = [
  {
    role: "Embedded Engineer – Flight Systems",
    org: "Honeywell Aerospace",
    period: "Jul 2025 – Present",
    status: "active",
    highlights: [
      "Working on safety-critical embedded flight systems with real-time and deterministic execution requirements.",
      "Contributing to embedded software development, integration, and verification aligned with aerospace standards.",
      "Exposure to avionics architectures, fault tolerance, and high-reliability system design.",
    ],
    tech: [
      "Embedded C",
      "RTOS",
      "Avionics Systems",
      "Verification",
      "Safety-Critical Software",
    ],
  },

  {
    role: "VLSI Design Intern",
    org: "Maven Silicon",
    period: "Feb 2024",
    status: "completed",
    highlights: [
      "Worked on digital design using Verilog HDL.",
      "Gained exposure to RTL design and simulation workflows.",
    ],
    tech: ["Verilog", "Digital Design", "Simulation"],
  },
  {
    role: "IoT Systems Intern",
    org: "Keltron, Trivandrum",
    period: "May 2023 – Jun 2023",
    status: "completed",
    highlights: [
      "Learned fundamentals of IoT system architecture.",
      "Worked with sensors, microcontrollers, and communication modules.",
    ],
    tech: ["IoT", "Sensors", "Microcontrollers"],
  },
  {
    role: "Embedded Systems Intern",
    org: "Camino Infotech Pvt. Ltd.",
    period: "Nov 2022 – Dec 2022",
    status: "completed",
    highlights: [
      "Worked with Raspberry Pi and other microcontrollers.",
      "Developed basic embedded applications and hardware interfacing.",
    ],
    tech: ["Raspberry Pi", "Embedded Systems"],
  },
  {
    role: "Industrial Automation & EV Systems Intern",
    org: "Alphasys 3D Printing Solutions",
    period: "Jan 2022",
    status: "completed",
    highlights: [
      "Exposure to industrial automation systems.",
      "Learned fundamentals of EV systems and industrial IoT.",
    ],
    tech: ["Industrial Automation", "EV Systems", "Industrial IoT"],
  },
];

function StatusBadge({ status }: { status: string }) {
  const isActive = status === "active";

  return (
    <span
      style={{
        padding: "4px 10px",
        borderRadius: "999px",
        fontSize: "11px",
        background: isActive
          ? "rgba(56,189,248,0.25)"
          : "rgba(255,255,255,0.12)",
        color: isActive ? "#7dd3fc" : "#cbd5e1",
        boxShadow: isActive
          ? "0 0 12px rgba(56,189,248,0.6)"
          : "none",
      }}
    >
      {isActive ? "ACTIVE" : "COMPLETED"}
    </span>
  );
}

export default function ExperiencePanel() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "28px",
      }}
    >
      {/* Title */}
      <h2
        style={{
          fontSize: "22px",
          fontWeight: 600,
          margin: 0,
          color: "#e6eefc",
        }}
      >
        Experience
      </h2>

      {/* Experience Stack */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "22px",
        }}
      >
        {experience.map((exp, idx) => (
          <div
            key={idx}
            style={{
              padding: "20px",
              borderRadius: "20px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 25px rgba(56,189,248,0.25)";
              e.currentTarget.style.transform =
                "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform =
                "translateY(0)";
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#f1f5f9",
                    fontWeight: 500,
                  }}
                >
                  {exp.role}
                </div>
                <div
                  style={{
                    fontSize: "13px",
                    color: "#9fb3c8",
                  }}
                >
                  {exp.org} • {exp.period}
                </div>
              </div>

              <StatusBadge status={exp.status} />
            </div>

            {/* Highlights */}
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "13px",
                color: "#cbd5e1",
                lineHeight: 1.5,
              }}
            >
              {exp.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>

            {/* Tech */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
                marginTop: "6px",
              }}
            >
              {exp.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "11px",
                    padding: "4px 10px",
                    borderRadius: "999px",
                    background: "rgba(0,180,255,0.15)",
                    color: "#7dd3fc",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
