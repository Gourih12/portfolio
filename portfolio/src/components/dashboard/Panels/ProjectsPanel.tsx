"use client";

/* ------------------ PROJECT DATA ------------------ */

const projects = [
  {
    title: "FLEX-E: AI-Powered Human–Machine Interface",
    period: "Oct 2024 – Feb 2025",
    description: [
      "Engineered a vision-based gesture recognition system using MediaPipe and OpenCV, integrated with a predictive strategy model.",
      "Implemented real-time processing on Raspberry Pi and ESP32 with servo-driven hand actuation using nylon string mechanisms.",
      "Incorporated Markov-based decision logic for gesture prediction and adaptive interaction.",
      "Received CERD funding for innovation and future scope.",
    ],
    tech: [
      "Python",
      "OpenCV",
      "MediaPipe",
      "ESP32",
      "Raspberry Pi",
      "Embedded Systems",
      "Servo Control",
      "Robotics",
      "Mechatronics",
    ],
  },
  {
    title: "Performance Analysis of Adaptive Filters on FPGA",
    period: "Jan 2025 – Mar 2025",
    description: [
      "Implemented LMS and RLS adaptive filters on FPGA using Xilinx ISE for real-time signal processing.",
      "Analyzed algorithm performance using SNR and MSE metrics with MATLAB-generated plots.",
      "Validated experimental results against theoretical expectations.",
      "Authored a research manuscript titled “Hybrid Adaptive FIR Filtering Using Ferroelectric Devices in FPGA”, currently under IEEE review.",
    ],
    tech: [
      "FPGA",
      "Xilinx Vivado ISE",
      "Adaptive Filters",
      "LMS / RLS",
      "Digital Signal Processing",
      "Optimization Algorithms",
      "MATLAB",
    ],
  },
    {
    title: "Active Insole: Smart Gait Monitoring System",
    period: "Oct 2024 – Jan 2025",
    description: [
      "Developed a wearable insole system for real-time gait monitoring and fall-risk detection.",
      "Used piezoelectric sensors embedded in a TPU 3D-printed sole.",
      "Recognized at multiple hackathons for innovation in wearable health-tech.",
    ],
    tech: [
      "Embedded Systems",
      "Piezoelectric Sensors",
      "Wearable Tech",
      "Signal Processing",
      "3D Printing",
    ],
  },
  {
    title: "Avionics HUD Simulation",
    period: "2025",
    description: [
      "Developed a realistic avionics-style Heads-Up Display (HUD) for simulated flight scenarios.",
      "Displayed real-time pitch, roll, heading, and altitude parameters.",
      "Focused on control-system visualization and pilot-oriented interface design.",
    ],
    tech: [
      "Python",
      "Avionics",
      "Control Systems",
      "HUD Design",
      "Simulation",
    ],
  },
  {
    title: "INS & Sensor Fusion Study",
    period: "2025",
    description: [
      "Studied inertial navigation systems and sensor fusion techniques for navigation accuracy.",
      "Simulated multi-sensor fusion approaches for improved state estimation.",
      "Explored applications in aerospace and autonomous systems.",
    ],
    tech: [
      "INS",
      "Sensor Fusion",
      "Navigation Systems",
      "Control Systems",
      "Aerospace",
    ],
  },
  {
    title: "Early Flood Detection System",
    period: "Jan 2024 – Jun 2024",
    description: [
      "Led a team of three to develop a flood detection and alert system with 95% accuracy.",
      "Implemented GSM-based alerts, real-time cloud monitoring via ThingSpeak, and hardware alarms.",
      "Designed embedded firmware using NodeMCU with LCD and buzzer integration.",
    ],
    tech: [
      "NodeMCU",
      "IoT",
      "Embedded Systems",
      "GSM",
      "ThingSpeak",
      "Sensors",
    ],
  },

];

/* ------------------ PANEL ------------------ */

export default function ProjectsPanel() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
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
        Projects
      </h2>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "22px",
        }}
      >
        {projects.map((project, idx) => (
          <div
            key={idx}
            style={{
              padding: "22px",
              borderRadius: "22px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              display: "flex",
              flexDirection: "column",
              gap: "14px",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow =
                "0 0 28px rgba(56,189,248,0.25)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = "none";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            {/* Header */}
            <div>
              <div
                style={{
                  fontSize: "16px",
                  fontWeight: 500,
                  color: "#f1f5f9",
                }}
              >
                {project.title}
              </div>
              <div
                style={{
                  fontSize: "12px",
                  color: "#7dd3fc",
                }}
              >
                {project.period}
              </div>
            </div>

            {/* Description */}
            <ul
              style={{
                margin: 0,
                paddingLeft: "18px",
                fontSize: "13px",
                color: "#cbd5e1",
                lineHeight: 1.5,
              }}
            >
              {project.description.map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>

            {/* Tech */}
            <div
              style={{
                display: "flex",
                gap: "8px",
                flexWrap: "wrap",
              }}
            >
              {project.tech.map((t) => (
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

            {/* GitHub */}
            <a
              href="https://github.com/Gourih12"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                marginTop: "auto",
                alignSelf: "flex-start",
                fontSize: "12px",
                color: "#7dd3fc",
                textDecoration: "none",
                padding: "6px 14px",
                borderRadius: "999px",
                border: "1px solid rgba(125,211,252,0.4)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "rgba(125,211,252,0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
              }}
            >
              View on GitHub →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
