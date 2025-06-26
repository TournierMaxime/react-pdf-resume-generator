interface EducationEntryProps {
  degree: string
  duration: string
  university: string
}

export default function EducationEntry({ education }: { education: EducationEntryProps }) {
  return (
    <div id='layout' className='px-1 pt-1 pb-1'>

      <div id='layout' className='flex items-center justify-between'>
        <div className='flex flex-row items-baseline'>
          <h3 className='text-md font-bold leading-7 text-black'>
            {education.degree}
          </h3>
        </div>

        <div className='flex items-center text-sm text-gray-800'>
          <p>
            {education.duration}
          </p>
        </div>
      </div>

      <div id='layout' className='flex justify-between'>
        <p className='flex items-center text-base leading-5 text-black text-sm'>
          {education.university}
        </p>
      </div>
    </div>
  )
}