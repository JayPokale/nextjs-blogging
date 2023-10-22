
import { Button } from '@/components/ui/button';
import Link from 'next/link'
import blog from '@/public/blogs.json'
import Image from 'next/image';
import { ArrowBigRight, ArrowLeft, ChevronLeft } from 'lucide-react';
import localFont from 'next/font/local'
import { Blog } from '@/common';
import BlogCard from '@/partials/blog-card';
async function getData(ctx: any) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(blog)
    }, 1000);
  })
}


export default async function Query(p: any) {
  const t = await getData(p) as Blog[]

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
          ["array",
            "push",
            "reduce",
            "reverse",
            "shift",
            "slice",
            "some",
            "sort",
            "splice",
            "some",
            "sort",
            "splice",
            "unshift"].map(t =>
              <Button variant={'outline'} className='rounded-full uppercase text-xs tracking-wide' key={t}>
                {t}
              </Button>
            )
        }
      </section>
      <h2 className='w-11/12 max-w-7xl text-sky-600 mx-auto text-2xl font-semibold underline decoration-slice mt-12'>
        Search results for &ldquo;{decodeURIComponent(p.params.query)}&rdquo;
      </h2>
      <section className='w-11/12 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-16 py-8'>
        {
          t.map(blog =>
            <BlogCard blog={blog} key={blog.title} />
          )
        }
      </section>
    </section>
  )
}
