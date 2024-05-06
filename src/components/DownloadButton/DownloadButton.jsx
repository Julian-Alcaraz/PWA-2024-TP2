import { FaFileDownload } from "react-icons/fa";
import jsPDF  from "jspdf";
// import jsPDF from "jspdf";
const DownloadButton = () => {
    async function generarPdf(){
        const response = await fetch("/mocks/vehiculos.json");
        const vehiculos = await response.json();
        const doc = new jsPDF();

        doc.text("Listado de vehículos", 10, 10); // Título del listado

        let y = 20; // Inicia
        vehiculos.forEach((vehiculo) => {
            const { id, marca, modelo, anio, estado, precio } = vehiculo;
            const text = `ID: ${id}, Marca: ${marca}, Modelo: ${modelo}, Año: ${anio}, Estado: ${estado}, Precio: ${precio}`;
            doc.text(text, 10, y);
            y += 10; // Incrementar la posición Y para el siguiente vehículo
        });

        doc.save("listado_vehiculos.pdf");
        doc.text("Listado de vehiculos!", 10, 10);
        doc.save("a4.pdf");
    }
  
    return (
       <div className="DownloadButton ">
            <button className="p-4 border  rounded-xl  bg-gray-800 " onClick={()=> generarPdf()} ><FaFileDownload className="text-white" /></button>
       </div>
    );
};

export default DownloadButton;