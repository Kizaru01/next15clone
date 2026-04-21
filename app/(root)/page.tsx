
import Search from "@/components/Search"
const HomePage = () => {
  return (
    <>
      <section className='bg-[hsl(178,26%,21%)] flex w-full min-h-132.5 pattern justify-center items-center flex-col py-10 px-6'>
        <h1 className='bg-[hsl(168,20%,15%)] px-6 py-3 font-extrabold text-white  sm:text-[54px] sm:leading-16 text-[36px] leading-11.5 max-w-5xl text-center my-5 border-2 border-white rounded-4xl'>PITCH YOUR STARTUP, <br/> CONNECT WITH ENTREPRENEURS</h1>
         <p className='text-white text-lg mb-4 text-center'>
        Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions
       </p>
       <Search/>
      </section>
    </>
  )
}

export default HomePage