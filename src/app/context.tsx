"use client";
import { createContext, useContext, useState } from "react";

export const SimulationContext = createContext<null | {
  simulationSpec: SimulationSpecificationProps | null;
  setSimulationSpec: (spec: SimulationSpecificationProps) => void;
}>(null);

export type SimulationSpecificationProps = {
  earth: {};
  moon: {};
  sun: {};
};

export function ContextProvider({ children }: { children: React.ReactNode }) {
  const [simulationSpec, setSimulationSpec] =
    useState<SimulationSpecificationProps | null>({
      earth: {},
      moon: {},
      sun: {},
    });

  return (
    <SimulationContext.Provider
      value={{
        simulationSpec,
        setSimulationSpec,
      }}
    >
      {children}
    </SimulationContext.Provider>
  );
}

export function useSimulationSpecs() {
  const context = useContext(SimulationContext);
  if (!context) {
    throw new Error("useSimulationSpecs must be used within a ContextProvider");
  }
  return context;
}
