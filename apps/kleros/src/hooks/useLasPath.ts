import { useEffect, useRef } from 'react';
import { create } from 'zustand';
import { useLocation } from 'react-router-dom';

interface PrePageStore {
  prePage: string | null;
  setPrePage: (prePage: string) => void;
}

const prePageStore = create<PrePageStore>((set) => ({
  prePage: null,
  setPrePage: (prePage) => set({ prePage }),
}));

export const useWatchPathChange = () => {
  const setPrePage = prePageStore((state) => state.setPrePage);
  const { pathname: curPath } = useLocation();
  const prePath = useRef<string | null>(null);
  useEffect(() => {
    if (!prePath.current) return;
    setPrePage(prePath.current);
    prePath.current = curPath;
  }, [curPath]);
};

const useLasPath = () => prePageStore((state) => state.prePage);

export default useLasPath;
