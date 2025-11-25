import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export interface Badge {
  id: string;
  imageUrl: string;
  title: string;
  detailsUrl: string;
}

export interface StorePrice {
  storeName: string;
  price: number;
}

export interface Category {
  id: string;
  title: string;
  subtitle: string;
  iconUrl: string;
}

export interface Product {
  id: string;
  category: Category;
  title: string;
  subtitle: string;
  badges: Badge[];
  storePrices: StorePrice[];
}

interface ProductTableProps {
  data: Product[];
  showSubtotal?: boolean;
}

export const ProductTable = ({
  data,
  showSubtotal = false,
}: ProductTableProps) => {
  // Extract unique store names from the data
  const storeNames = Array.from(
    new Set(
      data.flatMap((product) => product.storePrices.map((sp) => sp.storeName)),
    ),
  );

  const getLowestPrice = (storePrices: StorePrice[]): number => {
    return Math.min(...storePrices.map((sp) => sp.price));
  };

  const getPriceForStore = (
    storePrices: StorePrice[],
    storeName: string,
  ): number | undefined => {
    return storePrices.find((sp) => sp.storeName === storeName)?.price;
  };

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace(".", ",");
  };

  // Calculate totals for each store
  const storeTotals = storeNames.map((storeName) => {
    const total = data.reduce((sum, product) => {
      const price = getPriceForStore(product.storePrices, storeName);
      return sum + (price || 0);
    }, 0);
    return { storeName, total };
  });

  const lowestTotal = Math.min(...storeTotals.map((st) => st.total));

  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-lg border border-slate-200">
        <Table>
          <TableHeader className="bg-slate-50">
            <TableRow className="border-b border-slate-200 hover:bg-slate-50">
              <TableHead className="min-w-48 font-semibold text-slate-700">
                Produkt
              </TableHead>
              <TableHead className="w-20 font-semibold text-slate-700"></TableHead>
              {storeNames.map((storeName) => (
                <TableHead
                  key={storeName}
                  className="px-4 text-right font-semibold whitespace-nowrap text-slate-700"
                >
                  {storeName}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((product) => {
              const lowestPrice = getLowestPrice(product.storePrices);
              return (
                <TableRow
                  key={product.id}
                  className="border-b border-slate-200 hover:bg-slate-50"
                >
                  <TableCell className="min-w-48">
                    <div className="flex flex-col gap-0.5">
                      <div className="font-semibold text-slate-900">
                        {product.title}
                      </div>
                      <div className="text-xs text-slate-500">
                        {product.subtitle}
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="w-20">
                    <div className="flex items-center gap-2">
                      {product.badges.map((badge) => (
                        <a
                          key={badge.id}
                          href={badge.detailsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group relative inline-flex items-center"
                          title={badge.title}
                        >
                          <img
                            src={badge.imageUrl}
                            alt={badge.title}
                            className="h-6 w-6 cursor-pointer transition-transform hover:scale-110"
                          />
                          <div className="absolute bottom-full left-1/2 z-10 mb-2 hidden -translate-x-1/2 rounded bg-slate-900 px-2 py-1 text-xs whitespace-nowrap text-white group-hover:block">
                            {badge.title}
                          </div>
                        </a>
                      ))}
                    </div>
                  </TableCell>
                  {storeNames.map((storeName) => {
                    const price = getPriceForStore(
                      product.storePrices,
                      storeName,
                    );
                    const isLowest = price === lowestPrice;
                    return (
                      <TableCell
                        key={storeName}
                        className={`px-4 text-right font-medium whitespace-nowrap ${
                          isLowest ? "text-emerald-600" : "text-slate-900"
                        }`}
                      >
                        {price !== undefined ? `${formatPrice(price)} kr` : "-"}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}

            {/* Total/Subtotal row */}
            <TableRow className="border-b border-slate-200 bg-slate-50 font-semibold">
              <TableCell className="min-w-48 text-slate-900">
                {showSubtotal ? "Delsum" : "Sum"}
              </TableCell>
              <TableCell className="w-20" />
              {storeTotals.map(({ storeName, total }) => {
                const isLowest = total === lowestTotal;
                return (
                  <TableCell
                    key={storeName}
                    className={`px-4 text-right whitespace-nowrap ${
                      isLowest ? "bg-emerald-600 text-white" : "text-slate-900"
                    }`}
                  >
                    {formatPrice(total)} kr
                  </TableCell>
                );
              })}
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
