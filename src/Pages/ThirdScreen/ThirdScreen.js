import useBodyID from "../../hooks/useBodyID";

import MainTitleThirdScreen from "./MainTitleThirdScreen/MainTitleThirdScreen";
import MainContentThirdScreen from "./MainContentThirdScreen/MainContentThirdScreen";

const ThirdScreen = ({currentToolbox}) =>  {
    useBodyID('total');
    console.log(currentToolbox);
    return (
    <>        
        <MainTitleThirdScreen />
        <MainContentThirdScreen />
    </>
)};

export default ThirdScreen;