import { CardProject } from '@components/CardProject'
import { TitleSection } from '@components/TitleSection'
import costManager from '../../../public/cost-manager.jpeg'
import cakeshop from '../../../public/cakeshop.jpeg'
import certifications from '../../../public/certifications.jpeg'
import yardsale from '../../../public/yarsale.jpeg'
import logicGates from '../../../public/logic-gates.jpeg'
import SI from '../../../public/SI.jpeg'
import { useLanguaje } from 'context/useLanguaje'
import { GlowCapture } from '@codaworks/react-glow'

export function Projects() {
  const { lang } = useLanguaje()
  const Projects = [
    {
      title: lang.projects.data[6].title,
      img: costManager.src,
      labels: ['NextJS', 'API Rest', 'Express', 'Auth0'],
      repo: 'https://github.com/Laguilavo10/cost-manager',
      url: 'https://personal-cost-manager.vercel.app',
      description: lang.projects.data[6].description,
      styles: 'glow:bg-green-400/20',
      color: 'green'
    },
    {
      title: lang.projects.data[5].title,
      img: certifications.src,
      labels: ['NextJS', 'Clerk', 'MongoDB'],
      repo: 'https://github.com/Laguilavo10/certifications',
      url: 'https://my-certifications.vercel.app/',
      description: lang.projects.data[5].description,
      styles: 'glow:bg-blue-400/20',
      color: 'blue'
    },
    {
      title: lang.projects.data[0].title,
      img: SI.src,
      labels: ['NextJS', 'Tailwind', 'SQL', 'JWT'],
      repo: '',
      url: 'https://www.linkedin.com/feed/update/urn:li:activity:7056676036511428608/',
      description: lang.projects.data[0].description,
      styles: 'glow:bg-violet-400/20',
      color: 'violet'
    },
    {
      title: lang.projects.data[1].title,
      img: yardsale.src,
      labels: ['NextJS', 'Tailwind', 'GraphQL'],
      repo: 'https://github.com/Laguilavo10/YardSale',
      url: 'https://yard-sale-laguilavo.vercel.app/',
      description: lang.projects.data[1].description,
      styles: 'glow:bg-purple-400/20',
      color: 'purple'
    },
    {
      title: lang.projects.data[2].title,
      img: logicGates.src,
      labels: ['NextJS', 'Tailwind', 'TypeScript'],
      repo: 'https://github.com/Laguilavo10/Compuertas-logicas',
      url: 'https://compuertas-logicas.vercel.app/',
      description: lang.projects.data[2].description,
      styles: 'glow:bg-yellow-400/20',
      color: 'yellow'
    },
    {
      title: lang.projects.data[4].title,
      img: cakeshop.src,
      labels: ['Astro', 'View Transitions', 'Contentful'],
      repo: 'https://github.com/Laguilavo10/cake-shop',
      url: 'https://cake-shop-omega.vercel.app/',
      description: lang.projects.data[4].description,
      styles: 'glow:bg-orange-400/20',
      color: 'orange'
    }
  ]

  return (
    <>
      <section id='projects' className='pt-16'>
        <TitleSection>{lang.projects.title}</TitleSection>
        <GlowCapture className='mt-8 flex w-full flex-wrap justify-center  gap-9 lg:grid xl:grid-cols-3 lg:grid-cols-2'>
          {Projects.map(
            ({ title, img, labels, url, repo, description, color, styles }) => (
              <CardProject
                key={title}
                title={title}
                img={img}
                labels={labels}
                url={url}
                repo={repo}
                description={description}
                color={color}
                styles={styles}
              />
            )
          )}
        </GlowCapture>
      </section>
    </>
  )
}
