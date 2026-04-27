import { auth } from '@/auth';
import { client } from '@/sanity/lib/client';
import { AUTHOR_BY_ID_QUERY } from '@/sanity/lib/query';
import { notFound } from 'next/navigation'
import Image from 'next/image';
 

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const session = await auth();

  const user = await client.fetch(AUTHOR_BY_ID_QUERY, { id });
  if (!user) return notFound();


  return ( 
    <section className='w-full pb-10 pt-20 px-6 max-w-7xl mx-auto lg:flex-row flex-col flex gap-10'>
        <div className='w-80 px-6 pb-6 pt-20 flex flex-col justify-center items-center bg-primary border-[5px] border-black rounded-[30px] relative z-0 h-fit max-lg:w-full'>
            <div className='profile_title'>
                <h3 className='uppercase text-center line-clamp-1'>
                    {user.name}
                </h3>
            </div>
            <Image
                src={user.image}
                alt={user.name}
                width={220}
                height={220}
                className="rounded-full object-cover border-[3px] border-black"
            />
            <p className='text-bold text-2xl mt-7 text-center'>
                @{user?.username}
            </p>
            <p className='mt-1 text-center text-xl text-gray-400'>{user.bio}</p>
            <div className='flex-1 flex flex-col gap-5 lg:-mt-5'>
                <p className='text-2xl'>{session?.id === id ? "Your" : "ALL"} Startups</p>
                <ul className='grid sm:grid-cols-2 gap-5'>{}</ul>
            </div>
        </div>
    </section>
  )
}

export default Page;