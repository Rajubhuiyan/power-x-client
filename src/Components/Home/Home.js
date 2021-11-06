import React from 'react';
import AboutUsSide from './AboutUsSide/AboutUsSide';
import Categories from './Categoriees/Categories';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import TrainingPrograms from './TrainingPrograms/TrainingPrograms';
import WhyChooseUsContainer from './WhyChooseUsContainer/WhyChooseUsContainer';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Categories></Categories>
            <AboutUsSide></AboutUsSide>
            <TrainingPrograms></TrainingPrograms>
            <WhyChooseUsContainer></WhyChooseUsContainer>
            <Footer></Footer>
        </>
    );
};

export default Home;