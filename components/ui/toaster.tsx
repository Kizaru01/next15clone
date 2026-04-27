"use client";

import { useEffect, useState } from "react";

import { TOAST_EVENT, type Toast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

type ToastMessage = Toast & {
  id: number;
};

export function Toaster() {
  const [toasts, setToasts] = useState<ToastMessage[]>([]);

  useEffect(() => {
    const onToast = (event: Event) => {
      const toast = (event as CustomEvent<Toast>).detail;
      const id = Date.now();

      setToasts((current) => [...current, { id, ...toast }].slice(-3));

      window.setTimeout(() => {
        setToasts((current) => current.filter((item) => item.id !== id));
      }, 4500);
    };

    window.addEventListener(TOAST_EVENT, onToast);

    return () => window.removeEventListener(TOAST_EVENT, onToast);
  }, []);

  return (
    <div
      aria-live="polite"
      className="fixed right-4 bottom-4 z-50 flex w-[min(calc(100vw-2rem),24rem)] flex-col gap-3"
    >
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={cn(
            "rounded-xl border bg-white px-4 py-3 text-sm text-foreground shadow-xl ring-1 ring-black/5",
            toast.variant === "destructive" &&
              "border-destructive/20 bg-destructive text-white"
          )}
        >
          {toast.title && <p className="font-semibold">{toast.title}</p>}
          {toast.description && (
            <p className="mt-1 leading-5 opacity-90">{toast.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
