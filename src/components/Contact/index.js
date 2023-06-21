import { EmailIcon, LinkedinIcon } from '@assets/icons'
import LinkCustom from '@components/LinkCustom'
import { TitleSection } from '@components/TitleSection'
import { useLanguaje } from 'context/useLanguaje'

export function Contact() {
  const { lang } = useLanguaje()
  return (
    <>
      <section className='gap-10 flex flex-col pt-16 items-center' id='contact'>
        <TitleSection>{lang.contact.title}</TitleSection>
        <p className='text-center w-2/5 min-w-[280px]'>
          {lang.contact.description}
        </p>
        <div className='flex gap-16 justify-center'>
          <LinkCustom
            href={'https://www.linkedin.com/in/andres-laguilavo-2a2848205/'}
            styles='flex-col sm:flex-row'
          >
            <LinkedinIcon width='80' height='80' />
            <p>LinkedIn</p>
          </LinkCustom>
          <LinkCustom
            href={
              'mailto:andresfelipelaguilavo@hotmail.com?subject=¡Trabajemos Juntos!'
            }
            styles='flex-col sm:flex-row'
          >
            <EmailIcon width='80' height='80' />
            <p>Email</p>
          </LinkCustom>
        </div>
      </section>
    </>
  )
}
