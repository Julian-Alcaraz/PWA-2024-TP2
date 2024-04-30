import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

/* Se exporta el componente ListaVehiculos, el cual a partir de un arreglo pasado por parametro muestra una imagen,
   marca, modelo, año de lanzamiento, estado y precio de cada vehiculo. En caso de hacer click en algún vehiculo, se
   podrá acceder a otra pantalla con los detalles del mismo. */
const ListaVehiculos = ({vehiculos}) => {
    const navigate =useNavigate()
    return (
        <div className="flex flex-wrap gap-5 justify-center mx-4 my-4">
            {vehiculos.map((vehiculo) => {
                return (
                    <button  key={vehiculo.id}  onClick={() => { navigate(ROUTES.details+""+vehiculo.id); }}> 
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <img className="w-full h-auto" src={vehiculo.imagen} alt={vehiculo.marca}></img>
                            <div className="px-6 py-4">
                                <div className="font-bold text-xl mb-2">{vehiculo.marca} {vehiculo.modelo}</div>
                                    <p className="text-gray-700 text-base">Año: {vehiculo.anio}</p>
                                    <p className="text-gray-700 text-base">Estado: {vehiculo.estado}</p>
                                    <p className="text-gray-700 text-base">Precio: ${vehiculo.precio}</p>
                            </div>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

export default ListaVehiculos;