'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { ChevronDown, Sun } from 'lucide-react'

export default function Header() {
  return (
    <div className='px-6 py-3 bg-zinc-50 dark:bg-zinc-900 border-b fixed w-full top-0 flex justify-between'>
      <Image width={40} height={40} src={'/favicon.svg'} alt='Authors Log' />
      <aside className='items-center flex gap-2'>
        <Popover>
          <PopoverTrigger >
            <p className='gap-3 items-center py-1 px-3 rounded-md flex hover:bg-zinc-50 dark:hover:bg-zinc-800'>
              <Image className='rounded-full object-cover' width={30} height={30} src={'https://randomuser.me/api/portraits/men/11.jpg'} alt='Authors Log' />
              <span className='font-medium'>Jay Pokale</span>
              <ChevronDown size={18} className='md:ml-2' />
            </p>
          </PopoverTrigger>
          <PopoverContent align='end'>
            <div className='border p-1 right-0 shadow-md mt-1 bg-white dark:bg-zinc-900 w-full flex flex-col rounded-lg font-medium'>
              <p className='py-2 px-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-md'>
                Manage Account
              </p>
              <p className='py-2 px-4 text-red-500 hover:bg-red-500/10 rounded-md'>
                Logout
              </p>
              <p className='py-2 px-4 text-red-500 hover:bg-red-500/10 rounded-md'>
                Logout from all devices
              </p>
            </div>
          </PopoverContent>
        </Popover>
        <Button onClick={() => { document.body.classList.toggle('dark') }} size={"icon"} variant={'ghost'} className='p-3'>
          <Sun />
        </Button>
      </aside>
    </div>
  )
}
