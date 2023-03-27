import { mainSkills } from "./skills";


const MainSkillsCards = () => {
    return (
        <div className="skills-cards">
        {mainSkills.map((skill) => (
          <div key={skill.name} className="skill-card">
            <h2>{skill.name}</h2>
            {/* <p>{skill.description}</p> */}
            {skill.subSkills && (
              <ul>
                <li>{skill.subSkills.suhOne}</li>
                <li>{skill.subSkills.subTwo}</li>
                <li>{skill.subSkills.SubThree}</li>
              </ul>
            )}
          </div>
        ))}
      </div>
    )
}

export default MainSkillsCards;