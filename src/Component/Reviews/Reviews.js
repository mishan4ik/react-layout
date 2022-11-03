import React from "react"
import ReviewsIcon from "./ReviewsIcon/ReviewsIcon.js"
import ReviewsUserName from "./ReviewsUserName/ReviewsUserName.js"
import ReviewsComment from "./ReviewsComment/ReviewsComment.js"


let Reviews = () => {


    let massIconReviews = [

        "./img/img__reviews.png"


    ]
    let massUserName = [

        {
            name : "dhavan",
            img : "./img/quotes__rewiews.png"
        }

    ]

    let massReviewsComment = [
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"
    ]

    const massIcon = massIconReviews.map((mass) => <ReviewsIcon img ={mass}/> )

    const massNameReviewsUser =  massUserName.map((mass) => <ReviewsUserName name = {mass.name} img1 = {mass.img}/> )

    const massCommentReviews =  massReviewsComment.map((mass) => <ReviewsComment comment = {mass}/> )
    

    return(

        <div>

                <div className = "Reviews">

                        <div className = "Reviews__User">


                            {massIcon}
                            
                            {massNameReviewsUser}
                            

                        </div>

                            {massCommentReviews}
                            

                </div>


        </div>


    )



}

export default Reviews;