import SideIconRail from "./SideIconRail";
import PanelArea from "./PanelArea";
import { DashboardProvider } from "./DashboardContext";


export default function DashboardShell() {
  return (
    <DashboardProvider>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px",
            height: "80vh",
            borderRadius: "24px",
            background: "rgba(14, 26, 43, 0.85)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            border: "1px solid rgba(255, 255, 255, 0.08)",
            boxShadow: "0 0 60px rgba(0, 150, 255, 0.15)",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <SideIconRail />
          <PanelArea />
        </div>
      </div>
    </DashboardProvider>
  );
}
