export const createSearchSlice = (set, get) => ({
  searchLocation: [],
  setSearchLocation: (location) => set({ searchLocation: location }),
  selectionType: undefined,
  setSelectionType: (type) => set({ selectionType: type }),
});
