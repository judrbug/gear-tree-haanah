import { ChangeEventHandler, useCallback, useState } from "react";
import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";
import { Category, GearItem } from "../data/types";

interface TreeChartProps {
  data: GearItem[];
}

enum SortKey {
  Weight = "Weight",
  Volume = "Volume",
  Price = "Price",
}

interface SeriesData {
  x: string;
  y: number;
}

const sieves: Record<SortKey, (item: GearItem) => boolean> = {
  [SortKey.Weight]: (item) => item.weightOz > 0,
  [SortKey.Volume]: (item) => item.volumeL > 0,
  [SortKey.Price]: (item) => item.price > 0,
};

const transformers: Record<SortKey, (item: GearItem) => SeriesData> = {
  [SortKey.Weight]: (item) => ({
    x: item.name,
    y: Number((item.weightOz / 16).toFixed(2)),
  }),
  [SortKey.Volume]: (item) => ({
    x: item.name,
    y: Number(item.volumeL.toFixed(2)),
  }),
  [SortKey.Price]: (item) => ({
    x: item.name,
    y: Number(item.price.toFixed(2)),
  }),
};

export default function TreeChart({ data }: TreeChartProps) {
  const [sortKey, setSortKey] = useState<SortKey>(SortKey.Weight);

  const onSortChange = useCallback<ChangeEventHandler<HTMLSelectElement>>(
    ({ target }) => {
      switch (target.value) {
        case SortKey.Price:
        case SortKey.Volume:
        case SortKey.Weight:
          setSortKey(target.value);
          break;
        default:
          break;
      }
    },
    [setSortKey]
  );

  const series = Object.entries(Category)
    .map(([, category]) => ({
      name: category,
      data: data
        .filter(({ category: itemCategory }) => itemCategory === category)
        .filter(sieves[sortKey])
        .map(transformers[sortKey]),
    }))
    .filter(({ data }) => data.length > 0);

  const options: ApexOptions = {
    title: {
      text: `Pack ${sortKey} Makeup`,
      align: "center",
    },
    tooltip: {
      theme: "dark",
    },
  };

  return (
    <div>
      <label htmlFor="sort-key">
        Sort By:{" "}
        <select id="sort-key" value={sortKey} onChange={onSortChange}>
          {Object.entries(SortKey).map(([value, key]) => (
            <option value={value}>{key}</option>
          ))}
        </select>
      </label>
      <Chart
        options={options}
        series={series}
        type="treemap"
        height="800"
        width="100%"
      />
    </div>
  );
}
