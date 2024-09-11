import { create } from "zustand";

const useGlobalStore = create((set, get) => ({
  isImageModalOpen: false,
  imageModalOptions: {
    imageSources: [],
    imageSrcToShowFirst: "",
  },
  openImageModal: ({ imageSources, imageSrcToShowFirst }) => {
    set((state) => ({
      ...state,
      isImageModalOpen: true,
      imageModalOptions: {
        imageSources: imageSources,
        imageSrcToShowFirst: imageSrcToShowFirst,
      },
    }));
  },
  closeImageModal: () => {
    set((state) => ({
      ...state,
      isImageModalOpen: false,
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
