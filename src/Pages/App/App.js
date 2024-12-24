import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useBodyID from "../../hooks/useBodyID";

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
    const [isMobile, setIsMobile] = useState(null);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/sendForm', {state: {currentToolbox}});
    }

    useEffect(() => {

        setIsMobile(window.innerWidth < 768);

        window.addEventListener('scroll', () => {

            if((window.scrollY > 78 && !isMobile) || (window.scrollY > 1 && isMobile)) {
                setIsSticky(true);
            } else {setIsSticky(false)}

        });
// eslint-disable-next-line
    }, []);

    const toggleDropdownMenuOpen = () => {setMenuOpen(!isMenuOpen)}

    return (
        <>
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
                setTotalPrice={setTotalPrice}
                handleClick={handleClick}/>
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
                            totalPrice={totalPrice}
                            handleClick={handleClick}/>} />
                <Route 
                    path="/sendForm" 
                    element={<ThirdScreen />} />
            </Routes>
            <Footer/>
        </>
    )
}

const FirstScreen = ({isSticky}) =>  {
    useBodyID('main');
    return (
    <>
        <MainTitleFirstScreen isSticky={isSticky}/>
        <MainContentFirstScreen />
    </>
)};

const SecondScreen = ({
                        isMobile,
                        isSticky, 
                        toggleDropdownMenuOpen,
                        currentToolbox, 
                        totalPrice,
                        handleClick}) =>  {
                            useBodyID('accessories');
                            return (
    <>
        <MainTitleSecondScreen 
            isMobile={isMobile}
            isSticky={isSticky}/>
        <MainContentSecondScreen 
            toggleDropdownMenuOpen={toggleDropdownMenuOpen}
            currentToolbox={currentToolbox} 
            totalPrice={totalPrice}
            handleClick={handleClick} />
    </>
)};

const ThirdScreen = ({currentToolbox}) =>  {
    useBodyID('total');
    return (
    <>
        <MainTitleThirdScreen />
        <MainContentThirdScreen />
    </>
)};

export default App;


