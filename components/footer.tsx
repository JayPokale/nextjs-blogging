'use client'
import React from 'react'
import { Button } from './ui/button'
import { Sun } from 'lucide-react'

export default function Footer() {
  return (
    <footer className='mt-auto p-6 bg-zinc-100 dark:bg-zinc-950 border-t'>
      Footer
      <Button onClick={() => { document.body.classList.toggle('dark') }} size={"lg"} variant={'ghost'} className='p-2'>
        <Sun />
      </Button>
    </footer>
  )
}
