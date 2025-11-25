import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Group, Grid3x3, List } from "lucide-react";
import { ProductTable, type Product } from "./ProductTable";
import { Toggle } from "../ui/toggle";

interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  const [groupByCategory, setGroupByCategory] = useState(true);

  // Group products by category
  const groupedProducts = products.reduce(
    (acc, product) => {
      const categoryId = product.category.id;
      if (!acc[categoryId]) {
        acc[categoryId] = {
          category: product.category,
          products: [],
        };
      }
      acc[categoryId].products.push(product);
      return acc;
    },
    {} as Record<
      string,
      { category: Product["category"]; products: Product[] }
    >,
  );

  return (
    <div className="w-full">
      {/* Toggle button */}
      <div className="relative z-10 mb-6 flex items-center gap-2">
        <Toggle
          aria-label="Toggle bookmark"
          size="sm"
          variant="outline"
          onClick={() => setGroupByCategory(!groupByCategory)}
          className="data-[state=on]:bg-transparent data-[state=on]:*:[svg]:fill-green-800 data-[state=on]:*:[svg]:stroke-green-800"
        >
          <Group className="h-4 w-4" />
          {groupByCategory ? "Vis alle produkter" : "Grupper etter kategori"}
        </Toggle>
      </div>

      {/* Content */}
      {!groupByCategory ? (
        // List view - all products
        <ProductTable data={products} showSubtotal={false} />
      ) : (
        // Grouped by category view
        <div className="space-y-8">
          {Object.entries(groupedProducts).map(
            ([categoryId, { category, products: categoryProducts }]) => (
              <div key={categoryId} className="space-y-4">
                {/* Category header */}
                <div className="flex items-start gap-3">
                  <img
                    src={category.iconUrl}
                    alt={category.title}
                    className="mt-1 h-12 w-12 flex-shrink-0 rounded"
                  />
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h2>
                    <p className="mt-1 text-sm text-slate-600">
                      {category.subtitle}
                    </p>
                  </div>
                </div>

                {/* Category products table */}
                <ProductTable data={categoryProducts} showSubtotal={true} />
              </div>
            ),
          )}
        </div>
      )}
    </div>
  );
};
