import React from 'react'
import { Fruktur } from '@next/font/google'
import Link from 'next/link';
import { ModeToggle } from './toggleMode';
import SearchTab from './SearchTab';
import GenreSelector from './GenreSelector';

const logoFont = Fruktur({
  subsets : ['cyrillic-ext'],
  weight : '400',

})

function Header() {
  return (
    <div className='fixed z-20 top-0 w-full flex justify-between items-center p-5 bg-gradient-to-t from-gray-200/0 via-gray-900/25 to-gray-900'>
      <Link href="/" className='mr-10 text-4xl bg-gradient-to-r from-slate-50 via-slate-200 to-slate-300 bg-clip-text text-transparent cursor-pointer invert dark:invert-0'><div className={logoFont.className}>Magnetora</div></Link>
      <div className="flex items-center space-x-4">
      <SearchTab/>
      <GenreSelector/>
        <ModeToggle/>
        </div>
    </div>
  )
}

export default Header