import { EmailIcon, LinkedinIcon } from '@assets/icons'
import LinkCustom from '@components/LinkCustom'
import { TitleSection } from '@components/TitleSection'
import { useLanguaje } from 'context/useLanguaje'

export function Contact() {
  const { lang } = useLanguaje()
  return (
    <>
      <section className='flex flex-col items-center gap-10 pt-16' id='contact'>
        <TitleSection>{lang.contact.title}</TitleSection>
        <p className='w-2/5 min-w-[280px] text-center'>
          {lang.contact.description}
        </p>
        <div className='flex justify-center gap-16'>
          <LinkCustom
            href={'https://www.linkedin.com/in/andres-laguilavo-2a2848205/'}
            styles='flex-col sm:flex-row'>
            <LinkedinIcon width='80' height='80' />
            <p>LinkedIn</p>
          </LinkCustom>
          <LinkCustom
            href={
              'mailto:andresfelipelaguilavo@hotmail.com?subject=¡Trabajemos Juntos!'
            }
            styles='flex-col sm:flex-row'>
            <EmailIcon width='80' height='80' />
            <p>Email</p>
          </LinkCustom>
        </div>
      </section>
    </>
  )
}
