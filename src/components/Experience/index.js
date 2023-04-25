import { TitleSection } from '@components/TitleSection'
import { WorkCard } from '@components/WorkCard'

const EXP = [
  {
    job: 'Desarrollador sistema de información',
    dates: 'Mar-2022 / Abr-2023',
    description: `Desarrollé un sistema de información para la lavanderia LAVAPOR 
    utilizando Next.js y TypeScript para el frontend, Tailwind CSS para el 
    diseño de la interfaz de usuario, JSON Web Tokens (JWT) para la autenticación 
    y cookies, y MySQL para la base de datos. Este proyecto me permitió mejorar  mis habilidades en desarrollo frontend y crear una interfaz de usuario intuitiva y fácil de usar`,
    company: 'Freelance',
    current: false
  },
  {
    job: 'Aprendiz SENA - Software Developer',
    dates: 'Sept-2022 / Mar-2023',
    description: 'Proporcioné soporte para resolver problemas tecnológicos utilizando herramientas como .NET, Javascript, Microsoft y SQL. Adquirí habilidades en herramientas de generación de informes, especialmente en JasperReports, lo que me permitió producir informes precisos y eficientes. Participé en proyectos que mejoraron la eficiencia del equipo.',
    company: 'Soporte Logico SAS',
    current: false
  }
]
export function Experience() {
  return (
    <section className='pt-16' id='experience'>
      <TitleSection>Experiencia</TitleSection>
      {EXP.map((exp, index) => (
        <WorkCard key={index} data={exp} />
      ))}
    </section>
  )
}
