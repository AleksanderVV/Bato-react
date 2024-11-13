import './header.scss';

const Header = () => {

    return (
        <header class="header">
            <div class="container">
            <div class="row justify-content-between">
                <div class="col-1 align-middle">
                <a href="index.html" class="header__logo">BATO</a>
                </div>
                <div class="col-1 d-none justify-content-end d-md-flex">
                <div class="header__langswicher">
                    <select>
                    <option>En</option>
                    <option>De</option>
                    <option>Fi</option>
                    <option>Se</option>
                    <option>No</option>
                    <option>Dk</option>
                    </select>
                </div>
                </div>
                <div class="col-6 d-flex justify-content-end align-items-center d-md-none">
                <div class="header__total-item d-flex justify-content-end">
                    <p><span>0</span> item added</p>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;

