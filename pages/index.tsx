import { ChangeEventHandler, useCallback, useState, useEffect } from "react";
import Head from "next/head";

import styles from "../styles/Home.module.css";

import { Category } from "../data/types";
import current from "../data/current";

const SelectedKey = "GearSelected";

const useLocalSelection = (
  key: string
): [Set<number>, (id: number, selected: boolean) => void] => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  useEffect(() => {
    const extant = localStorage.getItem(key);

    if (extant === null) {
      localStorage.setItem(key, "[]");
    } else {
      setSelected(new Set<number>(JSON.parse(extant)));
    }
  }, [key]);

  const synchronize = (id: number, shouldSelect: boolean) => {
    if (shouldSelect) {
      selected.add(id);
    } else {
      selected.delete(id);
    }

    const values = Array.from(selected);
    localStorage.setItem(key, JSON.stringify(values));
    setSelected(new Set(values));
  };

  return [selected, synchronize];
};

export default function Home() {
  const [selected, setSelected] = useLocalSelection(SelectedKey);

  const onItemSelect = useCallback(
    (id: number): ChangeEventHandler<HTMLInputElement> =>
      ({ target }) =>
        setSelected(id, target.checked),
    [setSelected]
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
                    {current
                      .filter(({ category }) => category === value)
                      .map(({ name, link, type, id }) => (
                        <form key={`item-${id}`}>
                          <input
                            className={styles.itemControl}
                            id={`item-${id}`}
                            type="checkbox"
                            checked={selected.has(id)}
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
                    current
                      .filter(({ id }) => selected.has(id))
                      .reduce((sum, { weightOz }) => sum + weightOz, 0) / 16
                  ).toFixed(1)}{" "}
                  lb
                </li>
                <li>
                  Total Volume:{" "}
                  {current
                    .filter(({ id }) => selected.has(id))
                    .reduce((sum, { volumeL }) => sum + volumeL, 0)
                    .toFixed(1)}{" "}
                  Liters
                </li>
                <li>
                  Total Cost: $
                  {current
                    .filter(({ id }) => selected.has(id))
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
