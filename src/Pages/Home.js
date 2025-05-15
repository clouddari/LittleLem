import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import '../App.css';
import ReserveATable from "../Components/ReserveSection";
import Specials from "../Components/Specials";
import Testimonials from "../Components/Testimonials";
import AboutUs from "../Components/AboutUs"
import ScrollButton from "../Components/ScrollButton";

function Home (){
    return(
        <>
        <Header />
        <ReserveATable />
        <Specials />
        <Testimonials />
        <AboutUs />
        <Footer />
        <ScrollButton />
        </>
    );
};

export default Home;