import { create } from "zustand";

const useLoginStore = create((set) => ({
  email: "",
  password: "",

  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),

  resetForm: () =>
    set({
      email: "",
      password: "",
    }),
}));

export default useLoginStore;
