export type FilterType = "AUTOS" | "PICKUPS" | "SUVS" | "ALL" | "";

export interface FiltersProps {
  activeFilter: string;
  onChange: (value: FilterType) => void;
}

