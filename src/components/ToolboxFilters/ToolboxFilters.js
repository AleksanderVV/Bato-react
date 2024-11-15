import ColorFilterToolbox from '../ColorFilterToolbox/ColorFilterToolbox';
import DrawerFilterToolbox from '../DrawersFilterToolbox/DrawerFilterToolbox';
import WheelsFilterToolbox from '../WheelsFilterToolbox/WheelsFilterToolbox';

import './toolboxFilters.scss';

const ToolboxFilters = () => {
    return (
        <div className="row">
        <div className="col-12">
          <div className="main-boxes__filter filter-boxes d-flex justify-content-end">
            <DrawerFilterToolbox/>
            <ColorFilterToolbox/>
            <WheelsFilterToolbox/>
          </div>
        </div>
      </div>
    )
}

export default ToolboxFilters;