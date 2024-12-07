import './drawerSideBar.scss';

import xIcon from '../../data/images/icon/x-icon.svg';
import drawer3 from '../../data/images/drawer3.webp';
import resetImage from '../../data/images/icon/reset.svg';

const DrawerSideBar = ({currentToolbox, totalPrice}) => {

    const drawersNavigation = () => {
        return (
            <>
                <p className="d-none d-sm-block">Drawer</p>
                <button className="nav-link d-flex align-items-center active" id="v-pills-1-tab" data-bs-toggle="pill" data-bs-target="#v-pills-1" type="button" role="tab" aria-controls="v-pills-1" aria-selected="true">
                    <div className="choose-accessories__nav-img nav-img d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                    </div>
                    <span className="button-number">01</span>
                    <span className="d-sm-none me-1">Drawer</span>
                </button>
                <button className="nav-link d-flex align-items-center" id="v-pills-2-tab" data-bs-toggle="pill" data-bs-target="#v-pills-2" type="button" role="tab" aria-controls="v-pills-2" aria-selected="false" tabIndex="-1">
                    <div className="choose-accessories__nav-img nav-img d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                    </div>
                    <span className="button-number">02</span>
                    <span className="d-sm-none me-1">Drawer</span>
                </button>
                <button className="nav-link d-flex align-items-center" id="v-pills-3-tab" data-bs-toggle="pill" data-bs-target="#v-pills-3" type="button" role="tab" aria-controls="v-pills-3" aria-selected="false" tabIndex="-1">
                    <div className="choose-accessories__nav-img nav-img d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                    </div>
                    <span className="button-number">03</span>
                    <span className="d-sm-none me-1">Drawer</span>
                </button>
                <button className="nav-link d-flex align-items-center" id="v-pills-4-tab" data-bs-toggle="pill" data-bs-target="#v-pills-4" type="button" role="tab" aria-controls="v-pills-4" aria-selected="false" tabIndex="-1">
                    <div className="choose-accessories__nav-img nav-img d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                    </div>
                    <span className="button-number">04</span>
                    <span className="d-sm-none me-1">Drawer</span>
                </button>
                <div className="nav-list_top d-sm-none d-flex justify-content-center align-items-center"></div>
                <div className="nav-list_bottom d-sm-none d-flex justify-content-center align-items-center"></div>
                <div className="d-sm-none">
                    <select id="mobileTabsSelect"><option value="1">Drawer 1</option><option value="2">Drawer 2</option><option value="3">Drawer 3</option><option value="4">Drawer 4</option></select>
                </div>
            </>
        )
    }

    const drawersView = () => {
        return (
            <>
                <div className="tab-pane active show" id="v-pills-1" role="tabpanel" aria-labelledby="v-pills-1-tab" tabIndex="0">
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    <img src={drawer3} alt="Shelf" />
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </div>
                <div className="tab-pane" id="v-pills-2" role="tabpanel" aria-labelledby="v-pills-2-tab" tabIndex="0">
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    <img src={drawer3} alt="Shelf" />
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </div>
                <div className="tab-pane" id="v-pills-3" role="tabpanel" aria-labelledby="v-pills-3-tab" tabIndex="0">
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    <img src={drawer3} alt="Shelf" />
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </div>
                <div className="tab-pane" id="v-pills-4" role="tabpanel" aria-labelledby="v-pills-4-tab" tabIndex="0">
                    <div className="choose-accessories__drawers-content drawers-content"></div>
                    <img src={drawer3} alt="Shelf" />
                    <p className="d-flex align-items-center not-active"><img src={resetImage} alt="" />Reset</p>
                </div>
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
                <a><span><img src="img/icon/cart.svg" alt="" /> Færdig med valg</span></a>
            </div>
        </div>
    )
}

export default DrawerSideBar;