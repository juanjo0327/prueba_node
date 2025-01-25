'use client';
import { Fragment } from "react"
import Header from "../componentes generales/header/header";
import "../componentes generales/header/header.css";
import Footer from "../componentes generales/footer/footer";

//use client
const Home = () => {
  return(
      <Fragment>
        <Header/>
        <Footer/>
      </Fragment>
  )
}

export default Home;
