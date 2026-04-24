import Image from "next/image";
import Link from "next/link";
import Form from "next/form";

import { auth, signIn, signOut } from "@/auth";
import { Button } from "./ui/button";

const Navbar = async () => {
  const session = await auth();

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

        <div className="flex flex-wrap items-center justify-end gap-3">
          {session?.user ? (
            <>
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
            </>
          ) : (
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
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
