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

    const calculateTopSpaceAcc = (index, size, array) => {
        const { pointTop, stepPoint } = layoutConfig;
        let top = pointTop;

        for (let i = 0; i < index; i++) {
            top += array[i].size * stepPoint; 
        }

        return top;
    };

    return <>
                {Object.entries(drawersData).map(([key, array]) => {
                    if (+key !== +currentDrawer) return null;
                        
                        return array.map((item, index) => {
                            console.log(array.length);
                            
                            const top = calculateTopSpaceAcc(index, item.size, array);
                            
                            return (
                            <div 
                                className={`drawers-content__image-size${item.size}`} 
                                style={{top:`${top}px`}} 
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

