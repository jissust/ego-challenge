import { useEffect, useState } from "react";
import Filters from "../../components/Filters/Filters";
import Menu from "../../components/Menu/Menu";
import ModelsGrid from "../../components/ModelsGrid";
import Sort from "../../components/Sort/Sort";
import './Home.css';
import {models} from "../../mocks/models.json";

const Home = () => {
  /*////comentado momentaneamente para usar datos mocks
  const [models, setModels] = useState(null);*/
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  /* //comentado momentaneamente para usar datos mocks
  useEffect(() => {
    fetch("https://challenge.egodesign.dev/api/models/")
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => console.error("Error fetching models:", error));
  }, []);*/

  if (!models) return <div>Cargando...</div>;

  const applySort = (data) => {
    const sorted = [...data];
    switch (sort) {
      case "PRICE_ASC":
        return sorted.sort((a, b) => a.price - b.price);
      case "PRICE_DESC":
        return sorted.sort((a, b) => b.price - a.price);
      case "YEAR_DESC":
        return sorted.sort((a, b) => b.year - a.year);
      case "YEAR_ASC":
        return sorted.sort((a, b) => a.year - b.year);
      default:
        return sorted;
    }
  };

  const applyFilter = (data) => {
    switch (filter) {
      case "AUTOS":
        return data.filter(
          (m) => m.segment !== "Pickups y Comerciales" && m.segment !== "SUVs"
        );
      case "PICKUPS":
        return data.filter((m) => m.segment === "Pickups y Comerciales");
      case "SUVS":
        return data.filter((m) => m.segment === "SUVs");
      default:
        return data;
    }
  };

  const visibleModels = applySort(applyFilter(models));

  return (
    <>
      <Menu />
      <div className="container container-custom">
        <h1 className="h1-title h1-space-xy">Descubrí todos los modelos</h1>
      </div>
      <div className="container container-custom">
        <div className="d-flex justify-content-between align-items-center border-bottom-gray pb-3 pb-md-2 ">
          <Filters activeFilter={filter} onChange={setFilter} />
          <Sort activeSort={sort} onChange={setSort} />
        </div>
      </div>
      <ModelsGrid models={visibleModels} />
    </>
  );
};
export default Home;
