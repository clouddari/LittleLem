import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../App.css';
import ReserveATable from "../Components/ReserveATable";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import AboutUs from "../Components/AboutUs"

function Home (){
    return(
        <>
        <Header />
        <ReserveATable />
        <Specials />
        <Testimonials />
        <AboutUs />
        <Footer />
        </>
    );
};

export default Home;