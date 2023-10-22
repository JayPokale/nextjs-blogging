import BlogCard from '@/partials/blog-card'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import t from '@/public/blogs.json'
export default function Details() {
  return (
    <section className='pt-20'>
      <nav className='w-11/12 max-w-7xl flex justify-between mx-auto flex-wrap gap-4 py-6'>
        <Link href={'/'} className='flex items-center gap-1 opacity-70 text-sm font-thin' >
          <ArrowLeft size={16} />
          <span>Home</span>
        </Link>

      </nav>

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
