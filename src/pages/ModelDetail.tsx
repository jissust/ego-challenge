import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Menu from "../components/Menu/Menu";

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
      <h1>{model.name}</h1>
      <p>Year: {model.year}</p>
      <p>Price: ${model.price}</p>
    </div>
  );
};
export default ModelDetail;
