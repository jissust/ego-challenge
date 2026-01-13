export interface FiltersProps {
  activeFilter: string;
  onChange: (value: string) => void;
}
export interface SortProps {
  activeSort: string;
  onChange: (value: string) => void;
}