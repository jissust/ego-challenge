import Filters from "../../components/Filters/Filters";
import Menu from "../../components/Menu/Menu";
import ModelsGrid from "../../components/ModelsGrid/ModelsGrid";
import Sort from "../../components/Sort/Sort";
import Footer from "../../components/Footer/Footer";
import './Home.css';
import { ModelsProvider } from "../../context/ModelsProvider";
import { useModels } from "../../hooks/useModels";
import Preload from "../../components/Preload/Preload";

const Home = () => {
  const { loading } = useModels();
  
  if(loading) return <Preload />  
  return (
    <ModelsProvider>
    <div className="layout">
      <Menu />
      <main>
        <div className="container container-custom">
          <h1 className="h1-title h1-space-xy">Descubrí todos los modelos</h1>
        </div>
        <div className="container container-custom">
          <div className="d-flex justify-content-between align-items-center border-bottom-gray pb-3 pb-md-2 ">
            <Filters />
            <Sort />
          </div>
        </div>
        <ModelsGrid />
      </main>
      <Footer />
    </div>
    </ModelsProvider>
  );
};
export default Home;
