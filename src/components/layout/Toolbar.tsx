interface ToolbarProps {
  downloadFilename: string
}

export default function Toolbar({ downloadFilename }: ToolbarProps) {
  return (
    <button className='inline-flex px-6 py-3 items-center text-base font-medium rounded-md border border-transparent text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
      <a href='/api/pdf' download={downloadFilename}>
        Download PDF
      </a>
    </button>
  )
}