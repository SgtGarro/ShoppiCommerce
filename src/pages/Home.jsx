import React from "react";

import Card from "../components/Card";
import Layout from "../components/Layout";
import LayoutProducts from "../components/LayoutProducts";
import { ShoppingCartContext } from "../context";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Home() {
  const { items, searchByTitle, setSearchByTitle, filteredItems } =
    React.useContext(ShoppingCartContext);

  const [isFocusSearch, setIsFocusSearch] = React.useState(false);

  const renderView = function () {
    try {
      if (!items.length) return <p>Loading...</p>;
      return filteredItems.map((item) => <Card key={item.id} data={item} />);
    } catch (err) {
      console.error(err);
      return <p>Something bad happen</p>;
    }
  };

  return (
    <Layout>
      <div
        className={`flex items-center max-w-3xl w-full mx-auto mb-8 border-2 ${
          !isFocusSearch ? "border-gray-400" : "border-gray-900"
        } rounded-lg overflow-hidden pr-3 gap-3`}
      >
        <input
          onFocus={() => setIsFocusSearch(true)}
          onBlur={() => setIsFocusSearch(false)}
          value={searchByTitle}
          onChange={(event) => setSearchByTitle(event.target.value)}
          className="w-full pl-3 pr-1 py-2 text-[#495057] rounded-s-lg placeholder:text-gray-400 outline-none"
          type="text"
          placeholder="Search a product"
        />
        <MagnifyingGlassIcon
          className={`${
            !isFocusSearch ? "text-gray-400" : "text-gray-900"
          }  w-6 h-6`}
        />
      </div>
      <LayoutProducts>{renderView()}</LayoutProducts>
    </Layout>
  );
}

export default Home;
