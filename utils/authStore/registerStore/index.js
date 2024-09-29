import { create } from "zustand";

const useRegisterStore = create((set) => ({
  name: "",
  email: "",
  phoneNumber: "",
  country: "",
  city: "",
  password: "",
  confirmPassword: "",
  setField: (field, value) => set((state) => ({ ...state, [field]: value })),
  countries: [],
  cities: [],
  states: [],
  setCountries: (countries) => set({ countries }),
  setCities: (cities) => set({ cities }),
  setStates: (states) => set({ states }),
}));
export default useRegisterStore;
