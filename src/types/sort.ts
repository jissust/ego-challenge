export type SortType = "PRICE_ASC" | "PRICE_DESC" | "YEAR_ASC" | "YEAR_DESC" | "NONE" | "";

export interface SortProps {
  activeSort: SortType;
  onChange: (value: SortType) => void;
}