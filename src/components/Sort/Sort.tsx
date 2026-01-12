import { useState } from "react";
import arrowUp from "../../../src/assets/arrow-up.png";
import arrowDown from "../../../src/assets/arrow-down.png";
import "./Sort.css";

interface SortProps {
  activeSort: string;
  onChange: (value: string) => void;
}

const Sort = ({ activeSort, onChange }: SortProps) => {
  const [open, setOpen] = useState(false);
  
  const getSortLabel = (activeSort:string) => {
    switch (activeSort) {
      case "PRICE_ASC":
        return "De menor a mayor precio";
      case "PRICE_DESC":
        return "De mayor a menor precio";
      case "YEAR_DESC":
        return "Más nuevos primero";
      case "YEAR_ASC":
        return "Más viejos primero";
      default:
        return "Ordenar por";
    }
  };

  const handleSelect = (value:string) => {
    onChange(value);
    setOpen(false);
  };

  return (
    <div className="sort-select">
      <div
        className={`sort-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{getSortLabel(activeSort)}</span>
        <span className="arrow">
          {open ? (
            <img src={arrowUp} alt="Up arrow" />
          ) : (
            <img src={arrowDown} alt="Down arrow" />
          )}
        </span>
      </div>

      {open && (
        <ul className="sort-options">
          <li
            key="NONE"
            className={"NONE" === activeSort || activeSort === "" ? "active" : ""}
            onClick={() => handleSelect("NONE")}
          >
            Nada
          </li>
          <li
            key="PRICE_ASC"
            className={"PRICE_ASC" === activeSort ? "active" : ""}
            onClick={() => handleSelect("PRICE_ASC")}
          >
            De <b>Menor</b> a <b>mayor</b> precio
          </li>
          <li
            key="PRICE_DESC"
            className={"PRICE_DESC" === activeSort ? "active" : ""}
            onClick={() => handleSelect("PRICE_DESC")}
          >
            De <b>Mayor</b> a <b>menor</b> precio
          </li>
          <li
            key="YEAR_DESC"
            className={"YEAR_DESC" === activeSort ? "active" : ""}
            onClick={() => handleSelect("YEAR_DESC")}
          >
            Más nuevos primero
          </li>
          <li
            key="YEAR_ASC"
            className={"YEAR_ASC" === activeSort ? "active" : ""}
            onClick={() => handleSelect("YEAR_ASC")}
          >
            Más viejos primero
          </li>
        </ul>
      )}
    </div>
  );
};
export default Sort;
