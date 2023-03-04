// import { FC } from "react"

import Description from "../Components/animations/Description"
import Name from "../Components/animations/Name"

const HomePage = () => {
    return (
        <div className="home">
            {/* <div className="soon">
                <h2>Coming soon</h2>
            </div> */}
            <div className="present">
                <Name />
                <p>I'm <Description /></p>
                {/* <Description /> */}
            </div>
        </div>
    )
}

export default HomePage