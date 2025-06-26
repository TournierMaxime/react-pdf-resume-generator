
interface ResumeSectionProps {
  sectionTitle?: string
  className?: string
  children?: JSX.Element[] | JSX.Element | string
}

export default function ResumeSection({ sectionTitle, className, children }: ResumeSectionProps) {
  return (
    <div id='layout' className="py-1">
      {/* Section Divider */}
      <div className='flex items-center'>
        <h2 className='pr-2 text-lg font-bold'>
          {sectionTitle}
        </h2>
        <div className='w-full border-t border-2 border-black' />
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

