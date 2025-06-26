import { FONT_COLOR } from "@/helpers/constants"

interface EducationEntryProps {
  degree: string
  duration: string
  university: string
}

export default function EducationEntry({ education }: { education: EducationEntryProps }) {
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

      <div id='layout' className='flex justify-between'>
        <p className={`flex items-center text-base italic leading-5 text-primary`}>
          {education.university}
        </p>
      </div>
    </div>
  )
}