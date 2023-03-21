// import { FC } from "react"

import Description from "../Components/animations/Description"
import Name from "../Components/animations/Name"

const HomePage = () => {
    return (
        <div className="home">
            <div className="name-container">
                <Name />
                <div className="description">I'm <Description /></div>
                {/* <Description /> */}
            </div>
        </div>
    )
}

export default HomePage