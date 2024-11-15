import { useHttp } from "../hooks/http.hook";

const useToolboxService = () => {
    const {request, process, setProcess, clearError} = useHttp();

    const getAllToolbox = async () => {
        const res = await request(`http://localhost:3001/boxes`);
        return res;
    }

    return {
        process,
        setProcess,
        clearError,
        getAllToolbox
    }
}

export default useToolboxService;