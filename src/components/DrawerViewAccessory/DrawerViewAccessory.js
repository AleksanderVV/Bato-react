import { useState, useEffect } from 'react';

import accSize1Image from '../../data/images/accessory-size-1.jpg';
import accSize2Image from '../../data/images/accessory-size-2.jpg';
import accSize3Image from '../../data/images/accessory-size-3.jpg';

const DrawerViewAccessory = ({drawersData, deleteAcc, currentToolbox, currentDrawer}) => {
    const [layoutConfig, setLayoutConfig] = useState({
        pointTop: 47,
        stepPoint: 134,
        stepPointMax: 186,
    });

    const getAccessoryImage = (size) => {
        const images = [accSize1Image, accSize2Image, accSize3Image];

        return images[size-1];
    }

    // Update layout configuration on window resize
    useEffect(() => {
        const updateLayoutConfig = () => {
            if (window.innerWidth <= 550) {
                setLayoutConfig({ pointTop: 37, stepPoint: 105, stepPointMax: 146 });
            } else {
                setLayoutConfig({ pointTop: 47, stepPoint: 134, stepPointMax: 186 });
            }
        };

        updateLayoutConfig(); // Initialize on mount
        window.addEventListener("resize", updateLayoutConfig);
        return () => window.removeEventListener("resize", updateLayoutConfig);
    }, []);

    const calculateTopSpaceAcc = (index, size, arrayLength) => {
        const { pointTop, stepPoint } = layoutConfig;
        const multiplier = size;
        const offset = index * stepPoint;
        return pointTop + multiplier * offset;
    };



    // const calculateTopSpaceAcc = (item, array) => {

    //     if (window.innerWidth > 550) {
    //         setPointTop(37);
    //         setStepPoint(105);
    //         setStepPointMax(146);
    //     }
        
    //     if((currentToolbox.drawers[currentDrawer] === 3 || currentToolbox.drawers[currentDrawer] === 5) && array.length > 1) {
    //         item.size === 1 ? setPointTop(prev => prev + stepPoint) :
    //         item.size === 2 ? setPointTop(prev => prev + stepPoint*2) : setPointTop(prev => prev + stepPoint*3);
    //     } 


    //     return pointTop;
    // }

    return <>
                {Object.entries(drawersData).map(([key, array]) => {
                    if (+key !== +currentDrawer) return null;
                        
                        return array.map((item, index) => {
                            
                            return (
                            <div 
                                className={`drawers-content__image-size${item.size}`} 
                                style={{top:`${calculateTopSpaceAcc(index, item.size, array.length)}px`}} 
                                data-id={item.id} 
                                key={item.id}
                            >
                                <img src={getAccessoryImage(item.size)} alt="Accessory" />
                                <div 
                                    className="drawers-content__delete" 
                                    data-id={item.id}
                                    data-drawer={key}
                                    onClick={deleteAcc}
                                >
                                </div>
                            </div>
                        )});
                    }
                )}
            </>

}

export default DrawerViewAccessory;

