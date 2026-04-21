import Link from "next/link"
import Image from "next/image"
import AuthForm from "./AuthForm"

const Navbar = async () => {
  return (
    <div className='px-5 py-3 bg-white shadow-md font-light'>
       <nav className='flex justify-between items-center'>
            <Link href="/">
                <Image 
                    src="/logo.png"
                    alt="logo"
                    width={144}
                    height={30} />

            </Link>
            <div>
               <AuthForm/>
            </div>
       </nav>
    </div>
  )
}

export default Navbar 