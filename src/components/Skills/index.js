import {
  AWSIcon,
  AstroIcon,
  CssIcon,
  GitIcon,
  GraphQLIcon,
  MongoDBIcon,
  HtmlIcon,
  JavascriptIcon,
  NextjsIcon,
  NodeJsIcon,
  PythonIcon,
  ReactIcon,
  SQLIcon,
  TailwindIcon,
  TypescriptIcon,
  AngularIcon,
  DotNetIcon,
  CSharpIcon,
  DockerIcon
} from '@assets/icons'
import { TitleSection } from '@components/TitleSection'
import { useLanguaje } from 'context/useLanguaje'

const Stack = [
  {
    name: 'HTML',
    icon: <HtmlIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#E34F26]'
  },
  {
    name: 'CSS',
    icon: <CssIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#1572B6]'
  },
  {
    name: 'JavaScript',
    icon: <JavascriptIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#F7DF1E]'
  },
  {
    name: 'TypeScript',
    icon: <TypescriptIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#007ACC]'
  },
  {
    name: 'React',
    icon: <ReactIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#61DAFB]'
  },
  {
    name: 'TailwindCSS',
    icon: <TailwindIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#06B6D4]'
  },
  {
    name: 'Git',
    icon: <GitIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#F05032]'
  },
  {
    name: 'NextJS',
    icon: <NextjsIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-white'
  },
  {
    name: 'NodeJs',
    icon: <NodeJsIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#8CC84B]'
  },
  {
    name: 'SQL',
    icon: <SQLIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-yellow-500'
  },
  {
    name: 'GraphQL',
    icon: <GraphQLIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#E10098]'
  },
  {
    name: 'Astro',
    icon: <AstroIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#ff5d01]'
  },
  {
    name: 'Python',
    icon: <PythonIcon height='70' width='70' />,
    className:
      '[&_#blue]:hover:fill-[url(#paint0_linear_87_8204)] [&_#yellow]:hover:fill-[url(#paint1_linear_87_8204)]'
  },
  {
    name: 'AWS',
    icon: <AWSIcon height='70' width='70' />,
    className: '[&_#orange]:hover:fill-[#F90] [&_#gray]:hover:fill-[#252F3E]'
  },
  {
    name: 'MongoDB',
    className:
      '[&>svg>circle]:hover:!fill-[#13AA52] [&>svg>path]:hover:!fill-[#FFFFFF]',
    icon: <MongoDBIcon height='70' width='70' />
  },
  {
    name: 'Angular',
    className:
      '[&>svg>g]:hover:fill-[#c3002f] [&>svg>use]:hover:fill-[#dd0031]',
    icon: <AngularIcon height='70' width='70' />
  },
  {
    name: 'C#',
    className:
      '[&>svg>path:first-child]:hover:fill-[#a179dc] [&>svg>path:nth-child(2)]:hover:fill-[#280068] [&>svg>path:nth-child(3)]:hover:fill-[#390091] [&>svg>*:last-child]:hover:fill-white',
    icon: <CSharpIcon height='70' width='70' />
  },
  {
    name: '.NET',
    icon: <DotNetIcon height='70' width='70' />
  },
  {
    name: 'Docker',
    icon: <DockerIcon height='70' width='70' />,
    className: '[&>svg]:hover:fill-[#008fe2]'
  }
]
export function Skills() {
  const { lang } = useLanguaje()
  return (
    <>
      <section id='skills' className='pt-16'>
        <TitleSection>{lang.skills.title}</TitleSection>
        <ul className='my-10 flex grid-cols-5 flex-wrap justify-center gap-4 sm:grid'>
          {Stack.map(({ name, icon, className }) => (
            <li
              key={name}
              className={`flex flex-col items-center gap-2 transition-all duration-100 ease-out hover:scale-125 ${className} [&>svg]:fill-white`}
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
