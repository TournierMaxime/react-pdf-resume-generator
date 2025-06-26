
import Page from '../layout/Page'

// Template Blocks
import ProfileHeader from '../templates/ProfileHeader'
import ResumeSection from '../templates/ResumeSection'
import ExperienceEntry from '../templates/ExperienceEntry'
import EducationEntry from '../templates/EducationEntry'
import SkillList from '../templates/lists/SkillList'
import Summary from '../templates/Summary'

// Resume Data Imports from Data Directory
import Profile from '@/data/Profile'
import Experience from '@/data/Experience'
import Education from '@/data/Education'
import { ManagementSkills, FrontendSkills, BackendSkills, CICDSkills, ProjectSkills } from '@/data/Skills'
import SummaryDescription from '@/data/Summary'


export default function ExampleResumeLayout() {

  return (
    <Page>
      <ProfileHeader profile={Profile} />

      <ResumeSection sectionTitle='SOMMAIRE'>
        <Summary description={SummaryDescription} />
      </ResumeSection>

      <ResumeSection sectionTitle='COMPETENCES' className='flex justify-between'>
        <SkillList
          label='Force'
          skillList={ManagementSkills}
        />
        <SkillList
          label='Frontend'
          skillList={FrontendSkills}
        />
        <SkillList
          label='Backend'
          skillList={BackendSkills}
        />
        <SkillList
          label='CI/CD'
          skillList={CICDSkills}
        />
        <SkillList
          label='Gestion de projets'
          skillList={ProjectSkills}
        />

      </ResumeSection>

      {/* Work Experience with Fetured Details */}
      <ResumeSection sectionTitle='EXPERIENCES'>
        {Experience.map((entry) => (
          <ExperienceEntry key={entry.key} experience={entry} />
        ))}
      </ResumeSection>

      {/* University/College Education */}
      <ResumeSection sectionTitle='FORMATIONS'>
        {Education.map((entry) => (
          <EducationEntry key={entry.degree} education={entry} />
        ))}
      </ResumeSection>
    </Page>
  )
}


