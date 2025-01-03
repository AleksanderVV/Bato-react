import './mainContentThirdScreen.scss';

const MainContentThirdScreen = () => {
    return (
        <section class="total-result" id="total-result">
            <div class="container">
            <div class="row">
                <div class="col-12 order-2 col-md-6 order-md-1 d-flex align-items-center">
                <div class="total-result__form-box">
                    <h3>Get a offer for the selected toolbox and accessories</h3>
                    <form action="#">
                        <p>
                            <input type="text" name="name" id="name" placeholder="Name and Surname" />
                        </p>
                        <p>
                            <input type="text" name="company" id="company" placeholder="Company" />
                        </p>
                        <p>
                            <input type="text" name="zip" id="zip" placeholder="Zip Code" />
                        </p>
                        <p>
                            <input type="text" name="email" id="email" placeholder="E-mail address" />
                        </p>
                        <p>
                            <input type="text" name="phone" id="phone" placeholder="Telephone" />
                        </p>
                        <p>
                            <textarea name="message" id="message" placeholder="Message"></textarea>
                        </p>
                        <p class="total-result__submit">
                            <button type="submit"><span>Ja tak, send mig et tilbud</span></button>
                        </p>
                    </form>
                </div>
                <div class="total-result__after-send">
                    <img src="img/icon/mail-send.svg" alt="Email" class="d-none d-md-inline" />
                    <img src="img/icon/mail-send-black.svg" alt="Email" class="d-inline d-md-none" />
                    <p class="total-result__title-send">Thank you for your interest</p>
                    <p class="total-result__text-send">
                    We will process your request as quickly as we can, and you will soon receive an offer from us by e-mail of the composition that you have chosen and can see above.
                    </p>
                </div>
                </div>
                <div class="col-12 order-1 col-md-6 order-md-2">
                <div class="total-result__price-box total-items-box">
                    <div class="total-items-box__header">
                    <p class="total-items-box__name">
                        Tools Cabinet, 7 drawers and cabinet, 5 small, 1 medium, 1 large, blue color
                    </p>
                    <p class="total-items-box__price">
                        <span>1960</span>,00 EUR
                    </p>
                    </div>
                    <div class="total-items-box__items">
                    <div class="total-items-box_item">
                        <div class="total-items-box__name d-flex justify-content-between">
                        <p>BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long. EVA 1/3.</p>
                        <div class="total-items-box__close d-none"><img src="img/icon/x-icon.svg" alt="close" /></div>
                        </div>
                        <div class="total-items-box__price d-flex">
                        360,00 EUR
                        <p class="d-flex d-none justify-content-center align-items-center">
                            <img src="img/icon/x-icon.svg" class="delete_item" alt="delete" />
                        </p>
                        </div>
                    </div>
                    <div class="total-items-box_item">
                        <div class="total-items-box__name d-flex justify-content-between">
                        <p>BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long. EVA 1/3.</p>
                        <div class="total-items-box__close d-none"><img src="img/icon/x-icon.svg" alt="close" /></div>
                        </div>
                        <div class="total-items-box__price d-flex">
                        590,00 EUR
                        <p class="d-flex d-none justify-content-center align-items-center">
                            <img src="img/icon/x-icon.svg" class="delete_item" alt="delete" />
                        </p>                
                        </div>
                    </div>
                    <div class="total-items-box_item">
                        <div class="total-items-box__name d-flex justify-content-between">
                        <p>BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long. EVA 1/3.</p>
                        <div class="total-items-box__close d-none"><img src="img/icon/x-icon.svg" alt="close" /></div>
                        </div>
                        <div class="total-items-box__price d-flex">
                        310,00 EUR
                        <p class="d-flex d-none justify-content-center align-items-center">
                            <img src="img/icon/x-icon.svg" class="delete_item" alt="delete" />
                        </p>                
                        </div>
                    </div>
                    <div class="total-items-box_item">
                        <div class="total-items-box__name d-flex justify-content-between">
                        <p>BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long. EVA 1/3.</p>
                        <div class="total-items-box__close d-none"><img src="img/icon/x-icon.svg" alt="close" /></div>
                        </div>
                        <div class="total-items-box__price d-flex">
                        140,00 EUR
                        <p class="d-flex d-none justify-content-center align-items-center">
                            <img src="img/icon/x-icon.svg" class="delete_item" alt="delete" />
                        </p>
                        </div>
                    </div>
                    <div class="total-items-box_item">
                        <div class="total-items-box__name d-flex justify-content-between">
                        <p>BATO Socket wrench set 3/8" 6 edge 6-24mm short. 6-19mm long. EVA 1/3.</p>
                        <div class="total-items-box__close d-none"><img src="img/icon/x-icon.svg" alt="close" /></div>
                        </div>
                        <div class="total-items-box__price d-flex">
                        890,00 EUR
                        <p class="d-flex d-none justify-content-center align-items-center">
                            <img src="img/icon/x-icon.svg" class="delete_item" alt="delete" />
                        </p>                
                        </div>
                    </div>
                    </div>
                    <div class="total-items-box__total">
                    <p class="total-items-box__name">
                        Total price
                    </p>
                    <p class="total-items-box__price">
                        <span>12 434</span>,00 EUR
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </section>
    )
}

export default MainContentThirdScreen;