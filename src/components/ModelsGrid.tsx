import { Link } from "react-router-dom";

const ModelsGrid = ({models}) => {
    return (
    <section>
      <h2>Grilla</h2>

      <ul>
        {models.map((model) => (
          <li key={model.id}>
            <Link to={`/model/${model.id}`}>
              <div>{model.name}</div>
              <div>Price: {model.price}</div>
              <div>Year: {model.year}</div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
    )
}
export default ModelsGrid;