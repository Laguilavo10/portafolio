import Link from 'next/link'
import React from 'react'

export default function LinkCustom({ children, href, styles = '' }) {
  return (
    // <Link href={href} target='_blank' className={`flex items-center gap-3 rounded-md border-primary-300 p-2 text-xl text-primary-300 transition-all duration-100 ease-in-out hover:bg-orange-600 hover:scale-110 ${styles}`}>
    <Link href={href} target='_blank' className={`flex items-center gap-3 rounded-md  p-2 text-xl text-primary-200 transition-all duration-100 ease-in-out border-2 border-transparent hover:border-orange-500 hover:scale-110 ${styles}`}>
      {children}
    </Link>
  )
}
