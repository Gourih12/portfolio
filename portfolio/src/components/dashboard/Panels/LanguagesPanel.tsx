const languages = [
  {
    code: "EN",
    name: "English",
    level: "Fluent",
    percent: 90,
  },
  {
    code: "ML",
    name: "Malayalam",
    level: "Native",
    percent: 100,
  },
  {
    code: "HI",
    name: "Hindi",
    level: "Fluent",
    percent: 90,
  },
  {
    code: "KR",
    name: "Korean",
    level: "Beginner",
    percent: 20,
  },
];


function ProgressBar({ percent }: { percent: number }) {
  return (
    <div
      style={{
        width: "100%",
        height: "8px",
        background: "rgba(255,255,255,0.08)",
        borderRadius: "999px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: `${percent}%`,
          height: "100%",
          background:
            "linear-gradient(90deg, #7dd3fc, #38bdf8)",
          boxShadow: "0 0 12px rgba(56,189,248,0.7)",
        }}
      />
    </div>
  );
}


export default function LanguagesPanel() {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "26px",
        maxWidth: "600px",
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
        Languages
      </h2>


      {/* Card */}
      <div
        style={{
          padding: "24px",
          borderRadius: "20px",
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        {languages.map((lang) => (
          <div
            key={lang.name}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                fontSize: "14px",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                <span style={{ color: "#7dd3fc" }}>
                  {lang.code}
                </span>
                <span>{lang.name}</span>
              </div>


              <span
                style={{
                  fontSize: "12px",
                  color: "#9fb3c8",
                }}
              >
                {lang.level}
              </span>
            </div>


            <ProgressBar percent={lang.percent} />
          </div>
        ))}
      </div>
    </div>
  );
}



