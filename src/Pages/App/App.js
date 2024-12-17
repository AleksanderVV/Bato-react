import { useState, useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import TopBar from "../../components/TopBar/TopBar";
import MainTitleFirstScreen from "../MainTitleFirstScreen/MainTitleFirstScreen";
import MainContentFirstScreen from "../MainContentFirstScreen/MainContentFirstScreen";
import MainTitleSecondScreen from "../MainTitleSecondScreen/MainTitleSecondScreen";
import MainContentSecondScreen from "../MainContentSecondScreen/MainContentSecondScreen";
import MainTitleThirdScreen from "../MainTitleThirdScreen/MainTitleThirdScreen";
import MainContentThirdScreen from "../MainContentThirdScreen/MainContentThirdScreen";

import './App.scss';

const App = () => {
    const [currentToolbox, setCurrentToolbox] = useState(null);
    const [totalPrice, setTotalPrice] = useState(0);
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {

        window.addEventListener('scroll', () => {

            if((window.scrollY > 78 && !isMobile) || (window.scrollY > 1 && isMobile)) {
                setIsSticky(true);
            } else {setIsSticky(false)}

        });

    }, []);

    const toggleDropdownMenuOpen = () => {setMenuOpen(!isMenuOpen)}

    return (
        <Router>
            <Header 
                isSticky={isSticky} 
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                toggleDropdownMenuOpen={toggleDropdownMenuOpen}/>
            <TopBar 
                isSticky={isSticky}
                isMobile={isMobile}
                isMenuOpen={isMenuOpen}
                setMenuOpen={setMenuOpen}
                toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                currentToolbox={currentToolbox} 
                setCurrentToolbox={setCurrentToolbox} 
                totalPrice={totalPrice} 
                setTotalPrice={setTotalPrice}/>
            <Routes>
                <Route path="/" element={
                    <FirstScreen isSticky={isSticky}/>} />
                <Route 
                    path="/chooseAccessories" 
                    element={
                        <SecondScreen 
                            isMobile={isMobile}
                            isSticky={isSticky}
                            toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                            currentToolbox={currentToolbox} 
                            totalPrice={totalPrice}/>} />
                <Route 
                    path="/sendForm" 
                    element={<ThirdScreen />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

const FirstScreen = ({isSticky}) =>  (
    <>
        <MainTitleFirstScreen isSticky={isSticky}/>
        <MainContentFirstScreen />
    </>
);

const SecondScreen = ({
                        isMobile,
                        isSticky, 
                        toggleDropdownMenuOpen,
                        currentToolbox, 
                        totalPrice}) =>  (
    <>
        <MainTitleSecondScreen 
            isMobile={isMobile}
            isSticky={isSticky}/>
        <MainContentSecondScreen 
            toggleDropdownMenuOpen={toggleDropdownMenuOpen}
            currentToolbox={currentToolbox} 
            totalPrice={totalPrice} />
    </>
);

const ThirdScreen = ({currentToolbox}) =>  (
    <>
        <MainTitleThirdScreen />
        <MainContentThirdScreen />
    </>
);

export default App;


