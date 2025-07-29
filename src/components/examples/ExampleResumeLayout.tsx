
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
import { useLanguage } from '@/context/Language'
import { Fragment } from 'react'


export default function ExampleResumeLayout() {

  const { lang } = useLanguage()

  const contentWithDiffLang = (lang: string) => {
    switch (lang) {
      case "en": return (
        <Fragment>
          {Profile.en.map((profile, index) => (
            <ProfileHeader key={index} profile={profile} />
          ))}

          <ResumeSection>
            {SummaryDescription.en.map((summary, index) => (
              <Summary key={index} description={summary} />
            ))}
          </ResumeSection>

          <ResumeSection sectionTitle='SKILLS' className='flex justify-between'>
            <SkillList
              skillList={Skills}
            />
          </ResumeSection>
          {/* Work Experience with Fetured Details */}
          <ResumeSection sectionTitle='EXPERIENCES'>
            {Experience.en.map((entry, index) => (
              <ExperienceEntry key={index} experience={entry} />
            ))}
          </ResumeSection>

          {/* University/College Education */}
          <ResumeSection sectionTitle='EDUCATIONS'>
            {Education.en.map((entry) => (
              <EducationEntry key={entry.degree} education={entry} />
            ))}
          </ResumeSection>

          {/* Languages */}
          <ResumeSection sectionTitle='LANGUAGES'>
            <div className='flex flex-row'>
              {Langues.en.map((entry, index) => (
                <Languages key={index} language={entry} />
              ))}
            </div>
          </ResumeSection>
        </Fragment>
      )


      default:
        return (
          <Fragment>
            {Profile.fr.map((profile, index) => (
              <ProfileHeader key={index} profile={profile} />
            ))}

            <ResumeSection>
              {SummaryDescription.fr.map((summary, index) => (
                <Summary key={index} description={summary} />
              ))}
            </ResumeSection>

            <ResumeSection sectionTitle='COMPETENCES' className='flex justify-between'>
              <SkillList
                skillList={Skills}
              />
            </ResumeSection>
            {/* Work Experience with Fetured Details */}
            <ResumeSection sectionTitle='EXPERIENCES'>
              {Experience.fr.map((entry, index) => (
                <ExperienceEntry key={index} experience={entry} />
              ))}
            </ResumeSection>

            {/* University/College Education */}
            <ResumeSection sectionTitle='FORMATIONS'>
              {Education.fr.map((entry) => (
                <EducationEntry key={entry.degree} education={entry} />
              ))}
            </ResumeSection>

            {/* Languages */}
            <ResumeSection sectionTitle='LANGUES'>
              <div className='flex flex-row'>
                {Langues.fr.map((entry, index) => (
                  <Languages key={index} language={entry} />
                ))}
              </div>
            </ResumeSection>
          </Fragment>
        )


    }
  }

  return (
    <Page>

      {contentWithDiffLang(lang)}

    </Page>
  )
}


