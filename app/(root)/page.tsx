import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export default function Home() {
  return (
    <section className='flex-1 flex flex-col w-full bg-zinc-50 dark:bg-zinc-900 justify-center items-center pb-6'>
      <main className='p-6 w-full text-center flex justify-center items-center flex-col gap-10 pt-16 h-screen bg-[url("/box.svg")]'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black max-w-4xl font-["Poppins"]'>Authors Log - Start Earning By posting your knowledge</h1>
        <p className='max-w-2xl text-lg opacity-70'>Explore a world of inspiration and knowledge at Authors Log. Join our community of learners and dreamers today!</p>

        <section className='flex gap-3 flex-wrap justify-center'>
          <Button variant={'default'} size={'lg'}>
            Get Started
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Read more!
          </Button>
        </section>
      </main>

      <section className='py-8 md:py-16'>
       <div className='max-w-xl mx-auto text-center space-y-4'>
          <h3 className='text-xl text-primary-text font-medium'>
            For authors
          </h3>
          <h1 className='text-3xl md:text-5xl font-bold'>How it works</h1>
          <p>Get your backend done in minutes instead of weeks.
            Easily build customizable content API and use them with a modern tech stack.</p>
       </div>
      </section>

      <section className='md:py-16 w-full'>
        <main className='w-full text-center mx-auto sm:rounded-lg p-12 bg-zinc-200 dark:bg-zinc-950 sm:max-w-3xl space-y-4'>
          <h3 className='text-xl font-semibold'>
            Join our Newsletter
          </h3>
          <p>  Get all the latest AuthorsLog updates, news and events.</p>
          <form className='max-w-sm mx-auto space-y-3'>
            <Input required name='email' placeholder='Enter email' />
            <Button className='w-full'>Subscribe</Button>
          </form>
        </main>
      </section>
    </section>
  )
}
