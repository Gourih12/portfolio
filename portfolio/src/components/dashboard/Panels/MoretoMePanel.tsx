export default function MoretoMePanel() {
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
        More About Me
      </h2>

      {/* STEM Outreach Section */}
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#f1f5f9",
          }}
        >
          STEM Outreach Instructor
        </div>

        <div
          style={{
            fontSize: "13px",
            color: "#9fb3c8",
          }}
        >
          Tavish Leora School, Nemom • Feb 2025
        </div>

        <ul
          style={{
            margin: 0,
            paddingLeft: "18px",
            fontSize: "13px",
            color: "#cbd5e1",
            lineHeight: 1.6,
          }}
        >
          <li>
            Conducted an engaging session on{" "}
            <strong>Basics of Electronics Engineering and Robotics</strong> for
            junior class students.
          </li>
          <li>
            Designed and led hands-on activities to spark curiosity and interest
            in engineering through interactive learning.
          </li>
          <li>
            Appreciated by school management for contributions towards STEM
            education and community outreach.
          </li>
        </ul>
      </div>

      {/* Interests Section */}
      <div
        style={{
          padding: "20px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "14px",
        }}
      >
        <div
          style={{
            fontSize: "16px",
            fontWeight: 500,
            color: "#f1f5f9",
          }}
        >
          Interests & Hobbies
        </div>

        <div
          style={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
          }}
        >
          {[
            "Swimming",
            "Conspiracy Thrillers",
            "Puzzle Solving",
            "Brain Teasers",
            "Sketching",
            "Poems",
          ].map((interest) => (
            <span
              key={interest}
              style={{
                fontSize: "12px",
                padding: "6px 14px",
                borderRadius: "999px",
                background: "rgba(0,180,255,0.15)",
                color: "#7dd3fc",
              }}
            >
              {interest}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
