import { useEffect } from 'react';

import './drawerSideBar.scss';

import xIcon from '../../data/images/icon/x-icon.svg';
import drawer3 from '../../data/images/drawer3.webp';
import drawer4 from '../../data/images/drawer4.webp';
import drawer5 from '../../data/images/drawer5.webp';
import resetImage from '../../data/images/icon/reset.svg';
import cart from '../../data/images/icon/cart.svg';

import { Tab, Tabs } from 'react-bootstrap';
const DrawerSideBar = ({currentToolbox, totalPrice}) => {
    if (!currentToolbox) {
        return <p>No toolbox selected</p>;
    }

    const drawersCurrentToolbox = currentToolbox.drawers.length;

    const mobileListDrawers = Array.from({ length: drawersCurrentToolbox }, (_, i) => (
        <option key={i} value={i + 1}>
            Drawer {i + 1}
        </option>
    ));

    const drawerButtons = Array.from({length: drawersCurrentToolbox}, (_,i) => {
        const drawerDepth = currentToolbox.drawers[i];
        const drawerCells = Array.from({length: drawerDepth}, (_, i) => (<div key={i} className="nav-img__item"></div>))

        return (
            <button 
                key={i}
                className={`nav-link d-flex align-items-center ${i===0 ? 'active' : ''}`}
                id={`v-pills-${i + 1}-tab`}
                data-bs-toggle="pill" 
                data-bs-target={`#v-pills-${i + 1}`} 
                type="button" 
                role="tab" 
                aria-controls={`v-pills-${i + 1}`}
                aria-selected="false">
                <div className="choose-accessories__nav-img nav-img d-flex">
                    {drawerCells}
                </div>
                <span className="button-number">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                <span className="d-sm-none me-1">Drawer</span>
            </button>
        )
    });

    const drawersNavigation = () => {
        return (
            <>
                <p className="d-none d-sm-block">Drawer</p>
                {drawerButtons}
                <div className="nav-list_top d-sm-none d-flex justify-content-center align-items-center"></div>
                <div className="nav-list_bottom d-sm-none d-flex justify-content-center align-items-center"></div>
                <div className="d-sm-none">
                    <select id="mobileTabsSelect">{mobileListDrawers}</select>
                </div>
            </>
        )
    }

    const drawersView = () => {
        const drawerItems = Array.from({length: drawersCurrentToolbox}, (_, i) => {
            const drawerDepth = currentToolbox.drawers[i];
            
            let shelfImage = '';
            if (drawerDepth === 3) {
                shelfImage = <img src={drawer3} alt="Shelf" />;
              } else if(drawerDepth === 4) {
                shelfImage = <img src={drawer4} alt="Shelf" />;
              } else {
                shelfImage = <img src={drawer5} alt="Shelf" />;
              }
            return (
                <div 
                    key={i} 
                    className="tab-pane active show" 
                    id={`v-pills-${i + 1}`} 
                    role="tabpanel" 
                    aria-labelledby={`v-pills-${i + 1}-tab`}>
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    {shelfImage}
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </div>
            )
        })
        return (
            <>
                {drawerItems}
            </>
        )
    }

    return (
        <div className="col-xl-6 col-xxl-4">
            <div className="choose-accessories__drawers-title">
                Drawer top view
            </div>
            <div className="choose-accessories__drawers">
                <div className="choose-accessories__close-popup d-sm-none d-flex justify-content-center align-items-center">
                    <img src={xIcon} alt="close" />
                </div>
                <div className="choose-accessories__drawers-tabs">
                    <div className="choose-accessories__drawers-wrapper d-flex align-items-start justify-content-center justify-content-xl-start">
                        <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                            {drawersNavigation()}
                        </div>
                        <div className="tab-content" id="v-pills-tabContent">
                            {drawersView()}
                        </div>
                    </div>
                </div>
                <div className="choose-accessories__drawers-price-total">
                    <div className="choose-accessories__drawers-price-title d-flex justify-content-between">
                        <p>
                        Total price
                        </p>
                        <p className="choose-accessories__drawers-price-summ">
                        <span>{totalPrice}</span>,00 EUR
                        </p>
                    </div>
                    <div className="choose-accessories__drawers-price-info d-flex justify-content-between">
                        <div className="choose-accessories__drawers-price-button align-items-center justify-content-center d-none d-sm-flex">
                        <a><span><img src="img/icon/cart.svg" alt="" /> Færdig med valg</span></a>
                        </div>
                        <div className="choose-accessories__drawers-price-items text-end">
                        <div className="choose-accessories__drawers-price-quantity">
                            <span>0</span> items added
                        </div>
                        <div className="choose-accessories__drawers-price-show">
                            Show added items
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-accessories__drawers-price-button2 align-items-center justify-content-center d-sm-none">
                <a><span><img src={cart} alt="Cart" /> Færdig med valg</span></a>
            </div>
        </div>
    )
}

export default DrawerSideBar;