import { useContext } from "react";
import { ModelsContext } from "../context/ModelsContext";

export const useModels = () => {
  const ctx = useContext(ModelsContext);
  if (!ctx) {
    throw new Error("useModels debe usarse dentro de ModelsProvider");
  }
  return ctx;
};
