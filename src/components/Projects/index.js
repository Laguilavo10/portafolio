import { CardProject } from '@components/CardProject'
import { TitleSection } from '@components/TitleSection'
import gastos from '../../../public/gestorGastos.jpeg'
import cine from '../../../public/moviesInfo.jpeg'
import pokedex from '../../../public/pokedex.jpeg'
import tablaPeriodica from '../../../public/periodicTable.jpeg'
import passwordGenerator from '../../../public/passwordGenerator.jpeg'
import SI from '../../../public/SI.jpeg'
import { useLanguaje } from 'context/useLanguaje'

export function Projects() {
  const { lang } = useLanguaje()
  const Projects = [
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
      img: gastos.src,
      labels: ['React', 'CSS'],
      repo: 'https://github.com/Laguilavo10/gestor-de-gastos',
      url: 'https://laguilavo10.github.io/gestor-de-gastos/',
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
    {
      title: lang.projects.data[3].title,
      img: pokedex.src,
      labels: ['React', 'CSS'],
      repo: 'https://github.com/Laguilavo10/pokedex-kanto',
      url: 'https://laguilavo10.github.io/pokedex-kanto/',
      description: lang.projects.data[3].description
    },
    {
      title: lang.projects.data[4].title,
      img: tablaPeriodica.src,
      labels: ['React', 'CSS'],
      repo: 'https://github.com/Laguilavo10/periodic-table/',
      url: 'https://laguilavo10.github.io/periodic-table/',
      description: lang.projects.data[4].description
    },
    {
      title: lang.projects.data[5].title,
      img: passwordGenerator.src,
      labels: ['HTML', 'CSS', 'JavaScript'],
      repo: 'https://github.com/Laguilavo10/password-generator',
      url: 'https://laguilavo10.github.io/password-generator/',
      description: lang.projects.data[5].description
    }
  ]

  return (
    <>
      <section id='projects' className='pt-16'>
        <TitleSection>{lang.projects.title}</TitleSection>
        <section className='mt-8 flex w-full flex-wrap justify-center gap-9 lg:grid lg:grid-cols-3'>
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
