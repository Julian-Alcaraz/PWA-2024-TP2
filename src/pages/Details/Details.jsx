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
      <div className="Details ">
        <Header />
        <div className='container mx-auto mt-6  p-2 rounded-lg shadow-lg bg-slate-300'>
          <div className='absolute  mt-4 ml-4'>
             <button onClick={()=> navigate(ROUTES.home) } ><IoIosArrowBack /> </button> 
          </div>
          {vehiculo.id ?  (
            <>
              <div className=' '>
                <div class="w-full flex justify-center space-x-10 mt-5">
                  <div class="flex flex-col w-1/3 my-auto">
                    <div class="w-full rounded border border-gray-200">
                       <img alt="ecommerce" class="w-full object-cover object-center"src={selectedImage==="" ? vehiculo.images[0].url : selectedImage}/> 
                    </div>
                    <div class="flex items-center justify-center mt-1">
                      <div class="grid grid-cols-3 gap-1">
                        {vehiculo.images.map( (image,key)=>{
                          return (
                            <div className=''    key={key}>
                              <button onClick={()=> setSelectedImage(image.url)} className={selectedImage === image.url ? 'border-2 rounded  border-gray-900 ' : ''  }>
                                <div>
                                  <img src={image.url} alt="" />
                                </div>
                              </button>
                            </div>
                          )
                        })} 
                      </div>
                    </div>
                  </div>
                  <div className='DatosPrincipales  m-auto '>
                    <h1 className='text-center underline text-xl font-bold text-gray-800'>Datos Principales</h1>
                    <div className=' grid  grid-cols-4 text-sm my-3'>
                      <div className='font-bold'>Marca:</div> 
                      <div className='text-center '>{vehiculo.marca ? vehiculo.marca : '---'}</div>
                      <div className='font-bold'>Modelo:</div> 
                      <div className='text-center '>{vehiculo.modelo ? vehiculo.modelo : '---'}</div>
                      <div className='font-bold'>Año:</div> 
                      <div className='text-center '>{vehiculo.anio ? vehiculo.anio : '---'}</div>
                      <div className='font-bold'>Estado:</div> 
                      <div className='text-center '>{vehiculo.estado ? vehiculo.estado : '---'}</div>
                      <div className='font-bold'>Categoría/Tipo:</div> 
                      <div className='text-center '>{vehiculo.categoria_tipo ? vehiculo.categoria_tipo : '---'}</div>
                      <div className='font-bold'>Precio:</div> 
                      <div className='text-center '>{vehiculo.precio ? vehiculo.precio : '---'}</div>
                    </div>
                  <div className='border-t border-black'>
                <h1 className='text-center underline text-xl font-bold text-gray-800'>Especificiaciones t&eacute;cnicas</h1>
                  <div className=' grid  grid-cols-2  text-sm my-3 gap-1'>
                    <div className='font-bold   '>Tamaño del motor:</div> 
                    <div className='text-center '>{vehiculo.motor.tamaño ? vehiculo.motor.tamaño : '---'}</div>
                    <div className='font-bold   '>Marca del motor:</div> 
                    <div className='text-center '>{vehiculo.motor.marca ? vehiculo.motor.marca : '---'}</div>
                    <div className='font-bold   '>Potencia del motor:</div> 
                    <div className='text-center '>{vehiculo.motor.potencia ? vehiculo.motor.potencia : '---'}</div>
                    <div className='font-bold   '>Transmicion:</div> 
                    <div className='text-center '>{vehiculo.transmicion ? vehiculo.transmicion : '---'}</div>
                    <div className='font-bold   '>Ancho:</div> 
                    <div className='text-center '>{vehiculo.dimensiones.ancho ? vehiculo.dimensiones.ancho : '---'}</div>
                    <div className='font-bold   '>Largo:</div> 
                    <div className='text-center '>{vehiculo.dimensiones.largo ? vehiculo.dimensiones.largo : '---'}</div>
                    <div className='font-bold   ' >Rodado:</div> 
                    <div className='text-center '>{vehiculo.rodado ? vehiculo.rodado : '---'}</div>
                  </div>
              </div>
                  
                  
                  </div>
               
         
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
  