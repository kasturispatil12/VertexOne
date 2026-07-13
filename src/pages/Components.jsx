import { useState } from "react";
import "./Components.css";

import { componentsData } from "../data/components";
import ComponentCard from "../components/ComponentCard";

function Components() {

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("All");

  const categories = [
    "All",
    "Infrastructure",
    "Networking",
    "Storage",
    "Cooling"
  ];

  const filteredComponents = componentsData.filter((component) => {

    const matchesSearch =
      component.name.toLowerCase().includes(search.toLowerCase()) ||
      component.description.toLowerCase().includes(search.toLowerCase()) ||
      component.function.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      component.category === category;

    return matchesSearch && matchesCategory;

  });

  return (

    <section className="components-page">

      <h1>Data Center Components</h1>

      <p>
        Explore all infrastructure components used in modern
        enterprise data centers.
      </p>

      <input
        type="text"
        placeholder="Search components..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="category-buttons">

        {categories.map((cat) => (

          <button
            key={cat}
            className={category === cat ? "active" : ""}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>

        ))}

      </div>

      <div className="components-grid">

        {filteredComponents.map((component) => (

          <ComponentCard
            key={component.id}
            component={component}
          />

        ))}

      </div>

    </section>

  );

}

export default Components;