const FILTERS = [
  { label: "Todos", value: "ALL" },
  { label: "Autos", value: "AUTOS" },
  { label: "Pickups y Comerciales", value: "PICKUPS" },
  { label: "SUVs y crossovers", value: "SUVS" },
];

const Filters = ({ activeFilter, onChange }) => {
  return (
    <div>
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          onClick={() => onChange(filter.value)}
          style={{
            fontWeight: activeFilter === filter.value ? "bold" : "normal",
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
};
export default Filters;
