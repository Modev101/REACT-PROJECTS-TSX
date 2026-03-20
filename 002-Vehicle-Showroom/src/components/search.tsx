import { useState } from "react";

function Search({ onSearch }) {
  const [make, setMake] = useState("mercedes");
  const [model, setModel] = useState("slr");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      make,
      model,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        <h1>Manufacturer</h1>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
        />
      </label>

      <label>
        <h1>Model</h1>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
        />
      </label>

      <button type="submit">Search</button>
    </form>
  );
}

export default Search;
