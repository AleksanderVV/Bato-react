import './header.scss';

const Header = () => {

    return (
        <>
            <div className='overlay'></div>
            <header className="header">
                <div className="container">
                <div className="row justify-content-between">
                    <div className="col-1 align-middle">
                    <a href="index.html" className="header__logo">BATO</a>
                    </div>
                    <div className="col-1 d-none justify-content-end d-md-flex">
                    {/* <div className="header__langswicher">
                        <select>
                        <option>En</option>
                        <option>De</option>
                        <option>Fi</option>
                        <option>Se</option>
                        <option>No</option>
                        <option>Dk</option>
                        </select>
                    </div> */}
                    </div>
                    <div className="col-6 d-flex justify-content-end align-items-center d-md-none">
                    <div className="header__total-item d-flex justify-content-end">
                        <p><span>0</span> item added</p>
                    </div>
                    </div>
                </div>
                </div>
            </header>
        </>
    )
}

export default Header;

