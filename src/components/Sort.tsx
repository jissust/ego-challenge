const Sort = ({ activeSort, onChange }) => {
    return (
    <select value={activeSort} onChange={(e) => onChange(e.target.value)}>
      <option value="">Ordenar por</option>
      <option value="PRICE_ASC">Menor a mayor precio</option>
      <option value="PRICE_DESC">Mayor a menor precio</option>
      <option value="YEAR_DESC">Más nuevos primero</option>
      <option value="YEAR_ASC">Más viejos primero</option>
    </select>
    )
}
export default Sort;