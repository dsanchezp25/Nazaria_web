"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface SubscribeContextType {
  open: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const SubscribeContext = createContext<SubscribeContextType>({
  open: false,
  openModal: () => {},
  closeModal: () => {},
});

export function SubscribeProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <SubscribeContext.Provider
      value={{
        open,
        openModal: () => setOpen(true),
        closeModal: () => setOpen(false),
      }}
    >
      {children}
    </SubscribeContext.Provider>
  );
}

export function useSubscribe() {
  return useContext(SubscribeContext);
}
