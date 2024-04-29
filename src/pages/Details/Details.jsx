import { useNavigate, useParams } from 'react-router-dom';
import './Details.module.css';
import { useEffect, useState } from 'react';
import  Header  from "../../components/Header/Header"
import { ROUTES } from '../../const/routes';
import { IoIosArrowBack } from "react-icons/io";
import React from 'react';
export default function Details() {
    const { id } = useParams(); 
    const navigate =useNavigate()
    const [vehiculo, setVehiculo] = useState([]);
    const [selectedImage, setSelectedImage] = useState("");
    const fetchAuto = async () => {
        const response = await fetch(`/mocks/vehiculo-${id}.json`);
        const result = await response.json();
         setVehiculo(result);
        setSelectedImage(result.images[0].url)
      };

    useEffect(() => {
        fetchAuto();
      },[]);

    return (
      <div className="Details">
          <Header />
        <div className='container mx-auto mt-3 border rounded-lg shadow-lg bg-slate-200'>
         <div className='absolute  mt-4 ml-4'>
            <button onClick={()=> navigate(ROUTES.home) } ><IoIosArrowBack /> </button> 
         </div>
          {vehiculo.id ?  (
            <>
              <div className='flex justify-center p-4  '>
                <div className='images p-4 bg-white rounded-xl  shadow-lg' >
                  <div>
                    <img width="180" height="180" src={selectedImage==="" ? vehiculo.images[0].url : selectedImage} alt="" />
                  </div>
                  <div className='flex w-44  overflow-x-scroll  '>
                    {vehiculo.images.map( (image,key)=>{
                      return (
                        <div className='p-0.5 '  key={key}>
                          <button onClick={()=> setSelectedImage(image.url)} className={selectedImage === image.url ? 'border  border-cyan-700 overflow-hidden' : 'overflow-hidden'  }>
                            <img width="100" height="80"src={image.url} alt="" />
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
                <div className='DatosPrincipales   p-4 '>
                  <h1 className='text-center underline text-xl font-bold text-gray-800'>Datos Principales</h1>
                  <div className=' grid  grid-cols-2 text-center text-sm my-3'>
                    <div className='font-bold'>Marca:</div> 
                    <div>{vehiculo.marca ? vehiculo.marca : '---'}</div>
                    <div className='font-bold'>Modelo:</div> 
                    <div>{vehiculo.modelo ? vehiculo.modelo : '---'}</div>
                    <div className='font-bold'>Año:</div> 
                    <div>{vehiculo.anio ? vehiculo.anio : '---'}</div>
                    <div className='font-bold'>Estado:</div> 
                    <div>{vehiculo.estado ? vehiculo.estado : '---'}</div>
                    <div className='font-bold'>Categoría/Tipo:</div> 
                    <div>{vehiculo.categoria_tipo ? vehiculo.categoria_tipo : '---'}</div>
                    <div className='font-bold'>Precio:</div> 
                    <div>{vehiculo.precio ? vehiculo.precio : '---'}</div>
                  </div>
                </div>
              </div>
              <div className='border-t'>
                <h1 className='text-center underline text-xl font-bold text-gray-800'>Especificiaciones t&eacute;cnicas</h1>
                  <div className=' grid  grid-cols-2  text-sm my-3 gap-1'>
                    <div className='font-bold   ml-40 '>Tamaño del motor:</div> 
                    <div className='text-center mr-32  '>{vehiculo.motor.tamaño ? vehiculo.motor.tamaño : '---'}</div>
                    <div className='font-bold  ml-40   ' >Marca del motor:</div> 
                    <div className='text-center mr-32'>{vehiculo.motor.marca ? vehiculo.motor.marca : '---'}</div>
                    <div className='font-bold  ml-40'>Potencia del motor:</div> 
                    <div className='text-center mr-32'>{vehiculo.motor.potencia ? vehiculo.motor.potencia : '---'}</div>
                    <div className='font-bold  ml-40'>Transmicion:</div> 
                    <div className='text-center mr-32'>{vehiculo.transmicion ? vehiculo.transmicion : '---'}</div>
                    <div className='font-bold  ml-40'>Ancho:</div> 
                    <div className='text-center mr-32'>{vehiculo.dimensiones.ancho ? vehiculo.dimensiones.ancho : '---'}</div>
                    <div className='font-bold  ml-40' >Largo:</div> 
                    <div className='text-center mr-32'>{vehiculo.dimensiones.largo ? vehiculo.dimensiones.largo : '---'}</div>
                    <div className='font-bold  ml-40' >Rodado:</div> 
                    <div className='text-center mr-32'>{vehiculo.rodado ? vehiculo.rodado : '---'}</div>
                </div>
                <h1 className='text-center underline text-xl font-bold text-gray-800'>Descripci&oacute;n</h1>
                  <div className='text-center mx-16 my-3'>{vehiculo.descripcion ? vehiculo.descripcion : '---'}</div>
              </div>
          
          </>
          ): (
            <div className='py-20 text-center'>
              <p className='text-2xl'>Vehiculo no encontrado!</p> 
              <p className='text-sm'>Vuelva a la pagina inicial para seguir explorando.</p> 
            </div>
          )}
        </div>
        <div className='text-center mt-4'>
          <button  onClick={() => {navigate(ROUTES.home);}} className="text-black  text-lg font-bold hover:text-white hover:bg-slate-800 hover:rounded-xl px-2 py-1 ">VOLVER</button>
        </div>
      </div>
    );
}
  