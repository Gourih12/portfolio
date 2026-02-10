"use client";


import { useDashboard } from "./DashboardContext";
import HomePanel from "./Panels/HomePanel";
import SkillsPanel from "./Panels/SkillsPanel";
import ExperiencePanel from "./Panels/ExperiencePanel";
import EducationPanel from "./Panels/EducationPanel";
import LanguagesPanel from "./Panels/LanguagesPanel";
import MoretoMePanel from "./Panels/MoretoMePanel";
import ProjectsPanel from "./Panels/ProjectsPanel";



export default function PanelArea() {
  const { activePanel } = useDashboard();


  return (
    <div
      style={{
        flex: 1,
        padding: "40px",
        color: "#e5e7eb",
        fontSize: "28px",
        overflowY: "auto",
      }}
    >
      {activePanel === "home" && <HomePanel />}
      {activePanel === "skills" && <SkillsPanel />}
      {activePanel === "education" && <EducationPanel />}
      {activePanel === "experience" && <ExperiencePanel />}
      {activePanel === "projects" && <ProjectsPanel />}
      {activePanel === "languages" && <LanguagesPanel />}
      {activePanel === "moretome" && <MoretoMePanel />}
     
    </div>
  );
}

