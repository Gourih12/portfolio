"use client";


import { createContext, useContext, useState } from "react";


type Panel =
  | "home"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "languages"
  | "moretome";


type DashboardContextType = {
  activePanel: Panel;
  setActivePanel: (panel: Panel) => void;
};


const DashboardContext = createContext<DashboardContextType | null>(null);


export function DashboardProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activePanel, setActivePanel] = useState<Panel>("home");


  return (
    <DashboardContext.Provider value={{ activePanel, setActivePanel }}>
      {children}
    </DashboardContext.Provider>
  );
}


export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) {
    throw new Error("useDashboard must be used inside DashboardProvider");
  }
  return ctx;
}