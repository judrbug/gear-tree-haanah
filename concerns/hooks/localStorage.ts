import { useState, useEffect } from "react";

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

export default useLocalSelection;
