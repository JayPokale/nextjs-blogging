import Footer from '@/components/footer'
import Header from '@/components/header'
import React, { ReactNode } from 'react'

export default function layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      {children}
     
    </>
  )
}
