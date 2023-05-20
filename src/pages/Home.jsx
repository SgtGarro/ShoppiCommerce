import React from "react";

import Card from "../components/Card";
import LayoutProducts from "../components/LayoutProducts";

function Home() {
  const [items, setItems] = React.useState(undefined);

  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then(setItems);
  }, []);
  return (
    <LayoutProducts>
      {items?.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </LayoutProducts>
  );
}

export default Home;
