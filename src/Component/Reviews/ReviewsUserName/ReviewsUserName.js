import React from "react"

let ReviewsUserName = (props) => {

    return (

        <div>

            <div className = "Reviews__UserName">

                <h2>{props.name}</h2>
                <img src={props.img1} alt="" />

            </div>


        </div>


    )




}
export default ReviewsUserName