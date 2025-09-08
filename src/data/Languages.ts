export type LanguagesProps = {
  fr: LanguageProps[]
  en: LanguageProps[]
}

export type LanguageProps = {
  language: string
  level: string
  percentage: number
}

const Languages: LanguagesProps = {
  fr: [
    {
      language: "Français",
      level: "Maternelle",
      percentage: 100,
    },
    {
      language: "Anglais",
      level: "Courant",
      percentage: 70,
    },
  ],
  en: [
    {
      language: "Français",
      level: "Native",
      percentage: 100,
    },
    {
      language: "Anglais",
      level: "Fluent",
      percentage: 70,
    },
  ],
}

export default Languages
