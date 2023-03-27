import { otherSkills } from "./skills";


const OtherSkillsCards = () => {
    return (
        <div>
        {otherSkills.map((skill) => (
          <div key={skill.name}>
            <h2>{skill.name}</h2>
          </div>
        ))}
      </div>
    )
}

export default OtherSkillsCards;