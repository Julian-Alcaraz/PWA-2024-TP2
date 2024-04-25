import { useNavigate, useParams } from 'react-router-dom';
import './Details.module.css';
import { useEffect, useState } from 'react';
import  Header  from "../../components/Header/Header"
import { ROUTES } from '../../const/routes';

export default function Details() {
    const { id } = useParams(); 
    const navigate =useNavigate()
    const [vehiculo, setVehiculo] = useState([]);
    const fetchAuto = async () => {
        const response = await fetch(`/mocks/vehiculo-${id}.json`);
        const result = await response.json();
        setVehiculo(result);
        console.log(result)
      };

    useEffect(() => {
        fetchAuto();
      }, []);

    return (
      <div className="Details">
            <Header />
            {vehiculo.id && (
            <>
                <p>Id: {vehiculo.id}</p>
                <p>Marca: {vehiculo.marca}</p>
                <p>Modelo: {vehiculo.modelo}</p>
                <p>Año: {vehiculo.anio}</p>
                <p>Motor Tamaño: {vehiculo.motor.tamaño}</p>
                <p>Motor Marca: {vehiculo.motor.marca}</p>
                <p>Motor Potencia: {vehiculo.motor.potencia}</p>
                <p>Transmisión: {vehiculo.transmicion}</p>
                <p>Dimensiones Ancho: {vehiculo.dimensiones.ancho}</p>
                <p>Dimensiones Largo: {vehiculo.dimensiones.largo}</p>
                <p>Descripción: {vehiculo.descripcion}</p>
                <p>Rodado: {vehiculo.rodado}</p>
                <p>Estado: {vehiculo.estado}</p>
                <p>Cantidad de imágenes: {vehiculo.images.length}</p>
                <p>Categoría/Tipo: {vehiculo.categoria_tipo}</p>
                <p>Precio: {vehiculo.precio}</p>
            </>
            )}
                <button  onClick={() => {navigate(ROUTES.home);}} className="text-black text-xl font-bold ">VOLVER</button>

      </div>
    );
}
  