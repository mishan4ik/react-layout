import React from "react"

let HeaderMenu = (props) => {


    return(

        <div>

                        <ul>
                                <li><a href="">{props.home} <span>/</span></a></li>
                                <li><a href="">{props.about} <span>/</span></a></li>
                                <li><a href="">{props.portfolio} <span>/</span></a></li>
                                <li><a href="">{props.contact} </a></li>
                                

                        </ul>


        </div>


    )




}

export default HeaderMenu;