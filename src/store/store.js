import { create } from "zustand";
import { createSearchSlice } from "./slices/SearchSlice";

export const userAppStore = create()((...a) => ({
  ...createSearchSlice(...a),
}));
