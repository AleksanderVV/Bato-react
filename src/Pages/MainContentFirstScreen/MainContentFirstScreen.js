import ToolboxFilters from '../../components/ToolboxFilters/ToolboxFilters';
import ToolboxList from '../../components/ToolboxList/ToolboxList';

import useToolboxService from "../../services/ToolboxService";
import { useEffect, useState } from "react";

import './mainContentFirstScreen.scss';

const MainContentFirstScreen = () => {

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

    return (
        <section className="main-boxes">
            <div className="container">
                <ToolboxFilters data={toolboxList} />
                <ToolboxList data={toolboxList} process={process}/>
            </div>
        </section>
    )
}

export default MainContentFirstScreen;