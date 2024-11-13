import './footer.scss';

const Footer = () => {
    return (
        <footer>
            <div class="container">
            <div class="row justify-content-start justify-content-sm-between gap-3 gap-sm-2 gap-lg-0">
                <div class="col-lg-6 col-md-12 d-inline-flex justify-content-lg-start justify-content-center">
                <div class="footer__copywrite">
                    BATO© Nordic a/s Fåborgvej 1, DK-4200 Slagelse
                </div>
                </div>
                <div class="col-lg-6 col-md-12 d-inline-flex justify-content-lg-end justify-content-sm-center">
                <div class="footer__info d-flex gap-1 gap-sm-3">
                    <div class="footer__phone">Phone: +45 5850 2210</div>
                    <div class="footer__email">E-mail: info@batonordic.dk</div>
                </div>
                </div>
            </div>
            </div>
        </footer>
    );
}

export default Footer;