import { ChangeEventHandler, useCallback } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import styles from "../styles/Home.module.css";

import { Category } from "../data/types";
import current from "../data/current";
import useLocalSelection from "../concerns/hooks/localStorage";

const TreeChart = dynamic(() => import("../components/tree-chart"), {
  ssr: false,
});

const SelectedKey = "GearSelected";

export default function Home() {
  const [selected, setSelected, reset, bulkSelect] =
    useLocalSelection(SelectedKey);

  const selectAll = useCallback(() => {
    bulkSelect(current.map(({ id }) => id));
  }, [bulkSelect]);

  const onItemSelect = useCallback(
    (id: number): ChangeEventHandler<HTMLInputElement> =>
      ({ target }) =>
        setSelected(id, target.checked),
    [setSelected]
  );

  return (
    <>
      <Head>
        <title>⛰️ Gear Tree ⛰️</title>
        <meta name="description" content="Backpack Simulator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>⛰️ Gear Tree ⛰️</h1>
        <div className={styles.controlsContainer}>
          <div className={styles.categoriesContainer}>
            <h2>⛺ Categories</h2>
            <hr />
            <div className={styles.selectControl}>
              <button type="button" onClick={reset}>
                Reset Selection
              </button>
              <button type="button" onClick={selectAll}>
                Select All
              </button>
            </div>
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
                        <div className={styles.item}>
                          <label
                            htmlFor={`item-${id}-checkbox`}
                            className={styles.itemCheckboxContainer}
                            key={`item-${id}`}
                          >
                            <input
                              className={styles.itemControl}
                              id={`item-${id}-checkbox`}
                              type="checkbox"
                              checked={selected.has(id)}
                              onChange={onItemSelect(id)}
                            />
                            <span className={styles.checkmark} />
                            {name} ({type}) -{" "}
                            <a href={link} target="_blank" rel="noreferrer">
                              Link
                            </a>
                          </label>
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.statisticsContainer}>
            <h2>📈 Statistics</h2>
            <hr />
            <div className={styles.statistics}>
              <div className={styles.totals}>
                <span>
                  Total Weight:{" "}
                  <span className={styles.total}>
                    {(
                      current
                        .filter(({ id }) => selected.has(id))
                        .reduce((sum, { weightOz }) => sum + weightOz, 0) / 16
                    ).toFixed(1)}{" "}
                    lb
                  </span>
                </span>
                <span>
                  Total Volume:{" "}
                  <span className={styles.total}>
                    {current
                      .filter(({ id }) => selected.has(id))
                      .reduce((sum, { volumeL }) => sum + volumeL, 0)
                      .toFixed(1)}{" "}
                    Liters
                  </span>
                </span>
              </div>
            </div>
            <TreeChart data={Array.from(selected).map((id) => current[id])} />
          </div>
        </div>
      </main>
    </>
  );
}
