import React from "react"
import ReadMoreTitle from "./ReadMoreTitle/ReadMoreTitle.js"
import ReadMoreBtn from "./ReadMoreBtn/ReadMoreBtn.js"


let Read = () => {

    let MoreTitle = ["we need the tonic of  wildness"]
    let MoreBtn = ["Read more"]

    const Title = MoreTitle.map((readTitle) => <ReadMoreTitle title = {readTitle}/>)
    const ReadBtn = MoreBtn.map((readmoreBtn) => <ReadMoreBtn btn = {readmoreBtn} />)

    return (

        <div>

                <div className ="ReadMore">

                        {Title}

                        {ReadBtn}

                </div>


        </div>


    )



}

export default Read;