import { useEffect, useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Category, GearItem } from "../data/types";

interface TreeChartProps {
  data: GearItem[];
}

export default function TreeChart({ data }: TreeChartProps) {
  const [isCSR, setIsCSR] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsCSR(true);
    }
  }, []);

  if (!isCSR) {
    return null;
  }

  const series = Object.entries(Category).map(([key, category]) => ({
    name: category,
    data: data
      .filter(({ category: itemCategory }) => itemCategory === category)
      .map((item) => ({
        x: item.name,
        y: (item.weightOz / 16).toFixed(2),
      })),
  }));

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
