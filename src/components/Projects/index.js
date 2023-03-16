import { CardProject } from '@components/CardProject'
import { TitleSection } from '@components/TitleSection'
import gastos from '../../../public/gestorGastos.jpeg'
import cine from '../../../public/moviesInfo.jpeg'
import pokedex from '../../../public/pokedex.jpeg'
import tablaPeriodica from '../../../public/periodicTable.jpeg'
import passwordGenerator from '../../../public/passwordGenerator.jpeg'
import LoginIg from '../../../public/loginInstagram.jpeg'

export function Projects() {
  const Projects = [
    {
      title: 'Gestor de Gastos',
      img: gastos.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/gestor-de-gastos',
      url: 'https://laguilavo10.github.io/gestor-de-gastos/'
    },
    {
      title: 'Cinema Data',
      img: cine.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/WebMovies',
      url: 'https://laguilavo10.github.io/WebMovies/'
    },
    {
      title: 'Pokedex',
      img: pokedex.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/pokedex-kanto',
      url: 'https://laguilavo10.github.io/pokedex-kanto/'
    },
    {
      title: 'Periodic Table',
      img: tablaPeriodica.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/periodic-table/',
      url: 'https://laguilavo10.github.io/periodic-table/'
    },
    {
      title: 'PassWord Generator',
      img: passwordGenerator.src,
      labels: ['html', 'css', 'javascript'],
      repo: 'https://github.com/Laguilavo10/password-generator',
      url: 'https://laguilavo10.github.io/password-generator/'
    },
    {
      title: 'Login Instagram',
      img: LoginIg.src,
      labels: ['html', 'css'],
      repo: 'https://github.com/Laguilavo10/clon-Instagram',
      url: 'https://laguilavo10.github.io/clon-Instagram/'
    }
  ]
  return (
    <>
      <section id='projects' className='pt-12'>
        <TitleSection>Projects</TitleSection>
        <section className='flex flex-wrap justify-center gap-9 mt-8'>
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
