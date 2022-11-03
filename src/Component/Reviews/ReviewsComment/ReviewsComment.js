import React from "react"


let ReviewsComment = (props) => {

    return(

        <div>

            <div className ="Reviews__UserComment">


                <p>

                    {props.comment}

                </p>


            </div>



        </div>



    )




}
export default ReviewsComment