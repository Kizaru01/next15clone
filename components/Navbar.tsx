import { Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

import { auth, signIn, signOut } from "@/auth";
import { Button, ButtonSkeleton } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

const NavbarActionsSkeleton = () => {
  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <ButtonSkeleton size="lg" className="w-24" />
      <ButtonSkeleton size="lg" className="hidden w-24 sm:inline-flex" />
      <Skeleton className="h-11 w-20 rounded-2xl border border-black/5 bg-white/90 shadow-sm" />
    </div>
  );
};

const NavbarActions = async () => {
  const session = await auth();

  if (session?.user) {
    return (
      <div className="flex flex-wrap items-center justify-end gap-3">
        <Button asChild variant="secondary" size="lg">
          <Link href="/start-up/create">Create</Link>
        </Button>

        <Form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <Button type="submit" variant="outline" size="lg">
            Logout
          </Button>
        </Form>

        <span className="inline-flex h-11 items-center rounded-2xl border border-black/5 bg-white/90 px-4 text-sm font-medium text-foreground shadow-sm">
          {session?.user?.name?.split(" ")[0]}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-end gap-3">
      <Form
        action={async () => {
          "use server";
          await signIn();
        }}
      >
        <Button type="submit" size="lg">
          Login
        </Button>
      </Form>
    </div>
  );
};

const Navbar = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="app-shell flex items-center justify-between py-4">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={132}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <Suspense fallback={<NavbarActionsSkeleton />}>
          <NavbarActions />
        </Suspense>
      </div>
    </header>
  );
};

const NavbarSkeleton = () => {
  return (
    <header className="sticky top-0 z-30 border-b border-black/5 bg-white/80 backdrop-blur-xl">
      <div className="app-shell flex items-center justify-between py-4">
        <Skeleton className="h-10 w-32 rounded-xl bg-white/90" />
        <NavbarActionsSkeleton />
      </div>
    </header>
  );
};

export { NavbarSkeleton };
export default Navbar;
