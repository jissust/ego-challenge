import { useState } from "react";
import type { FiltersProps, FilterType } from "../../types";
import arrowUp from "../../../src/assets/arrow-up.png";
import arrowDown from "../../../src/assets/arrow-down.png";
import "./Filters.css";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "Todos", value: "ALL" },
  { label: "Autos", value: "AUTOS" },
  { label: "Pickups y Comerciales", value: "PICKUPS" },
  { label: "SUVs y crossovers", value: "SUVS" },
];

const Filters = ({ activeFilter, onChange }: FiltersProps) => {
  const [open, setOpen] = useState(false);
  
  const selectedOption = FILTERS.find(o => o.value === activeFilter);
  
  return (
    <>
      <div className="filters d-md-flex d-none">
        <div className="filters-text">Filtrar por </div>
        {FILTERS.map((filter) => (
          <button
            className={
              filter.value === activeFilter
                ? "filters-button active"
                : "filters-button"
            }
            key={filter.value}
            onClick={() => onChange(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>

      <div className="filters-mobile d-block d-md-none">
        <div
          className={`filters-trigger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span>{selectedOption ? selectedOption.label : "Filtrar por "}</span>
          <span className="arrow">
            {open ? (
              <img src={arrowUp} alt="Up arrow" />
            ) : (
              <img src={arrowDown} alt="Down arrow" />
            )}
          </span>
        </div>
        {open && (
          <ul className="filters-options">
            {FILTERS.map((filter) => (
              <li
                className={
                  filter.value === activeFilter ? "active" : ""
                }
                key={filter.value}
                onClick={() => {
                  onChange(filter.value);
                  setOpen(false);
                }}
              >
                {filter.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Filters;
