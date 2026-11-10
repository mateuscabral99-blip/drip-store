import "./FilterGroup.css";

// title: título | inputType: "checkbox" ou "radio" | options: [{ text, value }]
function FilterGroup({ title, inputType = "checkbox", options }) {
  return (
    <div className="filter-group">
      <h3>{title}</h3>
      {options.map((option) => (
        <label key={option.text}>
          <input
            type={inputType}
            name={title}
            value={option.value ?? option.text}
          />
          {option.text}
        </label>
      ))}
    </div>
  );
}

export default FilterGroup;