interface SummaryProps {
  description: string
}

export default function Summary({ description }: { description: SummaryProps }) {
  return (


    <div id='layout' className='flex items-center justify-between'>
      <div className='flex flex-row items-baseline'>
        <p className='text-sm text-black py-2'>
          {description.description}
        </p>
      </div>
    </div>
  )
}