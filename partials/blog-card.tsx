import { Blog } from '@/common'
import Image from 'next/image'
import Link from 'next/link'
import React, { FC } from 'react'

const BlogCard: FC<{ blog: Blog }> = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.title}`} key={blog.title} className='space-y-4'>
      <Image
        alt={blog.title}
        className='w-full aspect-video bg-cover rounded'
        src={"https://plus.unsplash.com/premium_photo-1673280731432-9cc09eb20fed?auto=format&fit=crop&q=60&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW91bnRhaW4lMjBsYW5kc2NhcGV8ZW58MHx8MHx8fDA%3D"}
        width={400}
        height={200}
      />
      <div className='flex gap-4 font-semibold'>
        <p className='text-sm uppercase tracking-wider text-sky-700'>{blog.topic}</p>
        <p className='text-sm uppercase tracking-wider opacity-60'>{blog.readTime} min</p>
      </div>
      <h3 className='text-xl line-clamp-2'>
        {blog.title}
      </h3>
      <section className='opacity-60 text-sm uppercase tracking-wider'>
        <p>
          Written By {blog.author}
        </p>
        <p>
          {blog.date}
        </p>
      </section>
    </Link>
  )
}

export default BlogCard