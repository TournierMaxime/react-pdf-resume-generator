
interface SkillListProps {
  label?: string
  skillList: {
    skill: string
  }[]
}

export default function SkillList({ skillList, label }: SkillListProps) {
  return (
    <div id='layout' className="py-1">
      {/* Programming Langauges */}
      <span className="font-bold">{label}</span>
      <ul className='flex flex-row flex-wrap text-base py-2'>
        {skillList.map((skill, index) => (
          <li className="mr-2" key={index}>
            {skill.skill}
          </li>
        ))}
      </ul>
    </div>
  )
}

