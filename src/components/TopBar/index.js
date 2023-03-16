
export function TopBar() {
  return (
    <>
      <header className='fixed top-0 left-0  right-0 z-30 w-full bg-transparent backdrop-blur-[20px] transition-shadow duration-500 ease-in-out'>
        <nav className='flex items-center justify-between py-2 px-4'>
          <p>Andres Laguilavo</p>
          <ul className='flex gap-8'>
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
