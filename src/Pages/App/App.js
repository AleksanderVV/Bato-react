import { useState } from "react";
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

    const toggleDropdownMenuOpen = () => {setMenuOpen(!isMenuOpen)}

    return (
        <Router>
            <Header/>
            <TopBar 
                isMenuOpen={isMenuOpen}
                setMenuOpen={setMenuOpen}
                toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                currentToolbox={currentToolbox} 
                setCurrentToolbox={setCurrentToolbox} 
                totalPrice={totalPrice} 
                setTotalPrice={setTotalPrice}/>
            <Routes>
                <Route path="/" element={<FirstScreen />} />
                <Route 
                    path="/chooseAccessories" 
                    element={
                        <SecondScreen 
                            toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                            currentToolbox={currentToolbox} 
                            totalPrice={totalPrice}/>} />
                <Route path="/sendForm" element={<ThirdScreen />} />
            </Routes>
            <Footer/>
        </Router>
    )
}

const FirstScreen = () =>  (
    <>
        <MainTitleFirstScreen />
        <MainContentFirstScreen />
    </>
);

const SecondScreen = ({isMenuOpen, setMenuOpen, toggleDropdownMenuOpen,currentToolbox, totalPrice}) =>  (
    <>
        <MainTitleSecondScreen />
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


