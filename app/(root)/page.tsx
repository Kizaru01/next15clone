import SearchForm from "@/components/SearchForm"
import StartupCard, { StartupTypeCard } from "@/components/StartupCard"

import { sanityFetch, SanityLive } from "@/sanity/lib/live"
import { StartUpQuery } from "@/sanity/lib/query"

const page = async ({ searchParams } : { searchParams: Promise<{ query?: string}>;}) => {
 
  const query = (await searchParams).query;
  const params = { search: query || null}

  const { data: posts} = await sanityFetch({query: StartUpQuery, params})

  return (
    <main className='h-120 w-full bg-[#4244] roun'>
      <section className='items-center flex justify-center min-h-120 w-full mx-auto flex-col'>
        <div className='max-w-7xl px-14 py-10 items-center justify-center flex bg-black uppercase text-center rounded-2xl'>
          <h1 className='text-white text-4xl'>
            Lets connect our soul from the start, <br/> from the scratch
          </h1>
        </div>

        <p className='my-7 text-2xl'>
          You don’t have to be great to start, but you have to start to be great.
        </p>

        <SearchForm query={query}/>
      </section>

      <div className="py-8 px-12 max-w-7xl mx-auto">
        <p className="text-4xl font-extrabold font-serif">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>

        <ul className="mt-7 grid sm:grid-cols-2 md:grid-cols-3 gap-5">
          {posts.length > 0 ? (
            posts.map((post: StartupTypeCard) => (
              <StartupCard key={post._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </div>
      <SanityLive/>
    </main>
  )
}

export default page