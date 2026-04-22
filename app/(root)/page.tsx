import SearchForm from "@/components/SearchForm"
const page = () => {
  return (
    <main className='border-2 h-120 border-amber-400 w-full bg-[#4244]'>
      <section className='items-center flex justify-center min-h-120 w-full mx-auto flex-col'>
        <div className='max-w-7xl px-14 py-10 items-center justify-center flex bg-black uppercase'>
          <h1 className='text-white text-4xl'>Lets connect our soul to start, <br/> from the scratch</h1>
        </div>
          <p className='my-7 text-2xl'>
          You don’t have to be great to start, but you have to start to be great.
        </p>
        <SearchForm/>
      </section>
    </main>
  )
}

export default page