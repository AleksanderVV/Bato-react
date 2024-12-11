import { Link } from 'react-router-dom';

import AccessoriesFilters from '../../components/AccessoriesFilters/AccessoriesFilters';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import DrawerSideBar from '../../components/DrawerSideBar/DrawerSideBar';

import './mainContentSecondScreen.scss';
import filterMobile from '../../data/images/icon/filter-mobile.svg';

const MainContentSecondScreen = ({currentToolbox, totalPrice}) => {
    return (
        <section id="choose-accessories" className="choose-accessories">
            <div className="container">
                <div className="row">
                    <DrawerSideBar 
                        currentToolbox={currentToolbox}
                        totalPrice={totalPrice}/>
                    <div className="col-xl-6 col-xxl-8">
                        <div className="choose-accessories__select">
                        <AccessoriesFilters />
                        <AccessoriesList currentToolbox={currentToolbox}/>
                        </div>
                    </div>
                </div>
            </div>
            <Link className="choose-accessories__filter-top d-sm-none">
                <img src={filterMobile} alt="icon" />
                <span>1</span>
            </Link>
        </section>
    )
}

export default MainContentSecondScreen;