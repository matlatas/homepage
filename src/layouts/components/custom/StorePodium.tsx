import React from "react";
import { type Product } from "@/components/custom/ProductTable";

interface PodiumProps {
  products: Product[];
}

export const StorePodium = ({ products }: PodiumProps) => {
  // Extract unique store names
  const storeNames = Array.from(
    new Set(
      products.flatMap((product) =>
        product.storePrices.map((sp) => sp.storeName),
      ),
    ),
  );

  // Calculate totals for each store
  const storeTotals = storeNames.map((storeName) => {
    const total = products.reduce((sum, product) => {
      const price = product.storePrices.find(
        (sp) => sp.storeName === storeName,
      )?.price;
      return sum + (price || 0);
    }, 0);
    return { storeName, total };
  });

  // Sort by total and get top 3
  const topStores = storeTotals.sort((a, b) => a.total - b.total).slice(0, 3);

  // Assign positions: 1st place, 2nd place (left), 3rd place (right)
  const firstPlace = topStores[0];
  const secondPlace = topStores[1];
  const thirdPlace = topStores[2];

  const formatPrice = (price: number): string => {
    return price.toFixed(2).replace(".", ",");
  };

  return (
    <div className="mb-6 w-full">
      <div className="mx-auto max-w-2xl px-6 sm:px-8">
        {/* Podium container */}
        <div className="flex h-40 items-end justify-center gap-3">
          {/* Second place (left) */}
          <div className="flex h-full flex-1 flex-col items-center">
            <div className="flex-1" />
            <div className="mb-1 text-xl font-bold text-slate-400">🥈</div>
            <div className="w-full rounded-t-sm bg-slate-200 p-3 text-center">
              <h3 className="mb-0.5 text-xs font-semibold text-slate-900">
                {secondPlace?.storeName}
              </h3>
              <p className="text-sm font-bold text-slate-700">
                {secondPlace ? `${formatPrice(secondPlace.total)} kr` : "-"}
              </p>
            </div>
            <div className="h-5 w-full rounded-b-sm bg-slate-200" />
          </div>

          {/* First place (center - shortest/lowest) */}
          <div className="flex h-full flex-1 flex-col items-center">
            <div className="flex-1" />
            <div className="mb-1 text-xl font-bold text-emerald-600">🥇</div>
            <div className="w-full rounded-t-sm bg-emerald-400 p-3 text-center shadow-sm">
              <h3 className="mb-0.5 text-xs font-semibold text-white">
                {firstPlace?.storeName}
              </h3>
              <p className="text-sm font-bold text-white">
                {firstPlace ? `${formatPrice(firstPlace.total)} kr` : "-"}
              </p>
            </div>
            <div className="h-10 w-full rounded-b-sm bg-emerald-400" />
          </div>

          {/* Third place (right) */}
          <div className="flex h-full flex-1 flex-col items-center">
            <div className="flex-1" />
            <div className="mb-1 text-xl font-bold text-slate-400">🥉</div>
            <div className="w-full rounded-t-sm bg-slate-200 p-3 text-center">
              <h3 className="mb-0.5 text-xs font-semibold text-slate-900">
                {thirdPlace?.storeName}
              </h3>
              <p className="text-sm font-bold text-slate-700">
                {thirdPlace ? `${formatPrice(thirdPlace.total)} kr` : "-"}
              </p>
            </div>
            <div className="h-1 w-full rounded-b-sm bg-slate-200" />
          </div>
        </div>
      </div>
    </div>
  );
};
