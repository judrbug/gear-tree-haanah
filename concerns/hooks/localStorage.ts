import { useState, useEffect, useCallback } from "react";

const useLocalSelection = (
  key: string
): [Set<number>, (id: number, selected: boolean) => void, () => void] => {
  const [selected, setSelected] = useState<Set<number>>(new Set());

  useEffect(() => {
    const extant = localStorage.getItem(key);

    if (extant === null) {
      localStorage.setItem(key, "[]");
    } else {
      setSelected(new Set<number>(JSON.parse(extant)));
    }
  }, [key]);

  const synchronize = useCallback(
    (id: number, shouldSelect: boolean) => {
      if (shouldSelect) {
        selected.add(id);
      } else {
        selected.delete(id);
      }

      const values = Array.from(selected);
      localStorage.setItem(key, JSON.stringify(values));
      setSelected(new Set(values));
    },
    [key, selected]
  );

  const reset = useCallback(() => {
    const next = new Set<number>();
    localStorage.setItem(key, JSON.stringify(Array.from(next)));
    setSelected(next);
  }, [key]);

  return [selected, synchronize, reset];
};

export default useLocalSelection;
