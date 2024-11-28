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

const App = () => (
    <Router>
        <Header/>
        <TopBar/>
        <Routes>
            <Route path="/" element={<FirstScreen />} />
            <Route path="/chooseAccessories" element={<SecondScreen />} />
            <Route path="/sendForm" element={<ThirdScreen />} />
        </Routes>
        <Footer/>
    </Router>
);

const FirstScreen = () =>  (
    <>
        <MainTitleFirstScreen />
        <MainContentFirstScreen />
    </>
);

const SecondScreen = () =>  (
    <>
        <MainTitleSecondScreen />
        <MainContentSecondScreen />
    </>
);

const ThirdScreen = () =>  (
    <>
        <MainTitleThirdScreen />
        <MainContentThirdScreen />
    </>
);

export default App;


