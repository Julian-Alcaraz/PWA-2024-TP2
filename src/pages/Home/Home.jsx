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
            if (vehiculosState[i].marca.toLowerCase().includes(valueInput.toLowerCase())){
                arreglo.push(vehiculosState[i]);
            }
        }
        return arreglo;
    }

    useEffect(() => {
        fetchVehiculos();
        //console.log ("Se ejecuta useEffect");    
    }, []);

    return (
    <div>
        <Header />
        <div className="m-auto mb-12">
            <div className="flex justify-center my-6 text-5xl">
                <h1>Título</h1>
            </div>
            <div className="flex justify-center mb-6">
                <Input value={valueInput} onChangeHandler={onChangeHandler} placeholder={"Buscar vehículo"}/>
            </div>
            {
                searchVehiculos().length > 0 ? (
                        <ListaVehiculos vehiculos={searchVehiculos()}/>
                ) : (
                    <div className="flex justify-center text-xl">
                        <h3>No se encontraron vehículos para su búsqueda</h3>
                    </div>
                )
            }
        </div>
        <Footer />
    </div>
    );
};

export default Home;