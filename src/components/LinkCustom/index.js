import Link from 'next/link'
import React from 'react'

export default function LinkCustom({ children, href, styles = '' }) {
  return (
    <Link href={href} target='_blank' className={`flex items-center gap-4 rounded-md border-primary-300 p-2 text-xl text-primary-300 transition-all duration-100 ease-in-out hover:bg-secondary-600 hover:scale-110 ${styles}`}>
      {children}
    </Link>
  )
}
