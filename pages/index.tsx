import { ChangeEventHandler, useCallback, useState } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { GearItem, Category, ItemType } from "../data/types";
import current from "../data/current";

interface ItemMeta extends GearItem {
  id: number;
  selected: boolean;
}

const currentWithMeta = current.map((item, id) => ({
  ...item,
  selected: false,
  id,
}));

const useManifest = (
  gearManifest: ItemMeta[]
): [(id: number) => void, (id: number) => void, ItemMeta[]] => {
  const [manifest, setManifest] = useState<ItemMeta[]>(gearManifest);

  const select = useCallback(
    (id: number) => {
      manifest[id].selected = true;
      setManifest([...manifest]);
    },
    [manifest]
  );

  const deselect = useCallback(
    (id: number) => {
      manifest[id].selected = false;
      setManifest([...manifest]);
    },
    [manifest]
  );

  return [select, deselect, manifest];
};

export default function Home() {
  const [select, deselect, manifest] = useManifest(currentWithMeta);

  const onItemSelect = useCallback(
    (id: number): ChangeEventHandler<HTMLInputElement> =>
      ({ target }) => {
        return target.checked ? select(id) : deselect(id);
      },
    [deselect, select]
  );

  return (
    <>
      <Head>
        <title>Gear Tree</title>
        <meta name="description" content="Backpack Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Gear Tree</h1>
        <div className={styles.controlsContainer}>
          <div className={styles.categoriesContainer}>
            <h2>Categories</h2>
            <div className={styles.categories}>
              {Object.entries(Category).map(([key, value]) => (
                <div
                  key={`category-${key}`}
                  className={styles.categoryContainer}
                >
                  <h2>{value}</h2>
                  <div className={styles.items}>
                    {manifest
                      .filter(({ category }) => category === value)
                      .map(({ id, name, selected, link, type }) => (
                        <form key={`item-${id}`}>
                          <input
                            className={styles.itemControl}
                            id={`item-${id}`}
                            type="checkbox"
                            checked={selected}
                            onChange={onItemSelect(id)}
                          />
                          <label htmlFor={`item-${id}-checkbox`}>
                            {name} ({type}) - <a href={link}>Link</a>
                          </label>
                        </form>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.statisticsContainer}>
            <h2>Statistics</h2>
            <div className={styles.statistics}>
              <ul>
                <li>
                  Total Weight:{" "}
                  {(
                    manifest
                      .filter(({ selected }) => selected)
                      .reduce((sum, { weightOz }) => sum + weightOz, 0) / 16
                  ).toFixed(1)}{" "}
                  lb
                </li>
                <li>
                  Total Volume:{" "}
                  {manifest
                    .filter(({ selected }) => selected)
                    .reduce((sum, { volumeL }) => sum + volumeL, 0)
                    .toFixed(1)}{" "}
                  Liters
                </li>
                <li>
                  Total Cost: $
                  {manifest
                    .filter(({ selected }) => selected)
                    .reduce((sum, { price }) => sum + price, 0)
                    .toFixed(1)}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
