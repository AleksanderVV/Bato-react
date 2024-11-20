import { useEffect, useState, useRef } from 'react';
import arrowDown from '../../data/images/icon/arrow-down-black.svg'

const ColorFilterToolbox = ({data, filterToolboxes}) => {
  const [colorsData, setColorsData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const filters = Array.from(
      new Map(data.map(i => [i.color[1], [i.color[0], i.color[1]]])).values()
    );
    setColorsData(filters);
    
  }, [data])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    }
  })

  return (
      <div ref={menuRef} className="filter-boxes__color filter-color" onClick={toggleMenu}>
      <div className="filter-color__top d-flex align-items-center justify-content-center">
        <div className="filter-color__text">Color:</div>
        <div className="filter-color__view filter-color__view-all"></div>
        <div className="filter-color__close open"><img src={arrowDown} alt="Open"/></div>
      </div>
      <div className={`filter-color__down ${isMenuOpen ? 'open' : 'close'}`}>
        <div className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center selected">
          <div className="filter-color__text">All</div>
          <div className="filter-color__view filter-color__view-all"></div>
        </div>
        {colorsData.map(i => {
          return (
            <div key={i[0]} className="filter-color__item d-flex justify-content-center justify-content-sm-between align-items-center">
              <div className="filter-color__text">{i[0]}</div>
              <div className={`filter-color__view filter-color__view-${i[0]}`}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ColorFilterToolbox;