
import { useLocation } from 'react-router-dom';

import arrowDown from '../../data/images/icon/arrow-down.svg';
import arrowUpWhite from '../../data/images/icon/arrow-up-white.svg'

import './header.scss';

const Header = ({isMobile, isSticky, isMenuOpen, toggleDropdownMenuOpen}) => {
    const location = useLocation();

    let headerDropdownMenu;
    if (location.pathname === '/chooseAccessories' && isMobile && !isMenuOpen) {
        headerDropdownMenu = <img src={arrowDown} className="header__img_close" alt="arrow" />
    } else {
        headerDropdownMenu = <img src={arrowUpWhite} className="header__img_open" alt="arrow" />;
    }

    return (
        <>
            <div className='overlay'></div>
            <header className={isMobile && isSticky ? 'header result_sticky' : 'header'}>
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-1 align-middle">
                    <a href="index.html" className="header__logo">BATO</a>
                    </div>
                    <div className="col-1 d-none justify-content-end d-md-flex">
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center d-md-none">
                    <div 
                        className="header__total-item d-flex justify-content-end"
                        onClick={toggleDropdownMenuOpen}>
                        <p><span>0</span> item added</p>
                        {headerDropdownMenu}
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;

