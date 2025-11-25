import React, { useEffect, useState } from "react";

import { WidgetFooter } from "@/components/custom/WidgetFooter";
import { ProductList } from "@/components/custom/ProductList";
import { StorePodium } from "@/components/custom/StorePodium";
import { type Product } from "./ProductTable";

export default function Widget() {
  const [data, setData] = useState<Product[]>([]);

  const getData = async () => {
    const baseUrl = import.meta.env.PUBLIC_API_URL;
    console.log("Base URL:", baseUrl);

    const url = `${baseUrl}/api/v1/price-tests/218554362`;

    const response = await fetch(url);

    const json = await response.json();

    setData(json["items"]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <StorePodium products={data} />

      <WidgetFooter />

      <br />
      <ProductList products={data} />

      <WidgetFooter />
    </div>
  );
}
