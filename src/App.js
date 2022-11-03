import React from "react"
import './App.css';
import Header from "./Component/Header/header.js"
import Read from "./Component/ReadMore/readmore.js"
import Things from "./Component/Things/Things.js"
import Reviews from "./Component/Reviews/Reviews.js"
import Map from "./Component/Map/Map.js"
import Footer from "./Component/Footer/Footer.js"
import "./style/style.css"



function App() {
  return (
    <div>

      <Header/>
      <Read/>
      <Things/>
      <Reviews/>
      <Map/>
      <Footer/>
  

    </div>
  );
}

export default App;
