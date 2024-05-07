import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import ListaVehiculos from "../../components/ListaVehiculos/ListaVehiculos";
import { useState, useEffect } from "react";
const Home = () => {
    const [valueInput, setValueInput] = useState("");
    const [vehiculosState, setVehiculosState] = useState([]);

    // Función que setea el valor del buscador al presionar teclas.
    const onChangeHandler = (event) => {
        setValueInput(event.target.value);
    };

    // Función que obtiene los datos de vehiculos a partir de un archivo .json, y actualiza el estado de los vehiculos.
    const fetchVehiculos = async () => {
        const response = await fetch("/mocks/vehiculos.json");
        const result = await response.json();
        setVehiculosState(result);
    }

    // Función que permite la búsqueda de vehiculos, ya sea por su marca, modelo, o ambos a la vez.
    const searchVehiculos = () => {
        let arreglo = [];
        for(let i=0; i < vehiculosState.length; i++){
            let marcaYmodelo = vehiculosState[i].marca.toLowerCase() + " " + vehiculosState[i].modelo.toLowerCase();
            if (vehiculosState[i].marca.toLowerCase().includes(valueInput.toLowerCase()) 
            || vehiculosState[i].modelo.toLowerCase().includes(valueInput.toLowerCase())
            || marcaYmodelo.includes(valueInput.toLowerCase())){
                arreglo.push(vehiculosState[i]);
            }
        }
        return arreglo;
    }

    useEffect(() => {
        fetchVehiculos();   
    }, []);

    return (
        <div className="flex flex-col min-h-screen ">
            <Header />
            <div className="flex-grow">
                <div className="flex flex-row items-center justify-center  my-4">
                    <Input value={valueInput} onChangeHandler={onChangeHandler} placeholder={"Buscar vehículo"} />
                </div>
                {
                    valueInput.length > 0 ? (
                        searchVehiculos().length > 0 ? (
                            <ListaVehiculos vehiculos={searchVehiculos()} />
                        ) : (
                            <div className="flex justify-center p-4 mt-4">
                                <h3 className="text-xl">No se encontraron vehículos para su búsqueda</h3>
                            </div>
                        )
                    ) : (
                        <ListaVehiculos vehiculos={vehiculosState} />
                    )
                }
            </div>
        </div>
    );
};

export default Home;