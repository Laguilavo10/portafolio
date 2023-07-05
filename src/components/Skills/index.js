import {
  CssIcon,
  GitIcon,
  GraphQLIcon,
  HtmlIcon,
  JavascriptIcon,
  NextjsIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  TypescriptIcon
} from '@assets/icons'
import { TitleSection } from '@components/TitleSection'
import { useLanguaje } from 'context/useLanguaje'

const Stack = [
  {
    name: 'HTML',
    icon: <HtmlIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#E34F26]'
  },
  {
    name: 'CSS',
    icon: <CssIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#1572B6]'
  },
  {
    name: 'JavaScript',
    icon: <JavascriptIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#F7DF1E]'
  },
  {
    name: 'TypeScript',
    icon: <TypescriptIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#007ACC]'
  },
  {
    name: 'React',
    icon: <ReactIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#61DAFB]'
  },
  {
    name: 'TailwindCSS',
    icon: <TailwindIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#06B6D4]'
  },
  {
    name: 'Git',
    icon: <GitIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#F05032]'
  },
  {
    name: 'NextJS',
    icon: <NextjsIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-white'
  },
  {
    name: 'SQL',
    icon: <SQLIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-yellow-500'
  },
  {
    name: 'GraphQL',
    icon: <GraphQLIcon height='70' width='70' />,
    color: '[&>svg]:hover:fill-[#E10098]'
  }
]
export function Skills() {
  const { lang } = useLanguaje()
  return (
    <>
      <section id='skills' className='pt-16'>
        <TitleSection>{lang.skills.title}</TitleSection>
        <ul className='my-10 flex grid-cols-5 flex-wrap justify-center gap-4 sm:grid'>
          {Stack.map(({ name, icon, color = 'white' }) => (
            <li
              key={name}
              className={`flex flex-col items-center gap-2 transition-all duration-100 ease-out hover:scale-125 ${color} [&>svg]:fill-white`}>
              {icon}
              <span className='text-l text-primary-300'>{name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}
