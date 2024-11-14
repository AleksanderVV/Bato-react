import arrowDown from '../../data/images/icon/arrow-down-black.svg'

const ColorFilterToolbox = () => {
    return (
        <div class="filter-boxes__color filter-color">
        <div class="filter-color__top d-flex align-items-center justify-content-center">
          <div class="filter-color__text">Color:</div>
          <div class="filter-color__view filter-color__view-all"></div>
          <div class="filter-color__close open"><img src={arrowDown} alt="Open"/></div>
        </div>
        <div class="filter-color__down close">
          <div class="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center selected">
            <div class="filter-color__text">All</div>
            <div class="filter-color__view filter-color__view-all"></div>
          </div>
          <div class="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="filter-color__text">Red</div>
            <div class="filter-color__view filter-color__view-red"></div>
          </div>
          <div class="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="filter-color__text">Blue</div>
            <div class="filter-color__view filter-color__view-blue"></div>
          </div>
          <div class="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="filter-color__text">Black</div>
            <div class="filter-color__view filter-color__view-black"></div>
          </div>
          <div class="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
            <div class="filter-color__text">Grey</div>
            <div class="filter-color__view filter-color__view-grey"></div>
          </div>
        </div>
      </div>
    )
}

export default ColorFilterToolbox;