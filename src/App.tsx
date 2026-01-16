import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import ModelDetail from "./pages/ModelDetail/ModelDetail";
import { ModelsProvider } from "./context/ModelsProvider";

function App() {
  return (
    <ModelsProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/model/:id" element={<ModelDetail />} />
      </Routes>
    </ModelsProvider>
  );
}

export default App;
