import Filters from "../components/Filters";
import Menu from "../components/Menu";
import ModelsGrid from "../components/ModelsGrid";
import Sort from "../components/Sort";

const Home = () => {
  return (
    <>
      <Menu />
      <div>Home Page</div>
      <Filters />
      <Sort />
      <ModelsGrid />
    </>
  );
};
export default Home;
