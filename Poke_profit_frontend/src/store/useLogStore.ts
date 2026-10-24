import { create } from "zustand";

type Log = {
  id: number;
  species: string;
  status: string;
};

type LogStore = {
  logs: Log[];
  fetchLogs: () => Promise<void>;
};

export const useLogStore = create<LogStore>((set) => ({
  logs: [],

  fetchLogs: async () => {
    const res = await fetch("http://localhost:3001/logs");
    const data = await res.json();
    set({ logs: data });
  },
}));
