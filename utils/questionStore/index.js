import { create } from 'zustand';

const useQuestionStore = create((set) => ({
  answers: {},
  setAnswers: (newAnswers) => set((state) => ({ answers: { ...state.answers, ...newAnswers } })),
}));

export default useQuestionStore;
