export type EducationProps = {
  degree: string
  equivalency: string
  duration: string
  university: string
}

export type Educations = {
  fr: EducationProps[]
  en: EducationProps[]
}

const Education: Educations = {
  fr: [
    {
      degree: "Développeur concepteur logiciel",
      equivalency:
        "Approuvé et reconnu par WES Bachelor's Degree (Software Developer Designer) (Ref. 6989499)",
      duration: "Mai 2021 - Octobre 2024",
      university: "OpenClassRooms, Paris",
    },
  ],
  en: [
    {
      degree: "Software developer (Bachelor's Degree)",
      equivalency:
        "Approved and recognized by WES Bachelor's Degree (Ref. 6989499)",
      duration: "Mai 2021 - October 2024",
      university: "OpenClassRooms, Paris",
    },
  ],
}

export default Education
