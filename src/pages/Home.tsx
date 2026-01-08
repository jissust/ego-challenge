import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Menu from "../components/Menu";
import ModelsGrid from "../components/ModelsGrid";
import Sort from "../components/Sort";

const Home = () => {
  const [models, setModels] = useState(null);
  const [sort, setSort] = useState("");

  useEffect(() => {
    fetch("https://challenge.egodesign.dev/api/models/")
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => console.error("Error fetching models:", error));
  }, []);

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

    const visibleModels = applySort(models);

  return (
    <>
      <Menu />
      <div>Home Page</div>
      <Filters />
      <Sort activeSort={sort} onChange={setSort} />
      <ModelsGrid models={visibleModels} />
    </>
  );
};
export default Home;
