import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'react-bootstrap';

import AccessoriesFilters from '../../components/AccessoriesFilters/AccessoriesFilters';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import DrawerSideBar from '../../components/DrawerSideBar/DrawerSideBar';
import useToolboxService from '../../services/ToolboxService';

import './mainContentSecondScreen.scss';
import filterMobile from '../../data/images/icon/filter-mobile.svg';

const MainContentSecondScreen = ({isMenuOpen, setMenuOpen, toggleDropdownMenuOpen, currentToolbox, totalPrice}) => {
    const [accessories, setAccessories] = useState([]);
    const [attachingAccessories, setAttachingAccessories] = useState([]);
    const [loading, setLoading] = useState(true);
    const {process, setProcess, getAccessories, getAttachingAccessories} = useToolboxService();

    useEffect(() => {
        onRequest();
        // eslint-disable-next-line
      }, []);
    
    const onRequest = async () => {
        setLoading(true);
        try {
            const acc = await getAccessories();
            const attachingAcc = await getAttachingAccessories();
            setAccessories(acc);
            setAttachingAccessories(attachingAcc);
            setProcess('confirmed');
        } catch (error) {
            setProcess('error');
            console.error('Failed to fetch accessories');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section id="choose-accessories" className="choose-accessories">
            <div className="container">
                <div className="row">
                    <DrawerSideBar 
                        toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                        currentToolbox={currentToolbox}
                        totalPrice={totalPrice}/>
                    <div className="col-xl-6 col-xxl-8">
                        <div className="choose-accessories__select">
                        <Tab.Container defaultActiveKey={'all'}>
                            <AccessoriesFilters />
                            {!loading ? (
                                <AccessoriesList 
                                    currentToolbox={currentToolbox} 
                                    accessories={accessories} 
                                    attachingAccessories={attachingAccessories}/>
                            ) : (
                                <p>Loading accessories...</p>
                            )}
                        </Tab.Container>
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