
export function TopBar() {
  return (
    <>
      <header className='fixed top-0 left-0  right-0 z-30 w-full '>
        <nav className='flex items-center justify-between py-2 px-4 bg-transparent backdrop-blur-[20px]'>
          <p className='text-xl hidden sm:flex'>Andres Laguilavo</p>
          <ul className='flex gap-8 justify-center w-full sm:w-auto '>
            <li><a href='#about'>About</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>
        </nav>
      </header>
    </>
  )
}
