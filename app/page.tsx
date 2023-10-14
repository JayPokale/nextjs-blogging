import { Button } from '@/components/ui/button'
import React from 'react'

export default function Home() {
  return (
    <section className='flex-1 flex flex-col w-full bg-zinc-50 dark:bg-zinc-900 justify-center items-center pb-6'>
      <main className='p-6 text-center space-y-4 md:space-y-6 pt-36'>
        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black max-w-2xl'>Authors Log - Start Writing </h1>
        <p className='max-w-2xl'>Explore a world of inspiration and knowledge at Authors Log. Join our community of learners and dreamers today!'</p>

        <section className='flex gap-3 justify-center'>
          <Button variant={'default'} size={'lg'}>
            Get Started
          </Button>
          <Button variant={'outline'} size={'lg'}>
            Read more!
          </Button>
        </section>
      </main>

      <div className='w-11/12 max-w-6xl bg-zinc-300 mt-4 md:mt-12 '>
        <video className='w-full h-full' autoPlay muted loop src="/hacking.mp4"></video>
      </div>
    </section>
  )
}
