import ToolboxFilters from '../../components/ToolboxFilters/ToolboxFilters';
import ToolboxList from '../../components/ToolboxList/ToolboxList';

import './mainContentFirstScreen.scss';

const MainContentFirstScreen = () => {
    return (
        <section class="main-boxes">
            <div class="container">
                <ToolboxFilters/>
                <ToolboxList/>
            </div>
        </section>
    )
}

export default MainContentFirstScreen;