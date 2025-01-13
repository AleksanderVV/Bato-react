import useBodyID from "../../hooks/useBodyID";

import MainTitleSecondScreen from "./MainTitleSecondScreen/MainTitleSecondScreen";
import MainContentSecondScreen from "./MainContentSecondScreen/MainContentSecondScreen";

const SecondScreen = ({
    isMobile,
    isSticky, 
    toggleDropdownMenuOpen,
    currentToolbox, 
    fullPrice,
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
                        fullPrice={fullPrice}
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

export default SecondScreen;