import React from "react";

import Card from "../components/Card";
import Layout from "../components/Layout";
import LayoutProducts from "../components/LayoutProducts";

function Home() {
  const [items, setItems] = React.useState(undefined);

  React.useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((response) => response.json())
      .then((data) =>
        setItems(
          data.map((prod) => {
            return { ...prod, quantity: 0 };
          })
        )
      );
  }, []);

  return (
    <Layout>
      <LayoutProducts>
        {items?.map((item) => (
          <Card key={item.id} data={item} />
        ))}
      </LayoutProducts>
    </Layout>
  );
}

export default Home;
