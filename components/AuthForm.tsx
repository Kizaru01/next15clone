import { auth, signIn, signOut } from "@/auth";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const AuthForm = async () => {
  const session = await auth();

  return (
    <div className="flex gap-5 items-center">
      {session?.user ? (
        <>
          <Link href="/start-up/create">
            <span>Create</span>
          </Link>

          {/* ✅ Logout via server action */}
          <form
            action={async () => {
              'use server';
              await signOut();
            }}
          >
            <Button type="submit"  className={buttonVariants({ variant: "default" })}>
              <span>Logout</span>
            </Button>
          </form>

          <Link href={`/user/${session.user.id}`}>
            <span>{session.user.name}</span>
          </Link>
        </>
      ) : (
        <form
          action={async () => {
            'use server';
            await signIn("github");
          }}
        >
          <Button type="submit">Login</Button>
        </form>
      )}
    </div>
  );
};

export default AuthForm;