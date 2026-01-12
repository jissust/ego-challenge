import "./Preload.css";
import logo from "../../../src/assets/logo.png";

const Preload = () => {
  return (
    <div className="preload-container">
      <div className="text-center">
        <img src={logo} alt="logo" className="logo-spin" />
        <div className="pt-2">Cargando...</div>
      </div>
    </div>
  );
}; 

export default Preload;