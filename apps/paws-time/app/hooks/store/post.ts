"use client";

import { create } from "zustand";

interface State {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
}

interface Action {
  setTitle: (data: string) => void;
  setContent: (data: string) => void;
  setCreatedAt: (data: string) => void;
  setUpdatedAt: (data: string) => void;
  setAuthor: (data: string) => void;
}

const usePostStore = create<State & Action>((set) => ({
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
  author: "",
  setTitle: (title) => set({ title }),
  setContent: (content) => set({ content }),
  setCreatedAt: (createdAt) => set({ createdAt }),
  setUpdatedAt: (updatedAt) => set({ updatedAt }),
  setAuthor: (author) => set({ author }),
}));

export default usePostStore;
