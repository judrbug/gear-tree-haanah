import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Category, GearItem } from "../data/types";

interface TreeChartProps {
  data: GearItem[];
}

export default function TreeChart({ data }: TreeChartProps) {
  const series = Object.entries(Category)
    .map(([, category]) => ({
      name: category,
      data: data
        .filter(({ category: itemCategory }) => itemCategory === category)
        .map((item) => ({
          x: item.name,
          y: (item.weightOz / 16).toFixed(2),
        })),
    }))
    .filter(({ data }) => data.length > 0);

  const options: ApexOptions = {
    title: {
      text: "Pack Weight Makeup",
      align: "center",
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <Chart
      options={options}
      series={series}
      type="treemap"
      height="800"
      width="100%"
    />
  );
}
