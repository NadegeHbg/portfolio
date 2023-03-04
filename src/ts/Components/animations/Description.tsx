import Typewriter from "typewriter-effect";


const Description = () => {
    return (
        <Typewriter
            options={{
                autoStart: true,
                loop: true,
                delay: 60,
                strings: [
                    "a Junior Frontend Developer.",
                    "curious.",
                    "spontaneous.",
                    "always looking for new challenges."
                ],
                deleteSpeed: 30,
                // cursor: "black"
            }}
        />
    )
}

export default Description;