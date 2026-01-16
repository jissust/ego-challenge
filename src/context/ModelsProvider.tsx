import { useEffect, useMemo, useState } from "react";
import type { Model, SortType, FilterType } from "../types";
import { ModelsContext } from "./ModelsContext";

export const ModelsProvider = ({ children }: { children: React.ReactNode }) => {
  const [models, setModels] = useState<Model[]>([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState<SortType>("NONE");
  const [filter, setFilter] = useState<FilterType>("ALL");

  useEffect(() => {
    fetch("https://challenge.egodesign.dev/api/models/")
      .then((res) => res.json())
      .then((data) => {
        setModels(data);
        setLoading(false);
      });
  }, []);

  const visibleModels = useMemo(() => {
    let data = [...models];

    // Filter
    if (filter === "AUTOS") {
      data = data.filter(
        (m) => m.segment !== "Pickups y Comerciales" && m.segment !== "SUVs"
      );
    }
    if (filter === "PICKUPS") {
      data = data.filter((m) => m.segment === "Pickups y Comerciales");
    }
    if (filter === "SUVS") {
      data = data.filter((m) => m.segment === "SUVs");
    }

    // Sort
    switch (sort) {
      case "PRICE_ASC":
        return data.sort((a, b) => a.price - b.price);
      case "PRICE_DESC":
        return data.sort((a, b) => b.price - a.price);
      case "YEAR_ASC":
        return data.sort((a, b) => a.year - b.year);
      case "YEAR_DESC":
        return data.sort((a, b) => b.year - a.year);
      default:
        return data;
    }
  }, [models, sort, filter]);

  return (
    <ModelsContext.Provider
      value={{
        models,
        visibleModels,
        setSort,
        setFilter,
        sort,
        filter,
        loading,
      }}
    >
      {children}
    </ModelsContext.Provider>
  );
};