// import { FC } from "react"

import Name from "../Components/animations/Name"

const HomePage = () => {
    return (
        <div className="home">
            <div className="soon">
                <h2>Coming soon</h2>
            </div>
            <div className="present">
                <Name />
                <p>I'm a Junior Frontend Developer</p>
            </div>
        </div>
    )
}

export default HomePage