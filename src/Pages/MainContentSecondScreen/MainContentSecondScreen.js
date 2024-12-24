import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab } from 'react-bootstrap';

import AccessoriesFilters from '../../components/AccessoriesFilters/AccessoriesFilters';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import DrawerSideBar from '../../components/DrawerSideBar/DrawerSideBar';
import useToolboxService from '../../services/ToolboxService';

import './mainContentSecondScreen.scss';
import filterMobile from '../../data/images/icon/filter-mobile.svg';

const MainContentSecondScreen = ({ toggleDropdownMenuOpen, currentToolbox, totalPrice, handleClick}) => {
    const [accessories, setAccessories] = useState([]);
    const [filteredAccessories, setFilteredAccessories] = useState([]);
    const [attachingAccessories, setAttachingAccessories] = useState([]);
    const [loading, setLoading] = useState(true);

    const [selectedAcc, setSelectedAcc] = useState([]);


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
            setFilteredAccessories(acc);
            setAttachingAccessories(attachingAcc);
            setProcess('confirmed');
        } catch (error) {
            setProcess('error');
            console.error('Failed to fetch accessories');
        } finally {
            setLoading(false);
        }
    }

    const searchAcc = (event) => {
        const searchValue = event.target.value.toLowerCase();

        setFilteredAccessories(
            accessories.filter(acc => acc.name.toLowerCase().includes(searchValue) || acc.id.includes(searchValue))
        )
    }

    const chooseCurrentAcc = (id) => {
        setSelectedAcc(prevState => {
            if (prevState.includes(id)) {
                return prevState.filter(accId => accId !== id)
            }
            return [...prevState, id];
        })
    };

    return (
        <section id="choose-accessories" className="choose-accessories">
            <div className="container">
                <div className="row">
                    <DrawerSideBar 
                        toggleDropdownMenuOpen={toggleDropdownMenuOpen}
                        currentToolbox={currentToolbox}
                        totalPrice={totalPrice}
                        handleClick={handleClick}/>
                    <div className="col-xl-6 col-xxl-8">
                        <div className="choose-accessories__select">
                        <Tab.Container defaultActiveKey={'all'}>
                            <AccessoriesFilters searchAcc={searchAcc}/>
                            {!loading ? (
                                <AccessoriesList 
                                    currentToolbox={currentToolbox} 
                                    accessories={filteredAccessories} 
                                    attachingAccessories={attachingAccessories}
                                    selectedAcc={selectedAcc}
                                    chooseCurrentAcc={chooseCurrentAcc}/>
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