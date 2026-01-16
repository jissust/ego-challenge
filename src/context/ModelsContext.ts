import { createContext } from "react";
import type { Model, SortType, FilterType } from "../types";

type ModelsContextType = {
  models: Model[];
  visibleModels: Model[];
  setSort: (s: SortType) => void;
  setFilter: (f: FilterType) => void;
  sort: SortType;
  filter: FilterType;
  loading: boolean;
};

export const ModelsContext = createContext<ModelsContextType | null>(null);
