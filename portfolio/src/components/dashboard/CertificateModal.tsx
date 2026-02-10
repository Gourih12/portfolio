

export default function CertificateModal({
  title,
  issuer,
  onClose,
}: {
  title: string;
  issuer: string;
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
          width: "420px",
          borderRadius: "20px",
          background: "rgba(14, 26, 43, 0.95)",
          border: "1px solid rgba(255,255,255,0.12)",
          boxShadow: "0 0 40px rgba(56,189,248,0.4)",
          padding: "20px",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image Placeholder */}
        <div
          style={{
            width: "100%",
            height: "240px",
            borderRadius: "14px",
            background: "rgba(255,255,255,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7dd3fc",
            marginBottom: "16px",
            fontSize: "14px",
          }}
        >
          Certificate Image
        </div>


        {/* Info */}
        <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
          <div style={{ color: "#e6eefc", fontSize: "14px" }}>
            {title}
          </div>
          <div style={{ color: "#9fb3c8", fontSize: "12px" }}>
            {issuer}
          </div>
        </div>


        {/* Close */}
        <button
          onClick={onClose}
          style={{
            marginTop: "16px",
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



