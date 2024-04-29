import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";


const Header = () => {
    const navigate =useNavigate()
    return (
        <div className="Header">
            <nav className="bg-gray-800 p-4">   
                <button  onClick={() => {navigate(ROUTES.home);}} className="text-white text-xl font-bold ">
                    Logo
                </button>
            </nav>
        </div>
    );
};
export default Header;