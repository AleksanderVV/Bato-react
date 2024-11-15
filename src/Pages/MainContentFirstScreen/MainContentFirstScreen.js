import ToolboxFilters from '../../components/ToolboxFilters/ToolboxFilters';
import ToolboxList from '../../components/ToolboxList/ToolboxList';

import './mainContentFirstScreen.scss';

const MainContentFirstScreen = () => {
    return (
        <section className="main-boxes">
            <div className="container">
                <ToolboxFilters/>
                <ToolboxList/>
            </div>
        </section>
    )
}

export default MainContentFirstScreen;