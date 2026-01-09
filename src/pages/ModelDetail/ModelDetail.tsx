import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import "./ModelDetail.css";

const ModelDetail = () => {
  const { id } = useParams();
  const [model, setModel] = useState(null);

  useEffect(() => {
    fetch(`https://challenge.egodesign.dev/api/models/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setModel(data);
      })
      .catch((error) => console.error("Error fetching model:", error));
  }, [id]);

  if (!model) return <div>Cargando...</div>;

  return (
    <div>
      <Menu />
      <div className="model-detail-hero">
        <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-md-6 model-detail-hero__image">
              <div className="model-detail-hero-image-container">
                <img src={model.photo} alt={model.name} className="img-fluid" />
              </div>
            </div>
            <div className="col-12 col-md-6 model-detail-hero__info">
              <div>
                <span className="model-detail-hero__segment">
                  {model.segment}
                </span>
                <h1 className="model-detail-hero__name">{model.name}</h1>
                <p
                  className="model-detail-hero__p"
                  dangerouslySetInnerHTML={{ __html: model.description }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="model-detail-carrusel">Carrusel</div>
      <div className="model-detail-info">
        <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center order-2 order-md-1">
              <div>
                <h2 className="model-detail-info__h2">{model.model_highlights[0].title}</h2>
                <p  className="model-detail-info__p" dangerouslySetInnerHTML={{ __html: model.model_highlights[0].content }}></p>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1 order-md-2">
              <div>
                <img
                  src={model.model_highlights[0].image}
                  alt={model.model_highlights[0].title}
                  className="img-fluid"/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="model-detail-info">
        <div className="container container-custom">
          <div className="row">
            <div className="col-12 col-md-6">
              <div>
                <img
                  src={model.model_highlights[1].image}
                  alt={model.model_highlights[1].title}
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <div>
                <h2 className="model-detail-info__h2">{model.model_highlights[1].title}</h2>
                <p className="model-detail-info__p" dangerouslySetInnerHTML={{ __html: model.model_highlights[1].content }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModelDetail;
