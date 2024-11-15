import useToolboxService from "../../services/ToolboxService";
import { useEffect } from "react";

const ToolboxList = () => {

  const {process, setProcess, getAllToolbox} = useToolboxService();

  useEffect(() => {
    onRequest();
  }, []);

  const onRequest = () => {
    getAllToolbox()
      .then((data) => console.log(data))
      .then(() => setProcess('confirmed'));
  }

  return (
      <div className="row">
      <div className="col-12">
        <div className="main-boxes__items d-flex flex-wrap justify-content-left">

        </div>
      </div>
    </div>
  )
}

export default ToolboxList;