
import React from "react"
import HeaderLogo from "./HeaderLogo/HeaderLogo.js"
import HeaderMenu from "./HeaderMenu/HeaderMenu.js"


let Header = () => {

    let headerLogo = [ "Black Sea" ]

    const Logo = headerLogo.map((logo) => <HeaderLogo logo = {logo}/>)

    let headermenu = [
        {
            home:"home",
            about:"about me",
            portfolio:"portfolio",
            contact:"contact me"

        }  ]

    const HeadMenu = headermenu.map((menu) => <HeaderMenu home = {menu.home} about ={menu.about} portfolio ={menu.portfolio} 
    contact ={menu.contact}/>)



    return(

        <div>

            <div className = "header">

                        {Logo}

                <div className ="header__menu">

                        {HeadMenu}
                        


                </div>


            </div>

        </div>

    )



}
export default Header;