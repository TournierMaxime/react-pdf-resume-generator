
interface SkillListProps {
  label: string
  skillList: {
    key: number
    skill: string
  }[]
}

export default function SkillList({ skillList, label }: SkillListProps) {
  return (
    <div id='layout'>
      {/* Programming Langauges */}
      <span className="font-bold">{label}</span>
      <ul className='flex flex-col text-sm'>
        {skillList.map((skill) => (
          <li key={skill.key}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

