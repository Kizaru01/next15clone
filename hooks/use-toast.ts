"use client";

import { useCallback } from "react";

export type Toast = {
  title?: string;
  description?: string;
  variant?: "default" | "destructive";
};

export const TOAST_EVENT = "app:toast";

export const useToast = () => {
  const toast = useCallback((toast: Toast) => {
    window.dispatchEvent(
      new CustomEvent<Toast>(TOAST_EVENT, {
        detail: toast,
      })
    );
  }, []);

  return { toast };
};
