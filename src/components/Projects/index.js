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
      url: 'https://laguilavo10.github.io/gestor-de-gastos/',
      description:
        'Sistema de gestor de gastos hecho en React y que utiliza localStorage para almacenar los datos del usuario en su dispositivo local.Herramienta para ayudar a los usuarios a administrar sus finanzas personales y hacer un seguimiento de sus gastos diarios.'
    },
    {
      title: 'Cinema Data',
      img: cine.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/WebMovies',
      url: 'https://laguilavo10.github.io/WebMovies/',
      description:
        'Plataforma para explorar películas, los usuarios pueden encontrar una amplia selección de películas organizadas por género, tendencias, ademas. Proyecto usando React y la API de The Movie Database'
    },
    {
      title: 'Pokedex',
      img: pokedex.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/pokedex-kanto',
      url: 'https://laguilavo10.github.io/pokedex-kanto/',
      description:
        'Pokedex hecha en React que utiliza la PokeAPI para mostrar información detallada sobre cada Pokemon en un diseño fiel al de la pokedex de primera generación.La navegacion  funciona dando click a las flechas del pokedex'
    },
    {
      title: 'Periodic Table',
      img: tablaPeriodica.src,
      labels: ['react', 'css'],
      repo: 'https://github.com/Laguilavo10/periodic-table/',
      url: 'https://laguilavo10.github.io/periodic-table/',
      description:
        'Tabla periódica interactiva que muestra información detallada de los elementos químicos obtenidos a través de una API. Está construido con el framework React y ofrece una experiencia de usuario intuitiva y atractiva. Al igual, funciona correctamente en mobile'
    },
    {
      title: 'PassWord Generator',
      img: passwordGenerator.src,
      labels: ['html', 'css', 'javascript'],
      repo: 'https://github.com/Laguilavo10/password-generator',
      url: 'https://laguilavo10.github.io/password-generator/',
      description:
        'Generador de contraseñas construido únicamente con HTML, CSS y JavaScript. Permite crear contraseñas aleatorias con los caractereres y longitud deseadas, teniendo una interfaz de usuario fácil de usar.'
    },
    {
      title: 'Login Instagram',
      img: LoginIg.src,
      labels: ['html', 'css'],
      repo: 'https://github.com/Laguilavo10/clon-Instagram',
      url: 'https://laguilavo10.github.io/clon-Instagram/',
      description:
        'Clon del login de Instagram hecho para el reto #PLATZICHALLENGE. Fue construido con HTMLY  CSS  ofrece una interfaz de usuario similar a la original de Instagram para que los usuarios se sientan familiarizados. Fue realizada con la intencion de practicar las habilidades de maquetación WEB'
    }
  ]
  return (
    <>
      <section id='projects' className='pt-12'>
        <TitleSection>Proyectos</TitleSection>
        <section className='mt-8 flex flex-wrap justify-center gap-9'>
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
