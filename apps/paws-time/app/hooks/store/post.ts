"use client";

import { useState } from "react";
import { create } from "zustand";

// const [first, setfirst] = useState(second);

interface State {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  author: string;
  // isSidebarOpen: boolean;
  // toggleSidebar: () => void;
}

interface Action {
  setTitle: (data: string) => void;
  setContent: (data: string) => void;
  setCreatedAt: (data: string) => void;
  setUpdatedAt: (data: string) => void;
  setAuthor: (data: string) => void;
}

const usePostStore = create<State & Action>((set) => ({
  isModalOpen: false,
  title: "",
  content: "",
  createdAt: "",
  updatedAt: "",
  author: "",
  setTitle: (title) => set(title),
  // toggleSidebar: () =>
  //   set((state) => ({ isSidebarOpen: !state.isSidebarOpen })),
}));

export default usePostStore;
