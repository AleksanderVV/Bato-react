import useBodyID from "../../hooks/useBodyID";

import MainTitleThirdScreen from "./MainTitleThirdScreen/MainTitleThirdScreen";
import MainContentThirdScreen from "./MainContentThirdScreen/MainContentThirdScreen";

const ThirdScreen = ({
        currentToolbox, 
        filteredAccessories, 
        attachingAccessories, 
        fullPrice}) =>  {
    useBodyID('total');
    console.log(currentToolbox);
    return (
    <>        
        <MainTitleThirdScreen />
        <MainContentThirdScreen 
            currentToolbox={currentToolbox}
            filteredAccessories={filteredAccessories}
            attachingAccessories={attachingAccessories}
            fullPrice={fullPrice} />
    </>
)};

export default ThirdScreen;