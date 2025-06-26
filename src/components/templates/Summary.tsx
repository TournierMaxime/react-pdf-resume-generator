interface SummaryProps {
  description: string
}

export default function Summary({ description }: { description: SummaryProps }) {
  return (


    <div id='layout' className='flex items-center justify-between py-1'>
      <div className='flex flex-row items-baseline'>
        <p className='text-base text-black py-4'>
          {description.description}
        </p>
      </div>
    </div>
  )
}