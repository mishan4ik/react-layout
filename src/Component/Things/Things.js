import React from "react"
import ThingsTitle from "./ThingsTitle/ThingsTitle.js"
import ThingsText from "./ThingsText/ThingsText.js"
import ThingsImg from "./ThingsImg/ThingsImg.js"



let Things = () => {

    let Things = ["At the same time that we are earnest to explore & learn all things"]

        const massThing = Things.map((mass) => <ThingsTitle title ={mass}/> )

    let ThingsTextmass =[

            {
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

            }

    ]
    const massThings = ThingsTextmass.map((mass) => <ThingsText text = {mass.text}/> )


    let ThingsImgmass = [


            {

                img: "./img/basket.png",
                img1: "./img/planet.png",
                img2: "./img/suitcase.png"

            }


    ]

    const massImageThings = ThingsImgmass.map((mass) => <ThingsImg img = {mass.img} img1 = {mass.img1} img2 = {mass.img2}/>  )
        
    return (

        <div>

                <div className ="Things">

                        {massThing}

                        {massThings}

                        {massImageThings}

                        

                </div>


        </div>


    )



}

export default Things;