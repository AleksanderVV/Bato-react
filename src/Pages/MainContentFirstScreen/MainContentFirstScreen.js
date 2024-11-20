import ToolboxFilters from '../../components/ToolboxFilters/ToolboxFilters';
import ToolboxList from '../../components/ToolboxList/ToolboxList';

import useToolboxService from "../../services/ToolboxService";
import { useEffect, useState } from "react";

import './mainContentFirstScreen.scss';

const MainContentFirstScreen = () => {

    const [toolboxList, setToolboxList] = useState([]);
    const [filteredToolboxList, setFilteredToolboxList] = useState([]);

    const {process, setProcess, getAllToolbox} = useToolboxService();
  
    useEffect(() => {
      onRequest();
      // eslint-disable-next-line
    }, []);
  
    const onRequest = () => {
      getAllToolbox()
        .then(data => {
            setToolboxList(data);
            setFilteredToolboxList(data);
        })
        .then(() => setProcess('confirmed'));
    }

    const filterToolboxes = (currentValue = 'all') => {
        let filteredData = toolboxList;

        if (currentValue !== 'all') {
            filteredData = toolboxList.filter(newVal => newVal.wheels === currentValue);
        } 

        setFilteredToolboxList(filteredData);
    }
    

    return (
        <section className="main-boxes">
            <div className="container">
                <ToolboxFilters data={toolboxList} filterToolboxes={filterToolboxes} />
                <ToolboxList data={filteredToolboxList} process={process}/>
            </div>
        </section>
    )
}

export default MainContentFirstScreen;