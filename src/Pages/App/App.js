import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import MainTitleFirstScreen from "../MainTitleFirstScreen/MainTitleFirstScreen";
import TopBar from "../../components/TopBar/TopBar";
import MainContentFirstScreen from "../MainContentFirstScreen/MainContentFirstScreen";

import './App.scss';

const App = () => {
    return (
        <>
            <Header/>
            <TopBar/>
            <MainTitleFirstScreen/>
            <MainContentFirstScreen/>
            <Footer/>
        </>
    )
}

export default App;