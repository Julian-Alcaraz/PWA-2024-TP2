import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Input from "../../components/Input/Input";
import ListaVehiculos from "../../components/ListaVehiculos/ListaVehiculos";
import { useState, useEffect } from "react";
const Home = () => {

    const [valueInput, setValueInput] = useState("");
    const [vehiculosState, setVehiculosState] = useState([]);

    const onChangeHandler = (event) => {
        setValueInput(event.target.value);
    };

    const fetchVehiculos = async () => {
        const response = await fetch("/mocks/vehiculos.json");
        const result = await response.json();
        setVehiculosState(result);
    }

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
        <div className="flex flex-col min-h-screen bg-slate-200">
            <Header />
            <div className="flex-grow">
                <div className="flex flex-col items-center justify-center my-4">
                    <h1 className="text-3xl mb-4"></h1>
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