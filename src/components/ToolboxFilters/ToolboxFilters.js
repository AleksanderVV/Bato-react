import ColorFilterToolbox from '../ColorFilterToolbox/ColorFilterToolbox';
import DrawerFilterToolbox from '../DrawersFilterToolbox/DrawerFilterToolbox';
import WheelsFilterToolbox from '../WheelsFilterToolbox/WheelsFilterToolbox';

import './toolboxFilters.scss';

const ToolboxFilters = ({data, filterToolboxes}) => {

    return (
        <div className="row">
        <div className="col-12">
          <div className="main-boxes__filter filter-boxes d-flex justify-content-end">
            <DrawerFilterToolbox data={data}/>
            <ColorFilterToolbox data={data}/>
            <WheelsFilterToolbox filterToolboxes={filterToolboxes}/>
          </div>
        </div>
      </div>
    )
}

export default ToolboxFilters;