"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const SearchFormReset = () => {
  const router = useRouter();

  const handleReset = () => {
    router.push("/");
  };

  return (
    <Button
      type="button"
      onClick={handleReset}
      variant="outline"
      size="icon-lg"
      className="rounded-2xl bg-white/90"
    >
      <X className="size-5" />
      <span className="sr-only">Reset search</span>
    </Button>
  );
};

export default SearchFormReset;
