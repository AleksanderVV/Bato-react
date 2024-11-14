import ColorFilterToolbox from '../ColorFilterToolbox/ColorFilterToolbox';
import DrawerFilterToolbox from '../DrawersFilterToolbox/DrawerFilterToolbox';
import WheelsFilterToolbox from '../WheelsFilterToolbox/WheelsFilterToolbox';

import './toolboxFilters.scss';

const ToolboxFilters = () => {
    return (
        <div class="row">
        <div class="col-12">
          <div class="main-boxes__filter filter-boxes d-flex justify-content-end">
            <DrawerFilterToolbox/>
            <ColorFilterToolbox/>
            <WheelsFilterToolbox/>
          </div>
        </div>
      </div>
    )
}

export default ToolboxFilters;