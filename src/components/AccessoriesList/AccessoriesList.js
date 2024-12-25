// import { useState, useEffect } from 'react';
import { Tab } from 'react-bootstrap';

import accImage from '../../data/images/accessory-1.png';
import accImageSmall from '../../data/images/accessory-1-small.png';
import plusBlack from '../../data/images/icon/plus-black.svg';
import plusImage from '../../data/images/icon/plus.svg';
import accSize1 from '../../data/images/icon/accessory-size-1.svg';
import accSize2 from '../../data/images/icon/accessory-size-2.svg';
import accSize3 from '../../data/images/icon/accessory-size-3.svg';
import d8909 from '../../data/images/d-8909.jpg';
import d8940 from '../../data/images/d-8940.jpg';
import d8919 from '../../data/images/d-8919.jpg';
import { useState } from 'react';

const AccessoriesList = ({
                            currentToolbox, 
                            accessories, 
                            attachingAccessories, 
                            selectedAcc, 
                            chooseCurrentAcc,
                            currentDrawer}) => {

    const [drawersData, setDrawersData] = useState({});

    const currentDrawerLength = currentToolbox.drawers[currentDrawer];

    // Function to calculate remaining space in the current drawer
    const calculateRemainingSpace = (drawerItems) => {
        let remainingSpace = currentDrawerLength; // Total space in a drawer

        drawerItems.forEach((item) => {
            remainingSpace -= item.size;
        });

        return remainingSpace;
    };

    // const canAddAccessory = (drawerItems, newAccessory) => {
    //     const remainingSpace = calculateRemainingSpace(drawerItems);
    
    //     if (newAccessory.size > remainingSpace) {
    //         if (newAccessory.size === 2 && remainingSpace === 2) {
    //             // Полка позволяет положить только два аксессуара size = 1, но не аксессуар size = 2
    //             const sizeOneItems = drawerItems.filter((item) => item.size === 1).length;
    //             return sizeOneItems < 2;
    //         }
    //         return false; // Недостаточно места для аксессуара
    //     }
    
    //     return true; // Достаточно места
    // };

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
            // if (accessory && accessory.size <= remainingSpace) {
            //     if (currentDrawerLength === 4) {
            //         if (accessory.size === 2 && remainingSpace > 2) {
            //             newDrawerData[currentDrawer].push(accessory);
            //         } else if (accessory.size === 1 && remainingSpace >= 1) {
            //             newDrawerData[currentDrawer].push(accessory);
            //         } else if (accessory.size === 3) {
            //             newDrawerData[currentDrawer].push(accessory);
            //         }
            //     } else {
            //         newDrawerData[currentDrawer].push(accessory); // Add accessory to the drawer
            //     }
            // }
          }

          if (drawerItems.length === 0) {
            delete newDrawerData[currentDrawer]; // Remove drawer if empty
          } else {
            newDrawerData[currentDrawer] = drawerItems;
          }

          return newDrawerData;
        });

        chooseCurrentAcc(accId); // Call the provided function to handle selection logic

    };
        
    const filteredAccessories = attachingAccessories.filter(acc => 
        currentToolbox.accessories.includes(Number(acc.id))
    );

    const currentSizeAcc = (size = null) => {
        const currentDrawerItems = drawersData[currentDrawer] || [];
        const remainingSpace = calculateRemainingSpace(currentDrawerItems);
        const isCurrentDrawerHasSize2 = currentDrawerItems.some(item => item.size === 2);
        console.log(isCurrentDrawerHasSize2);
        

        return accessories
            .filter(acc => size === null || acc.size === size)
            .map((acc, index) => {
                let accImage = null;
                let accSize = null;

                if (acc.size === 1) {
                    accImage = d8909;
                    accSize = accSize1;
                } else if (acc.size === 2) {
                    accImage = d8940;
                    accSize = accSize2;
                } else {
                    accImage = d8919;
                    accSize = accSize3;
                }

                const isSelected = Object.values(drawersData).some(
                    drawerAcc => drawerAcc.some(selectedAcc => selectedAcc.id === acc.id)
                );
                const selectedDrawer = Object.keys(drawersData).find(key =>
                    drawersData[key]?.some(selectedAcc => selectedAcc.id === acc.id)
                );
                const isNotActive = (!isSelected && acc.size > remainingSpace) 
                                    || (selectedDrawer !== undefined && selectedDrawer !== String(currentDrawer))
                                    || (currentDrawerLength === 4 && remainingSpace === 2 && !isSelected && acc.size !== 1 && isCurrentDrawerHasSize2);

                return (
                <div 
                    key={index} 
                    data-drawer={selectedDrawer}
                    className={`accessory-cards__item d-flex flex-column ${isSelected 
                                ? 'accessory-cards__item_choose'
                                : ''} ${isNotActive ? 'not-active' : ''}`}
                    onClick={() => !isNotActive && handleAccessoryClick(acc.id)}>
                    <div className="accessory-cards__item_first">
                        <div className="accessory-cards__img">
                            <div className="accessory-cards__img-wrapper">
                                <img src={accImage} alt="Accessory" className="d-none d-sm-inline" />
                                <img src={accImageSmall} alt="Accessory" className="d-inline d-sm-none" />
                            </div>
                        </div>
                        <div className="accessory-cards__content d-flex flex-column justify-content-between">
                            <div className="accessory-cards__title">{acc.name}</div>
                            <div className="accessory-cards__main">
                                <div className="accessory-cards__id-accessory d-flex justify-content-between">
                                    <p className="accessory-cards__id-subtitle">Item number:</p>
                                    <p className="accessory-cards__id">{acc.id}</p>
                                </div>
                                <div className="accessory-cards__size-accessory d-flex justify-content-between">
                                    <p className="accessory-cards__size-subtitle">Size <span>{acc.size}</span>/3</p>
                                    <p className="accessory-cards__size">
                                        <img src={accSize} className="accessory-cards__size-img" alt="size" data-size="1" />
                                    </p>
                                </div>
                                <div className="accessory-cards__footer d-flex justify-content-between align-items-center">
                                    <button 
                                        type="button" 
                                        className="d-flex align-items-center justify-content-center"
                                        onClick={() => chooseCurrentAcc(acc.id)}>
                                        <img src={plusBlack} alt="plus" className="accessory-cards__plus" />
                                        <img src={plusImage} alt="plus" className="accessory-cards__plus-hover" />
                                    </button>
                                    <p className="accessory-cards__price"><span>{acc.price}</span>,00 EUR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accessory-cards__item_second">
                    </div>
                </div>
        )})
    };

    return (
        <>
            <Tab.Content>
                <Tab.Pane eventKey={'all'}>
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                        {
                            currentSizeAcc()
                        }
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey={1}>
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                    {currentSizeAcc(1)}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                    {currentSizeAcc(2)}
                    </div>
                </Tab.Pane>
                <Tab.Pane eventKey={3}>
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                    {currentSizeAcc(3)}
                    </div>
                </Tab.Pane>
            </Tab.Content>
            <div className="choose-accessories__cards-attaching-title">
                <p>Attaching accessories</p><span></span>
            </div>
            <div className="choose-accessories__cards-attaching accessory-cards d-flex flex-wrap justify-content-between">
                {
                    filteredAccessories.length > 0 ? (
                        filteredAccessories.map((acc,id) => {
                            const isSelected = selectedAcc.includes(acc.id);

                            return (
                            <div 
                                key={id} 
                                className={`accessory-cards__item d-flex flex-column ${isSelected ? 'accessory-cards__item_choose' : ''}`} 
                                onClick={() => chooseCurrentAcc(acc.id)}>
                                <div className="accessory-cards__item_first">
                                    <div className="accessory-cards__img">
                                        <div className="accessory-cards__img-wrapper">
                                        <img src={accImage} alt="Accessory" className="d-none d-sm-inline" />
                                        <img src={accImageSmall} alt="Accessory" className="d-inline d-sm-none" />
                                        </div>
                                    </div>
                                    <div className="accessory-cards__content d-flex flex-column justify-content-between">
                                        <div className="accessory-cards__title">{acc.name}</div>
                                        <div className="accessory-cards__main">
                                            <div className="accessory-cards__id-accessory d-flex justify-content-between">
                                                <p className="accessory-cards__id-subtitle">Item number:</p>
                                                <p className="accessory-cards__id">{acc.id}</p>
                                            </div>
                                            <div className="accessory-cards__size-accessory d-flex justify-content-between">
                                                <p className="accessory-cards__size-subtitle">Size <span></span></p><p className="accessory-cards__size"><span className="accessory-cards__size-img" data-size={acc.size}></span></p>
                                            </div>
                                            <div className="accessory-cards__footer d-flex justify-content-between align-items-center">
                                                    <button 
                                                        type="button" 
                                                        className="d-flex align-items-center justify-content-center"
                                                        onClick={() => chooseCurrentAcc(acc.id)}>
                                                        <img src={plusBlack} alt="plus" className="accessory-cards__plus" />
                                                        <img src={plusImage} alt="plus" className="accessory-cards__plus-hover" /></button>
                                                    <p className="accessory-cards__price"><span>{acc.price}</span>,00 EUR</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="accessory-cards__item_second">
                                </div>
                            </div>
                        )})
                    ) : (
                        <p>No attaching accessories available</p>
                    )
                }
            </div>
        </>
    )
}

export default AccessoriesList;

