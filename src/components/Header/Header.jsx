import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
    const navigate =useNavigate()
    return (
        <div className="Header">
            <nav className="bg-gray-800 p-4 flex items-center justify-between">   
                <button  onClick={() => {navigate(ROUTES.home);}} className="text-white text-xl font-bold hover:text-slate-500">
                <IoHomeOutline />
                </button>
                <div className="flex items-center">
                    <span className="mr-2 text-white">Grupo 1</span>
                    <div className="h-8 border-l border-gray-400"></div>
                    <span className="mr-2 ml-2 text-white">
                        <a href="https://github.com/Julian-Alcaraz" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500">
                            Julián Alcaraz
                        </a>
                    </span>
                    <div className="h-8 border-l border-gray-400"></div>
                    <span className="mr-2 ml-2 text-white">
                        <a href="https://github.com/guillermoagueronqn" target="_blank" rel="noopener noreferrer" className="hover:text-slate-500">
                            Guillermo Agüero
                        </a>
                    </span>
                </div>
            </nav>
        </div>
    );
};
export default Header;