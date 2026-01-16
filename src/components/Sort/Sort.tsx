import { useState } from "react";
import arrowUp from "../../../src/assets/arrow-up.png";
import arrowDown from "../../../src/assets/arrow-down.png";
import type { SortType } from "../../types";
import "./Sort.css";
import { useModels } from "../../hooks/useModels";


const Sort = () => {
  const [open, setOpen] = useState(false);
  const { sort, setSort } = useModels();
 
  const getSortLabel = (sort:SortType) => {
    switch (sort) {
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

  const handleSelect = (value:SortType) => {
    setSort(value);
    setOpen(false);
  };

  return (
    <div className="sort-select">
      <div
        className={`sort-trigger ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span>{getSortLabel(sort)}</span>
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
            className={"NONE" === sort || sort === "" ? "active" : ""}
            onClick={() => handleSelect("NONE")}
          >
            Nada
          </li>
          <li
            key="PRICE_ASC"
            className={"PRICE_ASC" === sort ? "active" : ""}
            onClick={() => handleSelect("PRICE_ASC")}
          >
            De <b>Menor</b> a <b>mayor</b> precio
          </li>
          <li
            key="PRICE_DESC"
            className={"PRICE_DESC" === sort ? "active" : ""}
            onClick={() => handleSelect("PRICE_DESC")}
          >
            De <b>Mayor</b> a <b>menor</b> precio
          </li>
          <li
            key="YEAR_DESC"
            className={"YEAR_DESC" === sort ? "active" : ""}
            onClick={() => handleSelect("YEAR_DESC")}
          >
            Más nuevos primero
          </li>
          <li
            key="YEAR_ASC"
            className={"YEAR_ASC" === sort ? "active" : ""}
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
