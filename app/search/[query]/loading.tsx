
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import blog from '@/public/blogs.json'
import Image from 'next/image';
import { ArrowBigRight, ArrowLeft, ChevronLeft } from 'lucide-react';

export default function Loading() {

  return (
    <section className='bg-zinc-50 flex-1 dark:bg-zinc-900'>
      <header className='w-11/12 max-w-7xl flex justify-between mx-auto flex-wrap gap-4 py-6'>
        <Link href={'/'} className='flex items-center gap-1 opacity-70 text-sm font-thin' >
          <ArrowLeft size={16} />
          <span>Back to Home</span>
        </Link>
        <h3 className='text-3xl md:text-4xl font-semibold border-b-2 w-max mx-auto px-4'>
          Search Results
        </h3>
      </header>

      <section className='flex flex-wrap max-w-4xl p-4 md:p-6 gap-1 md:gap-2 mx-auto'>
        {
          Array.from({ length: 10 }).map((t, index) =>
            <span key={index} className='h-10 w-24 rounded-full block bg-zinc-950 border'></span>
          )
        }
      </section>
   
      <section className='w-11/12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 py-8'>
        {
          Array.from({ length: 6 }).fill({}).map((blog, index) =>
            <article key={index} className='space-y-4'>
              <div className='w-full aspect-video bg-zinc-800 rounded-lg' />
              <div className='flex gap-4 font-semibold'>
                <p className='h-1 w-24 bg-sky-700 rounded-md' />

              </div>
              <h3 className='h-3 w-64 rounded-md bg-zinc-800'>

              </h3>
              <section className='opacity-60 text-sm uppercase tracking-wider'>
                <p className='w-44 rounded-xl  h-2 bg-zinc-800 mb-2' />
                <p className='w-24 rounded-xl h-2 bg-zinc-800' />
              </section>
            </article>
          )
        }
      </section>
    </section>
  )
}
