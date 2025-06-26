import { BG_COLOR } from "@/helpers/constants"

interface LanguageProps {
  language: string
  level: string
  percentage: number
}

export default function Languages({ language }: { language: LanguageProps }) {
  return (
    <div className="w-[250px] mr-4 py-1">
      <div className="flex justify-between items-baseline w-full">
        <h3 className="text-lg font-medium leading-7 text-black">
          {language.language}
        </h3>
        <p className="text-base italic leading-5 text-black">
          {language.level}
        </p>
      </div>

      <div className="mt-1 h-2 w-full bg-gray-300 rounded-full overflow-hidden">
        <div
          className={`h-full transition-all duration-300 bg-primary`}
          style={{ width: `${language.percentage}%` }}
        />
      </div>
    </div>

  )
}