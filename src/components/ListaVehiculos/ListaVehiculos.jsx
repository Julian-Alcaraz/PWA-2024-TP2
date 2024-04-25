import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../const/routes";

const ListaVehiculos = ({vehiculos}) => {
    const navigate =useNavigate()
    return (
        <div className="grid grid-cols-3 gap-5 mx-4">
            {vehiculos.map((vehiculo) => {
                return (
                    <button  key={vehiculo.id}  onClick={() => { navigate(ROUTES.details+""+vehiculo.id); }}> 
                        <div className="border-solid border-red-500 text-white bg-black border-2">
                            <p>Marca: {vehiculo.marca}</p>
                            <p>Modelo: {vehiculo.modelo}</p>
                            <p>Año: {vehiculo.anio}</p>
                            <p>Estado: {vehiculo.estado}</p>
                            <p>Imagen: {vehiculo.imagen}</p>
                        </div>
                    </button>
                );
            })}
        </div>
    );
}

export default ListaVehiculos;