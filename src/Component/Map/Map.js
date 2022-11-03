import React from "react"
import GoogleMap from "./GoogleMap/GoogleMap.js"


let Map = () => {

    let massMap = [

        {
            map: "https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d20309.075323923767!2d30.4721233!3d50.4851493!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1667208956480!5m2!1sru!2sua" ,
            style: {border:0},
            allowfullscreen:"",
            loading:"lazy",
            referrerpolicy:"no-referrer-when-downgrade"


        }
        


    ]

        const GoogleMapmass = massMap.map((mass) => <GoogleMap map ={mass.map} style= {mass.style} allowfullscreen = {mass.allowfullscreen}  loading = {mass.loading} referrerpolicy = {mass.referrerpolicy} /> )

    return(



        <div>

            <div className = "Map">


                

                    {GoogleMapmass}
           

                <div className = "form">
                    <form action="">
                    <div className = "form___Name">

                        <input type="text" placeholder="Name" />
                    </div>
                    <div className = "form___mail">
                        <input type="text" placeholder="email address" />
                    </div>
                    <div className = "form___textarea">
                        <textarea   placeholder="Message"></textarea>
                    </div>
                        <input className ="btn__form" type="button" />

                    </form>
                   

                </div>

               
                

            </div>

    </div>







    )


    


}

export default Map;