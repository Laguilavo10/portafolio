import { TitleSection } from '@components/TitleSection'
import { WorkCard } from '@components/WorkCard'
import { useLanguaje } from 'context/useLanguaje'

export function Experience() {
  const { lang } = useLanguaje()

  return (
    <section className='pt-16' id='experience'>
      <TitleSection>{lang.experience.title}</TitleSection>
      {lang.experience.data.map((exp, index) => (
        <WorkCard key={index} data={exp} />
      ))}
    </section>
  )
}
