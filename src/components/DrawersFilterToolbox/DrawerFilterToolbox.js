import './drawerFilterToolbox.scss';

import arrowDown from '../../data/images/icon/arrow-down-black.svg';

const DrawerFilterToolbox = () => {
    return (
        <div className="filter-boxes__drawers filter-drawers">
        <div className="filter-drawers__top d-flex align-items-center justify-content-center">
          <div className="filter-drawers__text">Number of drawers:</div>
          <div className="filter-drawers__number">All</div>
          <div className="filter-drawers__close open"><img src={arrowDown} alt="Open"/></div>
        </div>
        <div className="filter-drawers__down close">
          <div className="filter-drawers__item d-flex justify-content-between align-items-center selected">
            <div className="filter-drawers__number">All</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">04</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">07</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">08</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">09</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">10</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">11</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">14</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">16</div>
          </div>
          <div className="filter-drawers__item d-flex justify-content-between align-items-center">
            <div className="filter-drawers__number">20</div>
          </div>
        </div>
      </div>
    )
}

export default DrawerFilterToolbox;