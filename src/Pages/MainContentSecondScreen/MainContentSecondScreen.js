import AccessoriesFilters from '../../components/AccessoriesFilters/AccessoriesFilters';
import AccessoriesList from '../../components/AccessoriesList/AccessoriesList';
import DrawerSideBar from '../../components/DrawerSideBar/DrawerSideBar';

import './mainContentSecondScreen.scss';

const MainContentSecondScreen = () => {
    return (
        <>
            <AccessoriesFilters />
            <AccessoriesList />
            <DrawerSideBar />
        </>
    )
}

export default MainContentSecondScreen;