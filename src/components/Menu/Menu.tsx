import "./Menu.css";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <nav className="navbar navbar-current">
      <div className="container-fluid container-nav d-flex align-items-center">
        <div className="d-flex align-items-center gap-4">
          <NavLink className="navbar-brand" to="/">
            <img
              src="../../../src/assets/logo.png"
              alt="Logo"
              className="d-inline-block align-text-top"
            />
          </NavLink>

          <div className="nav-links d-none d-md-flex gap-4 ms-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `nav-item-link ${isActive ? "active" : ""}`
              }
            >
              Modelos
            </NavLink>

            <NavLink
              to="/model/1"
              className={({ isActive }) =>
                `nav-item-link ${isActive ? "active" : ""}`
              }
            >
              Ficha de modelo
            </NavLink>
          </div>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-text">Menú</span>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end offcanvas-custom"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header offcanvas-header-custom">
            {/*<h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>*/}
            <NavLink className="navbar-brand" to="/">
              <img
                src="../../../src/assets/logo.png"
                alt="Logo"
                className="d-inline-block align-text-top"
              />
            </NavLink>
            {/*<button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>*/}
            <button
              type="button"
              className="btn-close btn-close-custom"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <img
                src="../../../src/assets/gray.png"
                alt="Logo"
                className="d-inline-block align-text-top"
              />
            </button>
          </div>
          <div className="offcanvas-body">
            <div className="d-flex justify-content-end align-items-center gap-2 offcanvas-body-container-close">
                <span className="btn-close-text">Cerrar</span>
                <button
                type="button"
                className="btn-close btn-close-custom d-flex"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
                >
                <img
                    src="../../../src/assets/close.png"
                    alt="Logo"
                    className="d-inline-block align-text-top"
                />
                </button>
            </div>
            <div className="offcanvas-body-container-ul">
                <ul className="navbar-nav navbar-nav-custom justify-content-end flex-grow-1">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Modelos
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Servicios y Accesorios
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Financiación
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Reviews y Comunidad
                    </a>
                </li>
                </ul>
            </div>
            <div className="offcanvas-body-container-ul">
                <ul className="navbar-nav navbar-nav-custom justify-content-end flex-grow-1">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Toyota Mobility Service
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Toyota Gazoo Racing
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Toyota Híbridos
                    </a>
                </li>
                </ul>
            </div>
            <div className="offcanvas-body-container-ul">
                <ul className="navbar-nav navbar-nav-custom justify-content-end flex-grow-1">
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Concesionarios
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Test Drive
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Contacto
                    </a>
                </li>
                </ul>
            </div>
            <ul className="navbar-nav navbar-nav-custom justify-content-end flex-grow-1">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Actividades
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Servicios al Cliente
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Ventas Especiales
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Innovación
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Prensa
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Acerca de...
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Menu;
