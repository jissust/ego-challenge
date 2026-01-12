import "./Preload.css";

const Preload = () => {
  return (
    <div className="preload-container">
      <div className="text-center">
        <img src="../../src/assets/logo.png" alt="logo" className="logo-spin" />
        <div className="pt-2">Cargando...</div>
      </div>
    </div>
  );
}; 

export default Preload;