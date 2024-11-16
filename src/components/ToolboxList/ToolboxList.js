import useToolboxService from "../../services/ToolboxService";
import setContent from "../../utils/setContent";
import { useEffect, useMemo, useState } from "react";

import xIcon from '../../data/images/icon/x-icon.svg';

const ToolboxList = () => {
  const [toolboxList, setToolboxList] = useState([]);

  const {process, setProcess, getAllToolbox} = useToolboxService();

  useEffect(() => {
    onRequest();
    
    // eslint-disable-next-line
  }, []);

  const onRequest = () => {
    getAllToolbox()
      .then(setToolboxList)
      .then(() => setProcess('confirmed'));
  }

  const renderItems = (arr) => {
    const items = arr.map((item, idx) => {
      return (
        <div 
          className="main-boxes__item box-item d-flex flex-column" 
          key={item.id}>
          <div className="main-boxes__item_first">
            <div className="box-item__img">
              <img src={item.image} alt="Box"/>
            </div>
            <div className="box-item__content d-flex flex-column">
              <div className="box-item__title">{item.name}</div>
              <div className="box-item__id-box d-flex justify-content-between pb-2">
                <p className="box-item__id-subtitle">Item number:</p>
                <p className="box-item__id">{item.id}</p>
              </div>
              <div className="box-item__drawers-box d-flex justify-content-between pb-2">
                <p className="box-item__drawers-subtitle">Number of drawers:</p>
                <p className="box-item__drawers">{item.drawers.length}</p>
              </div>
              <div className="box-item__color-box d-flex justify-content-between pb-2">
                <p className="box-item__color-subtitle">Color:</p>
                <div className="box-item__color" style={{backgroundColor: item.color[1]}}></div>
              </div>
              <div className="box-item__wheel-box d-flex justify-content-between pb-2">
                <p className="box-item__wheel-subtitle">Wheels:</p>
                <p className="box-item__wheel">—</p>
              </div>
              <div className="box-item__size-box d-flex justify-content-between pb-4 pb-sm-5">
                <p className="box-size-subtitle">
                  Size H<img src={xIcon} alt="x"/>
                  L<img src={xIcon} alt="x"/>W:</p>
                <p className="box-item__size">
                  <span className="box-height">{item.size[0]}</span>
                  <img src="img/icon/x-icon.svg" alt="x"/>
                  <span className="box-length">{item.size[1]}</span>
                  <img src="img/icon/x-icon.svg" alt="x"/>
                  <span className="box-width">{item.size[2]} mm</span>
                </p>
              </div>
              <div className="box-item__footer d-flex justify-content-between align-items-center">
                <button type="button">Select</button>
                <p className="box-item__price"><span>{item.price}</span>,00 EUR</p>
              </div>
            </div>
          </div>
          <div className="main-boxes__item_second">
          </div>
        </div>
      )
    })

    return (
      <div className="main-boxes__items d-flex flex-wrap justify-content-left">
        {items}
      </div>
    )
  }

  const elements = useMemo(() => {
    return setContent(process, () => renderItems(toolboxList))
    // eslint-disable-next-line
  }, [process])

  return (
      <div className="row">
      <div className="col-12">
        {elements}
      </div>
    </div>
  )
}

export default ToolboxList;