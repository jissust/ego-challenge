import { useState } from "react";
import type { FilterType } from "../../types";
import { useModels } from "../../hooks/useModels";
import arrowUp from "../../../src/assets/arrow-up.png";
import arrowDown from "../../../src/assets/arrow-down.png";
import "./Filters.css";

const FILTERS: { label: string; value: FilterType }[] = [
  { label: "Todos", value: "ALL" },
  { label: "Autos", value: "AUTOS" },
  { label: "Pickups y Comerciales", value: "PICKUPS" },
  { label: "SUVs y crossovers", value: "SUVS" },
];

const Filters = () => {
  const [open, setOpen] = useState(false);
  const { filter, setFilter } = useModels(); 
  const selectedOption = FILTERS.find(o => o.value === filter);
  
  return (
    <>
      <div className="filters d-md-flex d-none">
        <div className="filters-text">Filtrar por </div>
        {FILTERS.map((filterItem) => (
          <button
            className={
              filterItem.value === filter
                ? "filters-button active"
                : "filters-button"
            }
            key={filterItem.value}
            onClick={() => setFilter(filterItem.value)}
          >
            {filterItem.label}
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
            {FILTERS.map((filterItem) => (
              <li
                className={
                  filterItem.value === filter ? "active" : ""
                }
                key={filterItem.value}
                onClick={() => {
                  setFilter(filterItem.value);
                  setOpen(false);
                }}
              >
                {filterItem.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default Filters;
