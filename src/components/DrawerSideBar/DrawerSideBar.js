import { useState, useEffect } from 'react';
import { Tab, Nav } from 'react-bootstrap';

import './drawerSideBar.scss';

import xIcon from '../../data/images/icon/x-icon.svg';
import drawer3 from '../../data/images/drawer3.webp';
import drawer4 from '../../data/images/drawer4.webp';
import drawer5 from '../../data/images/drawer5.webp';
import resetImage from '../../data/images/icon/reset.svg';
import cart from '../../data/images/icon/cart.svg';

const DrawerSideBar = ({toggleDropdownMenuOpen, currentToolbox, totalPrice, handleClick}) => {
    const [isBoxSticky, setIsBoxSticky] = useState(false);
    const [drawerLeftStyle, setDrawerLeftStyle] = useState('150px');

    useEffect(() => {

        window.addEventListener('resize', () => { 
            if(window.innerWidth > 1600) {
                setDrawerLeftStyle(`${150 + (window.innerWidth - 1600) / 2}px`)
            }
        })

        window.addEventListener('scroll', () => {
            document.querySelector('.choose-accessories__drawers') && window.scrollY > 1060 ? setIsBoxSticky(true) : setIsBoxSticky(false)
        });

    }, []);

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
            <Nav.Item key={i}>
                <Nav.Link eventKey={i + 1} className='d-flex align-items-center'>
                    <div className="choose-accessories__nav-img nav-img d-flex">
                        {drawerCells}
                    </div>
                    <span className="button-number">{i + 1 < 10 ? `0${i + 1}` : i + 1}</span>
                    <span className="d-sm-none me-1">Drawer</span>
                </Nav.Link> 
            </Nav.Item>
        )
    });

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
                <Tab.Pane eventKey={i+1} key={i}>
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    {shelfImage}
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </Tab.Pane>
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
            <div 
                className={`choose-accessories__drawers ${isBoxSticky === true ? 'box-sticky' : ''}`}
                style={{left:drawerLeftStyle}}>
                <div className="choose-accessories__close-popup d-sm-none d-flex justify-content-center align-items-center">
                    <img src={xIcon} alt="close" />
                </div>
                <div className="choose-accessories__drawers-tabs">
                    <div className="choose-accessories__drawers-wrapper d-flex align-items-start justify-content-center justify-content-xl-start">
                        <Tab.Container defaultActiveKey={1}>
                            <Nav variant='pills' className='flex-column'>
                                <p className="d-none d-sm-block">Drawer</p>
                                {drawerButtons}
                                <div className="nav-list_top d-sm-none d-flex justify-content-center align-items-center"></div>
                                <div className="nav-list_bottom d-sm-none d-flex justify-content-center align-items-center"></div>
                                <div className="d-sm-none">
                                    <select id="mobileTabsSelect">{mobileListDrawers}</select>
                                </div>
                            </Nav>
                            <Tab.Content>
                                {drawersView()}
                            </Tab.Content>
                        </Tab.Container>
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
                        <button onClick={handleClick}>
                            <img src={cart} alt="Cart" /> Færdig med valg
                        </button>
                        </div>
                        <div className="choose-accessories__drawers-price-items text-end">
                        <div className="choose-accessories__drawers-price-quantity">
                            <span>0</span> items added
                        </div>
                        <div 
                            className="choose-accessories__drawers-price-show"
                            onClick={toggleDropdownMenuOpen}>
                            Show added items
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="choose-accessories__drawers-price-button2 align-items-center justify-content-center d-sm-none">
                <button onClick={handleClick}>
                    <img src={cart} alt="Cart" /> Færdig med valg
                </button>
            </div>
        </div>
    )
}

export default DrawerSideBar;