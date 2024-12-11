import { Tab, Nav } from 'react-bootstrap';

import './accessoriesFilters.scss';

const AccessoriesFilters = () => {

    return (
        <>
            <div className="choose-accessories__select-title text-end">
            Accessory size
            </div>
            <div className="choose-accessories__top d-flex align-items-end">
                <div className="choose-accessories__search flex-fill">
                    <input type="search" name="search" id="search-accessories" placeholder="Search accessory by item number or name" />
                </div>
                <p className="choose-accessories__title-size d-sm-none">Size</p>
                <Nav variant='pills'>
                    <Nav.Item>
                        <Nav.Link eventKey={'all'} className="d-flex align-items-center">
                            All
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={1} className="d-flex align-items-center">
                            1
                            <div className="choose-accessories__nav-img nav-img nav-img-1 d-flex">
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={2} className="d-flex align-items-center">
                            2
                            <div className="choose-accessories__nav-img nav-img nav-img-2 d-flex">
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey={3} className="d-flex align-items-center">
                            3
                            <div className="choose-accessories__nav-img nav-img nav-img-3 d-flex">
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            <div className="nav-img__item"></div>
                            </div>
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
                {/* <ul className="nav nav-pills" id="pills-tab" role="tablist">
                    <li className="nav-item nav-item_all" role="presentation">
                        <button className="nav-link nav-link__all active d-flex align-items-center" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">
                            All
                        </button>
                    </li>
                    <li className="nav-item nav-item_first" role="presentation">
                    <button className="nav-link nav-link__first d-flex align-items-center" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        1
                        <div className="choose-accessories__nav-img nav-img nav-img-1 d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        </div>
                    </button>
                    </li>
                    <li className="nav-item nav-item_second" role="presentation">
                    <button className="nav-link nav-link__second d-flex align-items-center" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        2
                        <div className="choose-accessories__nav-img nav-img nav-img-2 d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        </div>
                    </button>
                    </li>
                    <li className="nav-item nav-item_third" role="presentation">
                    <button className="nav-link nav-link__third d-flex align-items-center" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        3
                        <div className="choose-accessories__nav-img nav-img nav-img-3 d-flex">
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        <div className="nav-img__item"></div>
                        </div>
                    </button>
                    </li>
                </ul> */}
            </div>
        </>
    )
}

export default AccessoriesFilters;