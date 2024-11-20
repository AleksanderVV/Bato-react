import { useState } from "react";

const WheelsFilterToolbox = ({ filterToolboxes }) => {
    const [checked, setChecked] = useState(false);

    const toggleCheckbox = () => {
      const newChecked = !checked;
      setChecked(newChecked);
      filterToolboxes(newChecked);
    }

    return (
        <div className="filter-boxes__wheels d-flex align-items-center">
        <p>Wheels</p>
        <label className="switch">
          <input type="checkbox" checked={checked} onChange={toggleCheckbox}/>
          <span className="slider round"></span>
        </label>
      </div>
    )
}

export default WheelsFilterToolbox;