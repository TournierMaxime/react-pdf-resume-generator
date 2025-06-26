import Toolbar from '@/components/layout/Toolbar'
import PageBreakSpacing from '@/components/layout/PageBreakSpacing'
import ExampleResumeLayout from '@/components/examples/ExampleResumeLayout'


const DownloadedPdfFilename = 'generated_pdf_resume.pdf'

export default function Home() {

  return (
    <div className='min-h-screen bg-slate-800'>
      <header id='header' className='flex py-4 mb-2 justify-center border-b-2 border-gray-400'>
        {/* Download Button and Layout Colors Toggle */}
        <Toolbar
          downloadFilename={DownloadedPdfFilename}
        />
      </header>

      {/* Resume PDF Workspace */}
      <main className='flex flex-col items-center'>
        <PageBreakSpacing>
          <ExampleResumeLayout />

          {/* Place new pages here */}

        </PageBreakSpacing>
      </main>

    </div>
  )
}
