import { createContext, useState } from "react";

export const ComparisonContext = createContext();

function ComparisonProvider({ children }) {

  const [selectedComponents, setSelectedComponents] = useState([]);

  const addComponent = (component) => {

    const exists = selectedComponents.find(
      item => item.id === component.id
    );

    if (!exists) {

      setSelectedComponents([
        ...selectedComponents,
        component
      ]);

    }

  };

  const removeComponent = (id) => {

    setSelectedComponents(

      selectedComponents.filter(
        item => item.id !== id
      )

    );

  };

  return (

    <ComparisonContext.Provider

      value={{
        selectedComponents,
        addComponent,
        removeComponent
      }}

    >

      {children}

    </ComparisonContext.Provider>

  );

}

export default ComparisonProvider;