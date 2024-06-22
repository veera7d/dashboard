import { create } from "zustand";

interface gsdataInterface {
  GSdata: any;
  setGSData: (obj: any) => any;
}

const useGSDataStore = create<gsdataInterface>((set) => ({
  GSdata: {},
  setGSData: (obj: any) =>
    set(() => {
      return { GSdata: obj };
    }),
}));

export default useGSDataStore;
