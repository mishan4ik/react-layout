import React from "react"


let GoogleMap = (props) => {


    return(

        <div>

                <div className = "Map__block">

                

                    <iframe src= {props.map}></iframe>




                </div>


        </div>


    )





}
export default GoogleMap 