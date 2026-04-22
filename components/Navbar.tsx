import Link from "next/link"
import Image from "next/image"
import Form from 'next/form'
import { Button, buttonVariants } from "./ui/button"
import { auth, signIn, signOut } from "@/auth";
const Navbar = async () => {
    const session = await auth();

  return (
    <header className='w-full bg-[hsl(0,3%,70%)]'>
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center py-8 px-6">
        <Link href='/'>
            <Image 
                src="/logo.png"
                alt="logo"
                width={120}
                height={40}
                />
        </Link>
           <div className="flex gap-5 items-center">
              {session?.user ? (
                <>
                  <Link href='/start-up/create' className={buttonVariants({ variant: 'secondary'})}>
                    Create
                  </Link>
                  <Form action={async () => {
                    'use server'
                      await signOut();
                  }}>
                    <Button type="submit" className={buttonVariants({ variant: 'secondary'})}>
                      <span className="cursor-pointer">Logout</span>
                    </Button>
                  </Form>
                  <span className={`cursor-pointer ${buttonVariants({ variant: 'secondary'})}`}>
                    {session?.user?.name?.split(" ")[0]}
                  </span>
                </>
              ): (
                <Form action={async () => {
                  'use server'
                  await signIn();
                }}>
                  <Button type="submit" className={buttonVariants({ variant: "secondary"})}>
                    Login
                  </Button>
                </Form>
              )}
          </div>
        </div>
    </header>
  )
}

export default Navbar