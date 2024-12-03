import AccessoriesFilters from '../../components/AccessoriesFilters/AccessoriesFilters';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import DrawerSideBar from '../../components/DrawerSideBar/DrawerSideBar';

import './mainContentSecondScreen.scss';

const MainContentSecondScreen = () => {
    return (
        <>
            <AccessoriesFilters />
            <AccessoriesList />
            <DrawerSideBar />
            <section id="choose-accessories" class="choose-accessories">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-xxl-4">
                            <div class="choose-accessories__drawers-title">
                                Drawer top view
                            </div>
                            <div class="choose-accessories__drawers">
                                <div class="choose-accessories__close-popup d-sm-none d-flex justify-content-center align-items-center">
                                <img src="img/icon/x-icon.svg" alt="close" class="" />
                                </div>
                                <div class="choose-accessories__drawers-tabs">
                                <div class="choose-accessories__drawers-wrapper d-flex align-items-start justify-content-center justify-content-xl-start">
                                    <div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                                    </div>
                                    <div class="tab-content" id="v-pills-tabContent">
                                    </div>
                                </div>
                                </div>
                                <div class="choose-accessories__drawers-price-total">
                                <div class="choose-accessories__drawers-price-title d-flex justify-content-between">
                                    <p>
                                    Total price
                                    </p>
                                    <p class="choose-accessories__drawers-price-summ">
                                    <span></span>,00 EUR
                                    </p>
                                </div>
                                <div class="choose-accessories__drawers-price-info d-flex justify-content-between">
                                    <div class="choose-accessories__drawers-price-button align-items-center justify-content-center d-none d-sm-flex">
                                    <a><span><img src="img/icon/cart.svg" alt="" /> Færdig med valg</span></a>
                                    </div>
                                    <div class="choose-accessories__drawers-price-items text-end">
                                    <div class="choose-accessories__drawers-price-quantity">
                                        <span>0</span> items added
                                    </div>
                                    <div class="choose-accessories__drawers-price-show">
                                        Show added items
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="choose-accessories__drawers-price-button2 align-items-center justify-content-center d-sm-none">
                                <a><span><img src="img/icon/cart.svg" alt="" /> Færdig med valg</span></a>
                            </div>
                        </div>
                        <div class="col-xl-6 col-xxl-8">
                            <div class="choose-accessories__select">
                                <div class="choose-accessories__select-title text-end">
                                Accessory size
                                </div>
                                <div class="choose-accessories__top d-flex align-items-end">
                                <div class="choose-accessories__search flex-fill">
                                    <input type="search" name="search" id="search-accessories" placeholder="Search accessory by item number or name" />
                                </div>
                                <p class="choose-accessories__title-size d-sm-none">Size</p>
                                <ul class="nav nav-pills" id="pills-tab" role="tablist">
                                    <li class="nav-item nav-item_all" role="presentation">
                                    <button class="nav-link nav-link__all active d-flex align-items-center" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">
                                        All
                                    </button>
                                    </li>
                                    <li class="nav-item nav-item_first" role="presentation">
                                    <button class="nav-link nav-link__first d-flex align-items-center" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                        1
                                        <div class="choose-accessories__nav-img nav-img nav-img-1 d-flex">
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        </div>
                                    </button>
                                    </li>
                                    <li class="nav-item nav-item_second" role="presentation">
                                    <button class="nav-link nav-link__second d-flex align-items-center" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                        2
                                        <div class="choose-accessories__nav-img nav-img nav-img-2 d-flex">
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        </div>
                                    </button>
                                    </li>
                                    <li class="nav-item nav-item_third" role="presentation">
                                    <button class="nav-link nav-link__third d-flex align-items-center" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                                        3
                                        <div class="choose-accessories__nav-img nav-img nav-img-3 d-flex">
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        <div class="nav-img__item"></div>
                                        </div>
                                    </button>
                                    </li>
                                </ul>
                                </div>
                                <div class="tab-content" id="pills-tabContent">
                                    <div class="tab-pane show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabindex="0">
                                        <div class="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                                        <div class="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
                                        <div class="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                                        </div>
                                    </div>
                                    <div class="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">
                                        <div class="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                                            <div class="accessory-cards__item d-flex flex-column">
                                            </div>
                                            <div class="accessory-cards__item d-flex flex-column">
                                                <div class="accessory-cards__item_first">
                                                    <div class="accessory-cards__img">
                                                        <img src="img/accessory-1.png" alt="Accessorie" class="d-none d-sm-inline" />
                                                        <img src="img/accessory-1-small.png" alt="Accessorie" class="d-inline d-sm-none" />
                                                    </div>
                                                    <div class="accessory-cards__content d-flex flex-column justify-content-between">
                                                        <div class="accessory-cards__title">Socket wrench set 1/2" 6 edge 10-36mm</div>
                                                        <div class="accessory-cards__main">
                                                        <div class="accessory-cards__id-accessory d-flex justify-content-between">
                                                            <p class="accessory-cards__id-subtitle">Item number:</p>
                                                            <p class="accessory-cards__id">8901</p>
                                                        </div>
                                                        <div class="accessory-cards__size-accessory d-flex justify-content-between">
                                                            <p class="accessory-cards__size-subtitle">Size <span>2</span>/3</p>
                                                            <p class="accessory-cards__size"><img src="img/icon/accessory-size-1.svg" alt="size" /></p>
                                                        </div>
                                                        <div class="accessory-cards__footer d-flex justify-content-between align-items-center">
                                                            <button type="button" class="d-flex align-items-center justify-content-center">
                                                                <img src="img/icon/plus-black.svg" alt="plus"class="accessory-cards__plus" />
                                                                <img src="img/icon/plus.svg" alt="plus" class="accessory-cards__plus-hover" />
                                                            </button>
                                                            <p class="accessory-cards__price"><span>153,00</span> EUR</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                    </div>
                                                    <div class="accessory-cards__item_second">
                                                    </div>
                                                </div>
                                                <div class="accessory-cards__item d-flex flex-column">
                                                    <div class="accessory-cards__item_first">
                                                    <div class="accessory-cards__img">
                                                        <img src="img/accessory-1.png" alt="Accessorie" class="d-none d-sm-inline" />
                                                        <img src="img/accessory-1-small.png" alt="Accessorie" class="d-inline d-sm-none" />
                                                    </div>
                                                    <div class="accessory-cards__content d-flex flex-column justify-content-between">
                                                        <div class="accessory-cards__title">Socket wrench set 1/2" 6 edge 10-36mm</div>
                                                        <div class="accessory-cards__main">
                                                        <div class="accessory-cards__id-accessory d-flex justify-content-between">
                                                            <p class="accessory-cards__id-subtitle">Item number:</p>
                                                            <p class="accessory-cards__id">8901</p>
                                                        </div>
                                                        <div class="accessory-cards__size-accessory d-flex justify-content-between">
                                                            <p class="accessory-cards__size-subtitle">Size <span>2</span>/3</p>
                                                            <p class="accessory-cards__size"><img src="img/icon/accessory-size-1.svg" alt="size" /></p>
                                                        </div>
                                                        <div class="accessory-cards__footer d-flex justify-content-between align-items-center">
                                                            <button type="button" class="d-flex align-items-center justify-content-center">
                                                                <img src="img/icon/plus-black.svg" alt="plus"class="accessory-cards__plus" />
                                                                <img src="img/icon/plus.svg" alt="plus" class="accessory-cards__plus-hover" />
                                                            </button>
                                                            <p class="accessory-cards__price"><span>153,00</span> EUR</p>
                                                        </div>
                                                        </div>
                                                    </div>`
                                                    </div>
                                                    <div class="accessory-cards__item_second">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="choose-accessories__cards-attaching-title">
                                        <p>Attaching accessories</p><span></span>
                                    </div>
                                    <div class="choose-accessories__cards-attaching accessory-cards d-flex flex-wrap justify-content-between">
                                    <div class="accessory-cards__item d-flex flex-column">
                                        <div class="accessory-cards__item_first">
                                            <div class="accessory-cards__img">
                                                <img src="img/accessory-1.png" alt="Accessorie" class="d-none d-sm-inline" />
                                                <img src="img/accessory-1-small.png" alt="Accessorie" class="d-inline d-sm-none" />
                                            </div>
                                            <div class="accessory-cards__content d-flex flex-column justify-content-between">
                                                <div class="accessory-cards__title">Socket wrench set 1/2" 6 edge 10-36mm</div>
                                                <div class="accessory-cards__main">
                                                    <div class="accessory-cards__id-accessory d-flex justify-content-between">
                                                        <p class="accessory-cards__id-subtitle">Item number:</p>
                                                        <p class="accessory-cards__id">8901</p>
                                                    </div>
                                                    <div class="accessory-cards__size-accessory d-flex justify-content-between">
                                                        <p class="accessory-cards__size-subtitle">Size <span>2</span>/3</p>
                                                        <p class="accessory-cards__size"><img src="img/icon/accessory-size-1.svg" alt="size" /></p>
                                                    </div>
                                                    <div class="accessory-cards__footer d-flex justify-content-between align-items-center">
                                                        <button type="button" class="d-flex align-items-center justify-content-center">
                                                            <img src="img/icon/plus-black.svg" alt="plus"class="accessory-cards__plus" />
                                                            <img src="img/icon/plus.svg" alt="plus" class="accessory-cards__plus-hover" />
                                                        </button>
                                                        <p class="accessory-cards__price"><span>153,00</span> EUR</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="accessory-cards__item_second">
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="choose-accessories__filter-top d-sm-none">
                        <img src="img/icon/filter-mobile.svg" alt="icon" />
                        <span>1</span>
                    </a>
            </section>
        </>
    )
}

export default MainContentSecondScreen;