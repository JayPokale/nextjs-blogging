'use client'

import { Popover, PopoverContent, PopoverTrigger, Close, PopoverClose } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { Input } from './ui/input'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

export default function Header() {

  const navigate = useRouter()
  return (
    <div className='px-6 md:px-12 py-3 bg-zinc-100/70 dark:bg-zinc-950/70 backdrop-filter backdrop-blur-md border-b fixed w-full top-0 flex justify-between items-center z-10'>
      <Link href={'/'}>
        <Image width={40} height={40} src={'/favicon.svg'} alt='Authors Log' />
      </Link>
      <div className='w-max hidden sm:block flex-[.3]'>
        <Input type='search' placeholder='eg. blockchain' className='w-full bg-transparent' onKeyDown={e => { if (e.code !== 'Enter') return; else navigate.push(`/search/${e.currentTarget.value}`) }} />
      </div>
      <aside className='items-center flex'>
        <Popover>
          <PopoverTrigger >
            <article className='gap-3 items-center sm:py-1 sm:px-3 rounded-md flex hover:bg-zinc-50 dark:hover:bg-zinc-800'>
              <Image className='rounded-full object-cover aspect-square w-8 sm:w-10' width={40} height={40} src={'https://randomuser.me/api/portraits/men/11.jpg'} alt='Authors Log' />
              <div className='text-left hidden sm:inline-blockx'>
                <p className='font-medium text-sm tracking-wide -mb-2 uppercase'>Jay Pokale</p>
                <small className='text-[10px] opacity-60'>04 Posts </small>
              </div>
            </article>
          </PopoverTrigger>

          <PopoverContent className='border p-1 right-0 shadow-md mt-1 bg-white dark:bg-zinc-900 w-full flex-col flex rounded-lg' align='end'>
            <PopoverClose
              className='py-2 px-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md text-left'
              onClick={_ => navigate.push('/me/profile')}>
              My Profile
            </PopoverClose>

            <PopoverClose
              className='py-2 px-4 hover:bg-red-500/10 dark:hover:bg-red-500/10 text-red-500 rounded-md text-left'
              onClick={_ => console.log('logout')}>
              Logout
            </PopoverClose>

            <PopoverClose
              className='py-2 px-4 hover:bg-red-500/10 dark:hover:bg-red-500/10 text-red-500 rounded-md text-left'
              onClick={_ => console.log('all')}>
              Logout from all device
            </PopoverClose>

          </PopoverContent>
        </Popover>
      </aside>
    </div>
  )
}
