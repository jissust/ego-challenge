import { useEffect, useState } from "react";
import Filters from "../components/Filters";
import Menu from "../components/Menu";
import ModelsGrid from "../components/ModelsGrid";
import Sort from "../components/Sort";

const Home = () => {
  const [models, setModels] = useState(null);

  useEffect(() => {
    fetch("https://challenge.egodesign.dev/api/models/")
      .then((response) => response.json())
      .then((data) => {
        setModels(data);
      })
      .catch((error) => console.error("Error fetching models:", error));
  }, []);

  if(!models) return <div>Cargando...</div>;

  return (
    <>
      <Menu />
      <div>Home Page</div>
      <Filters />
      <Sort />
      <ModelsGrid models={models} />
    </>
  );
};
export default Home;
