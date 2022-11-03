import React from "react"


let ThingsImg = (props) => {

    return(

        <div>

            <div className ="Things__img">
                <div className = "imageThings">
                <img src={props.img}  alt="" />
                </div>
                <div className = "imageThings">
                <img src={props.img1} alt="" />
                </div>
                <div className = "imageThings">
                <img src={props.img2} alt="" />
                </div>


            </div>

        </div>

    )



}

export default ThingsImg;