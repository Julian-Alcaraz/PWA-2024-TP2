import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const UrlError = () => {
    const navigate =useNavigate()
    return (
        <div>
            <nav className="bg-gray-800 p-4 absolute w-screen mx-auto">   
                <h1 className=" text-white text-3xl font-bold items-center justify-center">Error Page</h1>
            </nav>
            <div className="flex items-center justify-center w-screen h-screen">
                <nav className=" text-gray-800 items-center justify-center">   
                    <h1 className="text-3xl font-bold flex m-auto">Url no encontrada</h1>
                    <button  onClick={() => {navigate(ROUTES.home);}} className="flex m-auto text-xl font-bold hover:underline">GO HOME</button>
                </nav>
            </div>
        </div>
    );
};
export default UrlError;