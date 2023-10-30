import BlogCard from '@/partials/blog-card'
import { ArrowLeft, BarChart, Space } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import t from '@/public/blogs.json'
export default function Details() {
  return (
    <section className='pt-20'>
      <nav className='w-11/12 max-w-7xl flex justify-between mx-auto flex-wrap gap-4 py-6'>
        <Link href={'/blogs'} className='flex items-center gap-1 opacity-70 text-sm font-thin' >
          <ArrowLeft size={16} />
          <span>Blogs</span>
        </Link>
      </nav>
      <main className='w-11/12 max-w-[900px] mx-auto space-y-4 sm:space-y-6'>
        <p className='text-sm text-center font-semibold uppercase tracking-wider text-sky-700'>Web Development</p>
        <h2 className='text-2xl md:text-3xl lg:text-5xl opacity-80 font-medium text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. adfk ,m v,
        </h2>
        <div className='text-xs md:text-lg flex flex-wrap gap-2 sm:gap-6 opacity-50 text-center justify-center'>
          <p>
            12 October 2023
          </p>
          <p>
            Written by Sanket Gawande
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className='w-full' src="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F876632e511e14c678dbb0ae082aeda76?format=webp&width=2000" alt="" />
        <div className='text-muted-foreground space-y-2 py-12'>
          <h3 className='text-lg font-medium'>  The first headless CMS with visual editing capabilities for native mobile apps
            One of the most requested features from Builder customers has been making it as easy to update content on their native mobile apps as on their website. Our platform has always offered the same content-as-data models as a traditional headless CMS. However, teams found that their iOS and Android developers were still spending a significant portion of their valuable time updating content across their mobile applications.
          </h3>
          <p> More than a year ago, we added to our mobile CMS capabilities by releasing the React Native SDK, allowing content creators and marketing team members in companies such as Afterpay to drag and drop to create experiences in React Native apps. With the release of Native Mobile SDKs, Builder is the first headless CMS to give non-developers the power to create and ship dynamic content with structured content-as-data models and with a full drag-and-drop editing experience, each completely API-first.
            Native Mobile SDK features</p>
          <p> Visually drag-and-drop to create screens</p>
          <p> Using Builder Mobile SDKs, anyone can drag and drop native components, including text, images, buttons, and more, without submitting new app code. While marketers drag and drop to compose a front-end digital experience, Builder generates native code and shows a live preview in a native emulator inside the Builder Visual Editor. Whatever you can build visually, you can preview in real-time and publish in seconds.
            Bring your own components and integrations</p>
          <h3 className='text-lg font-medium'>  The first headless CMS with visual editing capabilities for native mobile apps
            One of the most requested features from Builder customers has been making it as easy to update content on their native mobile apps as on their website. Our platform has always offered the same content-as-data models as a traditional headless CMS. However, teams found that their iOS and Android developers were still spending a significant portion of their valuable time updating content across their mobile applications.
          </h3>
          <p> More than a year ago, we added to our mobile CMS capabilities by releasing the React Native SDK, allowing content creators and marketing team members in companies such as Afterpay to drag and drop to create experiences in React Native apps. With the release of Native Mobile SDKs, Builder is the first headless CMS to give non-developers the power to create and ship dynamic content with structured content-as-data models and with a full drag-and-drop editing experience, each completely API-first.
            Native Mobile SDK features</p>
          <p> Visually drag-and-drop to create screens</p>
          <p> Using Builder Mobile SDKs, anyone can drag and drop native components, including text, images, buttons, and more, without submitting new app code. While marketers drag and drop to compose a front-end digital experience, Builder generates native code and shows a live preview in a native emulator inside the Builder Visual Editor. Whatever you can build visually, you can preview in real-time and publish in seconds.
            Bring your own components and integrations</p>
        </div>
      </main>
    </section>
  )
}
