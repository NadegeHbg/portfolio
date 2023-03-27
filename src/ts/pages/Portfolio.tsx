import MainSkillsCards from "../Components/Cards/MainSkillsCards";
import OtherSkillsCards from "../Components/Cards/OtherSkillsCards";

const Portfolio = () => {
    return (
        <>
            <section className="main-skills-section text">
                <div className="side">
                    <h2>Hello, I'm</h2>
                    <h2>Nadège Hombergen</h2>
                    <p>
                        I’m a junior web developer based in Belgium. My main focus is Frontend and I’ve a strong interest in UI and UX design. But I’m not afraid of the Backend part of development neither. 
                        <br />
                        I’m currently, through this portfolio, learning Typescript and strengthening my SASS skills.
                    </p>
                    <button>Full resume</button>
                </div>
                <div className="main-skills">
                    <h2>Main languages and tools</h2>
                    <MainSkillsCards />
                </div>
            </section>
            <section className="main-skills-section text">
                <div className="main-skills">
                    <h2>But I also play with ...</h2>
                    <OtherSkillsCards />
                </div>
                <div className="Side">
                    <img src="" alt="" />
                </div>
            </section>
        </>
    )
}

export default Portfolio;