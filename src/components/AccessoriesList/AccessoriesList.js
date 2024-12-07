
import accImage from '../../data/images/accessory-1.png';
import accImageSmall from '../../data/images/accessory-1-small.png';
import plusBlack from '../../data/images/icon/plus-black.svg';
import plusImage from '../../data/images/icon/plus.svg';
import accSize1 from '../../data/images/icon/accessory-size-1.svg';
import d8909 from '../../data/images/d-8909.jpg';

const AccessoriesList = () => {

    return (
        <>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex="0">
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">
                        <div className="accessory-cards__item d-flex flex-column">
                            <div className="accessory-cards__item_first">
                                <div className="accessory-cards__img">
                                    <div className="accessory-cards__img-wrapper">
                                        <img src={d8909} alt="Accessory" className="d-none d-sm-inline" />
                                        <img src={accImageSmall} alt="Accessory" className="d-inline d-sm-none" />
                                    </div>
                                </div>
                                <div className="accessory-cards__content d-flex flex-column justify-content-between">
                                    <div className="accessory-cards__title">BATO Socket wrench set 1/2" 6 edge 10-36mm.</div>
                                    <div className="accessory-cards__main">
                                        <div className="accessory-cards__id-accessory d-flex justify-content-between">
                                            <p className="accessory-cards__id-subtitle">Item number:</p>
                                            <p className="accessory-cards__id">8901</p>
                                        </div>
                                        <div className="accessory-cards__size-accessory d-flex justify-content-between">
                                            <p className="accessory-cards__size-subtitle">Size <span>1</span>/3</p>
                                            <p className="accessory-cards__size">
                                                <img src={accSize1} className="accessory-cards__size-img" alt="size" data-size="1" />
                                            </p>
                                        </div>
                                        <div className="accessory-cards__footer d-flex justify-content-between align-items-center">
                                            <button type="button" className="d-flex align-items-center justify-content-center">
                                                <img src={plusBlack} alt="plus" className="accessory-cards__plus" />
                                                <img src={plusImage} alt="plus" className="accessory-cards__plus-hover" />
                                            </button>
                                            <p className="accessory-cards__price"><span>121</span>,00 EUR</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accessory-cards__item_second">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex="0">
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">

                    </div>
                </div>
                <div className="tab-pane" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex="0">
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">

                    </div>
                </div>
                <div className="tab-pane" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex="0">
                    <div className="choose-accessories__cards accessory-cards d-flex flex-wrap justify-content-left">

                    </div>
                </div>
            </div>
            <div className="choose-accessories__cards-attaching-title">
                <p>Attaching accessories</p><span></span>
            </div>
            <div className="choose-accessories__cards-attaching accessory-cards d-flex flex-wrap justify-content-between">
                <div className="accessory-cards__item d-flex flex-column">
                    <div className="accessory-cards__item_first">
                        <div className="accessory-cards__img">
                            <img src={accImage} alt="Accessorie" className="d-none d-sm-inline" />
                            <img src={accImageSmall} alt="Accessorie" className="d-inline d-sm-none" />
                        </div>
                        <div className="accessory-cards__content d-flex flex-column justify-content-between">
                            <div className="accessory-cards__title">Socket wrench set 1/2" 6 edge 10-36mm</div>
                            <div className="accessory-cards__main">
                                <div className="accessory-cards__id-accessory d-flex justify-content-between">
                                    <p className="accessory-cards__id-subtitle">Item number:</p>
                                    <p className="accessory-cards__id">8901</p>
                                </div>
                                <div className="accessory-cards__size-accessory d-flex justify-content-between">
                                    <p className="accessory-cards__size-subtitle">Size <span>2</span>/3</p>
                                    <p className="accessory-cards__size">
                                        <img src={accSize1} alt="size" />
                                    </p>
                                </div>
                                <div className="accessory-cards__footer d-flex justify-content-between align-items-center">
                                    <button type="button" className="d-flex align-items-center justify-content-center">
                                        <img src={plusBlack} alt="plus"className="accessory-cards__plus" />
                                        <img src={plusImage} alt="plus" className="accessory-cards__plus-hover" />
                                    </button>
                                    <p className="accessory-cards__price"><span>153,00</span> EUR</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="accessory-cards__item_second">
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccessoriesList;