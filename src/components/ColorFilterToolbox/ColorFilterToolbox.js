import arrowDown from '../../data/images/icon/arrow-down-black.svg'

const ColorFilterToolbox = () => {
    return (
        <div className="filter-boxes__color filter-color">
        <div className="filter-color__top d-flex align-items-center justify-content-center">
          <div className="filter-color__text">Color:</div>
          <div className="filter-color__view filter-color__view-all"></div>
          <div className="filter-color__close open"><img src={arrowDown} alt="Open"/></div>
        </div>
        <div className="filter-color__down close">
          <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center selected">
            <div className="filter-color__text">All</div>
            <div className="filter-color__view filter-color__view-all"></div>
          </div>
          <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div className="filter-color__text">Red</div>
            <div className="filter-color__view filter-color__view-red"></div>
          </div>
          <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div className="filter-color__text">Blue</div>
            <div className="filter-color__view filter-color__view-blue"></div>
          </div>
          <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div className="filter-color__text">Black</div>
            <div className="filter-color__view filter-color__view-black"></div>
          </div>
          <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div className="filter-color__text">Grey</div>
            <div className="filter-color__view filter-color__view-grey"></div>
          </div>
        </div>
      </div>
    )
}

export default ColorFilterToolbox;