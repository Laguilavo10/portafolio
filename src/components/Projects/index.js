import { CardProject } from '@components/CardProject'
import { TitleSection } from '@components/TitleSection'
import cine from '../../../public/moviesInfo.jpeg'
import costManager from '../../../public/cost-manager.jpeg'
import bookLand from '../../../public/bookland.jpeg'
import certifications from '../../../public/certifications.jpeg'
import yardsale from '../../../public/yarsale.jpeg'
import SI from '../../../public/SI.jpeg'
import { useLanguaje } from 'context/useLanguaje'

export function Projects() {
  const { lang } = useLanguaje()
  const Projects = [
    {
      title: lang.projects.data[6].title,
      img: costManager.src,
      labels: ['NextJS', 'API Rest', 'Express', 'Auth0'],
      repo: 'https://github.com/Laguilavo10/cost-manager',
      url: 'https://personal-cost-manager.vercel.app',
      description: lang.projects.data[6].description
    },
    {
      title: lang.projects.data[5].title,
      img: certifications.src,
      labels: ['NextJS', 'Tailwind', 'Typescript'],
      repo: 'https://github.com/Laguilavo10/certifications',
      url: 'https://my-certifications.vercel.app/',
      description: lang.projects.data[5].description
    },
    {
      title: lang.projects.data[0].title,
      img: SI.src,
      labels: ['NextJS', 'Tailwind', 'SQL', 'JWT'],
      repo: '',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7056676036511428608/',
      description: lang.projects.data[0].description
    },
    {
      title: lang.projects.data[1].title,
      img: yardsale.src,
      labels: ['NextJS', 'Tailwind', 'GraphQL'],
      repo: 'https://github.com/Laguilavo10/YardSale',
      url: 'https://yard-sale-laguilavo.vercel.app/',
      description: lang.projects.data[1].description
    },
    {
      title: lang.projects.data[2].title,
      img: cine.src,
      labels: ['React', 'CSS'],
      repo: 'https://github.com/Laguilavo10/WebMovies',
      url: 'https://laguilavo10.github.io/WebMovies/',
      description: lang.projects.data[2].description
    },
    // {
    //   title: lang.projects.data[3].title,
    //   img: pokedex.src,
    //   labels: ['React', 'CSS'],
    //   repo: 'https://github.com/Laguilavo10/pokedex-kanto',
    //   url: 'https://laguilavo10.github.io/pokedex-kanto/',
    //   description: lang.projects.data[3].description
    // },
    {
      title: lang.projects.data[4].title,
      img: bookLand.src,
      labels: ['NextJS', 'Tailwind'],
      repo: 'https://github.com/Laguilavo10/pruebas-tecnicas',
      url: 'https://pruebas-tecnicas-one.vercel.app/',
      description: lang.projects.data[4].description
    }

  ]

  return (
    <>
      <section id='projects' className='pt-16'>
        <TitleSection>{lang.projects.title}</TitleSection>
        <section className='flex flex-wrap justify-center w-full mt-8 gap-9 lg:grid lg:grid-cols-3'>
          {Projects.map(({ title, img, labels, url, repo, description }) => (
            <CardProject
              key={title}
              title={title}
              img={img}
              labels={labels}
              url={url}
              repo={repo}
              description={description}
            />
          ))}
        </section>
      </section>
    </>
  )
}
