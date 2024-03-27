export function WorkCard({ data }) {
  const { job, dates, description, company, current } = data
  return (
    <article className='relative my-10 grid grid-cols-[30px_1fr] gap-4'>
      <div className='flex flex-col items-center gap-2'>
        <div className='rounded-full bg-primary-50 p-1' />
        <div className='h-full w-0 border border-primary-50' />
      </div>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-4'>
          <h2 className='text-xl font-bold text-orange-300'>{job}</h2>
          {current && (
            <span className='flex items-center gap-1 text-sm text-green-500'>
              <div className='h-3 w-3 animate-pulse rounded-full bg-current transition-all' />
              Actual
            </span>
          )}
        </div>
        <span className='text-sm text-orange-200'>{dates}</span>
        <span className='realtive right-0 text-orange-200 md:absolute'>
          {company}
        </span>

        {description.map((paragraph, index) => (
          <p
            className='text-md max-w-[80ch] font-light'
            key={index}
            dangerouslySetInnerHTML={{ __html: paragraph }}
          ></p>
        ))}
      </div>
    </article>
  )
}
