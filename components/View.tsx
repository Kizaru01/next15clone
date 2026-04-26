
import Ping from './Ping'
import { STARTUP_VIEWS } from '@/sanity/lib/query'
import { client } from '@/sanity/lib/client'
import { writeClient } from '@/sanity/lib/write-client'

const View = async ({ id } : { id: string}) => {
    const { views: totalViews } = await client
    .withConfig({ useCdn: false})
    .fetch(STARTUP_VIEWS, { id })

  await writeClient.patch(id)
  .set({ views: totalViews + 1 })
  .commit();
  return (
  
    <div className='flex justify-end items-center mt-5 fixed bottom-3 right-3'>
        <div className='absolute -top-2 -right-2'>
            <Ping/>
        </div>
        <p className='font-medium text-[16px] bg-fuchsia-400 px-4 py-2 rounded-lg capitalize'>
            <span className='font-black'>{totalViews} {totalViews === 1 ? "view" : "views"}</span>
        </p>
    </div>
  )
}

export default View 