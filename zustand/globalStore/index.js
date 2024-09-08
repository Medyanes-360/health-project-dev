import { create } from "zustand";

const useGlobalStore = create((set, get) => ({
  imageModalOptions: {
    isOpen: false,
    imageSources: [],
  },
  openImageModal: ({ imageSources, imageSrcToShowFirst = true }) => {
    set((state) => ({
      ...state,
      imageModalOptions: {
        isOpen: true,
        imageSources: imageSources,
        imageToShowFirst: imageSrcToShowFirst,
      },
    }));
  },
}));

export { useGlobalStore };

// usage in comps :
// function BearCounter() {
//   const bears = useBearStore((state) => state.bears);
//   return <h1>{bears} around here ...</h1>;
// }

// function Controls() {
//   const increasePopulation = useBearStore((state) => state.increasePopulation);
//   return <button onClick={increasePopulation}>one up</button>;
// }
