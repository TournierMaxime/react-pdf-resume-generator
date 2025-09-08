import type { ExperienceProps } from "@/data/Experience"

export default function ExperienceEntry({ experience }: { experience: ExperienceProps }) {
  return (
    <div className='py-1'>

      {/* Position Title and Duration */}
      <div id='layout' className='flex items-center justify-between'>
        <h3 className='text-lg font-medium leading-7 text-black'>
          {experience.title}
        </h3>
        <div className='flex items-center text-base text-gray-800'>
          <p>
            {experience.duration}
          </p>
        </div>
      </div>

      {/* Employer and Location */}
      <div id='layout' className='flex justify-between'>
        <p className={`flex items-center italic text-base leading-5 text-primary`}>
          {experience.employer} - {experience.location}
        </p>
      </div>

      {/* Featured Details of Experience */}
      <ul id='layout' className='ml-4 mt-0.5 text-base list-disc'>
        {experience.details.map((detail, index) => (
          <li className="my-1" key={index}>
            {detail.entry}
          </li>
        ))}
      </ul>

    </div>
  )
}