import type { EducationProps } from "@/data/Education"

export default function EducationEntry({ education }: { education: EducationProps }) {
  return (
    <div id='layout' className="py-1">

      <div id='layout' className='flex items-center justify-between'>
        <div className='flex flex-row items-baseline'>
          <h3 className='text-lg font-medium leading-7 text-black'>
            {education.degree}
          </h3>
        </div>

        <div className='flex items-center text-base text-gray-800'>
          <p>
            {education.duration}
          </p>
        </div>
      </div>

      <p className={`flex items-center text-base leading-5`}>
        {education.equivalency}
      </p>

      <div id='layout' className='flex justify-between'>
        <p className={`flex items-center text-base italic leading-5 text-primary`}>
          {education.university}
        </p>
      </div>
    </div>
  )
}