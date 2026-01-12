import { Link } from "react-router-dom";
import "./ModelsGrid.css";

export interface Model {
  id: number;
  name: string;
  year: number;
  price: number;
  thumbnail: string;
}

interface ModelsGridProps {
  models: Model[];
}

const ModelsGrid = ({ models }: ModelsGridProps) => {
  const formatPrice = (value:number) => {
    return new Intl.NumberFormat("es-AR").format(value);
  };

  return (
    <div className="container container-custom models-grid">
      <div className="row">
        {models.map((model) => (
          <div className="col-12 col-md-6 col-lg-3 pb-3" key={model.id}>
            <Link className="model-link" to={`/model/${model.id}`}>
              <div>
                <div className="model-name">{model.name}</div>
                <div className="model-price-year">
                  <div>{model.year}</div> <div>|</div>${formatPrice(model.price)}
                  <div></div>
                </div>
                <div className="model-img">
                  <img src={model.thumbnail} alt={model.name} />
                </div>
                <div className="model-container-button">
                  <button className="model-button">Ver Modelo</button>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ModelsGrid;
