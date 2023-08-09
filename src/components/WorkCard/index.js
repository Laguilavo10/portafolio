export function WorkCard({ data }) {
  const { job, dates, description, company } = data
  return (
    <article className='relative my-10 grid grid-cols-[30px_1fr] gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <div className='rounded-full bg-primary-50 p-1' />
        <div className='h-full w-0 border border-primary-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <h2 className='text-xl font-bold text-orange-300'>{job}</h2>
        <span className='text-sm text-orange-200'>{dates}</span>
        <span className='realtive right-0 text-orange-200 md:absolute'>
          {company}
        </span>

        {description.map((paragraph, index) => (
          <p className='font-light text-md max-w-[80ch]' key={index}>{paragraph}</p>
        ))}
      </div>
    </article>
  )
}
