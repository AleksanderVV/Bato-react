import './drawerSideBar.scss';

const DrawerSideBar = ({currentToolbox, totalPrice}) => {

    return (
        <div className="col-xl-6 col-xxl-4">
            <div className="choose-accessories__drawers-title">
                Drawer top view
            </div>
            <div className="choose-accessories__drawers">
                <div className="choose-accessories__close-popup d-sm-none d-flex justify-content-center align-items-center">
                <img src="img/icon/x-icon.svg" alt="close" />
                </div>
                <div className="choose-accessories__drawers-tabs">
                <div className="choose-accessories__drawers-wrapper d-flex align-items-start justify-content-center justify-content-xl-start">
                    <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    </div>
                    <div className="tab-content" id="v-pills-tabContent">
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