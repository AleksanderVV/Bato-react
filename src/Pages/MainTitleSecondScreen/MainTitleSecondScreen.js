import './mainTitleSecondScreen.scss';

const MainTitleSecondScreen = () => {
    return (
        <section className="total-main total-accessories">
            <div className="container d-none d-sm-block">
            <div className="row">
                <div className="d-block d-md-none">
                <div className="total-main__top-image text-center">
                    <img src="img/icon/flag.svg" alt="Flag" />
                </div>
                </div>
                <div className="col-12 col-lg-6 col-md-6 text-center text-md-start">
                <div className="total-main__content">
                    <h1>BATO Tools cabinet</h1>
                    <p className="total-main__title">
                    4 drawers mini without swheels.Blue.
                    </p>
                    <p>
                    You choose the accessories by clicking on it. Do you want to opt out, simply click on it again. When you are finished assembling, click on the blue "Finished choice" button on the right side.
                    </p>
                    <a href="#choose-accessories" className="total-main__link d-none d-md-flex"><span><img src="img/icon/plus.svg" alt="Cart" />Add accessories</span></a>
                </div>
                </div>
                <div className="d-none d-md-block col-md-6 col-lg-6">
                <div className="total-main__image">
                    <img src="img/box-shadow.png" alt="Box" />
                </div>
                </div>
                <div className="d-block d-md-none">
                <div className="total-main__scroll-image text-center">
                    <img src="img/icon/mouse.svg" alt="Box" />
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default MainTitleSecondScreen;