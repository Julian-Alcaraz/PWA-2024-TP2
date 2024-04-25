const ListaVehiculos = ({vehiculos}) => {
    return (
        <div className="grid grid-cols-3 gap-5 mx-4">
            {vehiculos.map((vehiculo) => {
                return (
                    <div className="border-solid border-red-500 text-white bg-black border-2" key={vehiculo.id}>
                        <p>Marca: {vehiculo.marca}</p>
                        <p>Modelo: {vehiculo.modelo}</p>
                        <p>Año: {vehiculo.anio}</p>
                        <p>Estado: {vehiculo.estado}</p>
                        <p>Imagen: {vehiculo.imagen}</p>
                    </div>
                );
            })}
        </div>
    );
}

export default ListaVehiculos;