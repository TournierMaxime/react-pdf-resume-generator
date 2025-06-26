
import Page from '../layout/Page'

// Template Blocks
import ProfileHeader from '../templates/ProfileHeader'
import ResumeSection from '../templates/ResumeSection'
import ExperienceEntry from '../templates/ExperienceEntry'
import EducationEntry from '../templates/EducationEntry'
import SkillList from '../templates/lists/SkillList'
import Summary from '../templates/Summary'
import Languages from '../templates/Languages'

// Resume Data Imports from Data Directory
import Profile from '@/data/Profile'
import Experience from '@/data/Experience'
import Education from '@/data/Education'
import { Skills } from '@/data/Skills'
import SummaryDescription from '@/data/Summary'
import Langues from '@/data/Languages'


export default function ExampleResumeLayout() {

  return (
    <Page>
      <ProfileHeader profile={Profile} />

      <ResumeSection>
        <Summary description={SummaryDescription} />
      </ResumeSection>

      <ResumeSection sectionTitle='COMPETENCES' className='flex justify-between'>
        <SkillList
          skillList={Skills}
        />
      </ResumeSection>

      {/* Work Experience with Fetured Details */}
      <ResumeSection sectionTitle='EXPERIENCES'>
        {Experience.map((entry, index) => (
          <ExperienceEntry key={index} experience={entry} />
        ))}
      </ResumeSection>

      {/* University/College Education */}
      <ResumeSection sectionTitle='FORMATIONS'>
        {Education.map((entry) => (
          <EducationEntry key={entry.degree} education={entry} />
        ))}
      </ResumeSection>

      {/* Languages */}
      <ResumeSection sectionTitle='LANGUES'>
        <div className='flex flex-row'>
          {Langues.map((entry, index) => (
            <Languages key={index} language={entry} />
          ))}
        </div>
      </ResumeSection>
    </Page>
  )
}


