import { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import useBodyID from "../../hooks/useBodyID";
import useToolboxService from '../../services/ToolboxService';

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
    const [drawersData, setDrawersData] = useState({});
    const [selectedAttachedAcc, setSelectedAttachedAcc] = useState([]);
    const [currentDrawer, setCurrentDrawer] = useState(0);

    const [accessories, setAccessories] = useState([]);
    const [filteredAccessories, setFilteredAccessories] = useState([]);
    const [attachingAccessories, setAttachingAccessories] = useState([]);
    const [loading, setLoading] = useState(true);

    const {setProcess, getAccessories, getAttachingAccessories} = useToolboxService();

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

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
      }, []);
    
    const onRequest = async () => {
        setLoading(true);
        try {
            const acc = await getAccessories();
            const attachingAcc = await getAttachingAccessories();
            setAccessories(acc);
            setFilteredAccessories(acc);
            setAttachingAccessories(attachingAcc);
            setProcess('confirmed');
        } catch (error) {
            setProcess('error');
            console.error('Failed to fetch accessories');
        } finally {
            setLoading(false);
        }
    }

    const searchAcc = (event) => {
        const searchValue = event.target.value.toLowerCase();

        setFilteredAccessories(
            accessories.filter(acc => acc.name.toLowerCase().includes(searchValue) || acc.id.includes(searchValue))
        )
    }

    // Function to calculate remaining space in the current drawer
    const calculateRemainingSpace = (drawerItems) => {
        let remainingSpace = currentToolbox.drawers[currentDrawer]; // Total space in a drawer

        drawerItems.forEach((item) => {
            remainingSpace -= item.size;
        });

        return remainingSpace;
    };

    const handleAccessoryClick = (accId) => {
        setDrawersData((prev) => {
          const newDrawerData = { ...prev };

          if (!newDrawerData[currentDrawer]) {
            newDrawerData[currentDrawer] = [];
          }

          const drawerItems = newDrawerData[currentDrawer];
          const accessoryIndex = drawerItems.findIndex((acc) => acc.id === accId);
          const accessory = accessories.find((acc) => acc.id === accId);
    
          if (accessoryIndex !== -1) {
            drawerItems.splice(accessoryIndex, 1); // Remove accessory if it already exists
          } else {
            const remainingSpace = calculateRemainingSpace(drawerItems); 

            if (accessory && accessory.size <= remainingSpace) {
                newDrawerData[currentDrawer].push(accessory); // Add accessory to the drawer
            }
          }

          if (drawerItems.length === 0) {
            delete newDrawerData[currentDrawer]; // Remove drawer if empty
          } else {
            newDrawerData[currentDrawer] = drawerItems;
          }

          return newDrawerData;
        });
    };
        
    const chooseCurrentAttachedAcc = (id) => {
        setSelectedAttachedAcc(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(accId => accId !== id)
            }
            return [...prevState, id];
        });
    };

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
                            handleClick={handleClick}
                            drawersData={drawersData}
                            setDrawersData={setDrawersData}
                            selectedAttachedAcc={selectedAttachedAcc}
                            handleAccessoryClick={handleAccessoryClick}
                            chooseCurrentAttachedAcc={chooseCurrentAttachedAcc}
                            currentDrawer={currentDrawer}
                            setCurrentDrawer={setCurrentDrawer}
                            calculateRemainingSpace={calculateRemainingSpace}
                            searchAcc={searchAcc}
                            loading={loading}
                            filteredAccessories={filteredAccessories}
                            attachingAccessories={attachingAccessories} />} />
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
                        handleClick,
                        drawersData,
                        setDrawersData,
                        selectedAttachedAcc,
                        handleAccessoryClick,
                        chooseCurrentAttachedAcc,
                        currentDrawer,
                        setCurrentDrawer,
                        calculateRemainingSpace,
                        searchAcc,
                        loading,
                        filteredAccessories,
                        attachingAccessories}) =>  {
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
            handleClick={handleClick}
            drawersData={drawersData}
            setDrawersData={setDrawersData}
            selectedAttachedAcc={selectedAttachedAcc}
            handleAccessoryClick={handleAccessoryClick}
            chooseCurrentAttachedAcc={chooseCurrentAttachedAcc}
            currentDrawer={currentDrawer}
            setCurrentDrawer={setCurrentDrawer}
            calculateRemainingSpace={calculateRemainingSpace}
            searchAcc={searchAcc}
            loading={loading}
            filteredAccessories={filteredAccessories}
            attachingAccessories={attachingAccessories} />
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


