import {
  CssIcon,
  GitIcon,
  HtmlIcon,
  JavascriptIcon,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon
} from '@assets/icons'
import { TitleSection } from '@components/TitleSection'

export function Skills() {
  const Stack = [
    {
      name: 'HTML',
      icon: <HtmlIcon height='70' width='70' />
    },
    {
      name: 'CSS',
      icon: <CssIcon height='70' width='70' />
    },
    {
      name: 'JavaScript',
      icon: <JavascriptIcon height='70' width='70' />
    },
    {
      name: 'TypeScript',
      icon: <TypescriptIcon height='70' width='70' />
    },
    {
      name: 'React',
      icon: <ReactIcon height='70' width='70' />
    },
    {
      name: 'TailwindCSS',
      icon: <TailwindIcon height='70' width='70' />
    },
    {
      name: 'Git',
      icon: <GitIcon height='70' width='70' />
    }
  ]
  return (
    <>
      <section id='skills' className='pt-12'>
        <TitleSection>Habilidades</TitleSection>
        <ul className='my-10 flex grid-cols-5 justify-evenly gap-4 sm:grid flex-wrap'>
          {Stack.map(({ name, icon }) => (
            <li
              key={name}
              className='flex flex-col items-center gap-2 transition-all duration-100 ease-out hover:scale-125'
            >
              {icon}
              <span className='text-l text-primary-300'>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
