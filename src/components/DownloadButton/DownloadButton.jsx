import { FaFileDownload } from "react-icons/fa";
import jsPDF  from "jspdf";
// import jsPDF from "jspdf";
const DownloadButton = () => {
    async function generarPdf(){
        const response = await fetch("/mocks/vehiculos.json");
        const vehiculos = await response.json();
        const doc = new jsPDF();
    
        // Estilo para el título del listado
        doc.setFontSize(18);
        doc.setTextColor(100);
        doc.text("Listado de vehículos", 10, 10);
    
        // Variables para la posición de la tabla
        let startX = 10;
        let startY = 20;
        let rowHeight = 10;
        let idWidth = 10;
        let colWidth = 30; // Modifiqué el ancho de las otras columnas
    
        // Estilo para la tabla
        doc.setDrawColor(0);
        doc.setFontSize(10); // Tamaño de fuente para los datos de la tabla
        doc.setTextColor(0); 
        doc.setFillColor(200, 200, 200)
        doc.rect(startX, startY, idWidth, rowHeight,'S');
        doc.text("Id", startX + 2, startY + 7);
        doc.rect(startX + idWidth, startY, colWidth, rowHeight,'S');
        doc.text("Marca", startX + idWidth + 2, startY + 7);
        doc.rect(startX + idWidth + colWidth, startY, colWidth, rowHeight,'S');
        doc.text("Modelo", startX + idWidth + colWidth + 2, startY + 7);
        doc.rect(startX + idWidth + 2 * colWidth, startY, colWidth, rowHeight,'S');
        doc.text("Año", startX + idWidth + 2 * colWidth + 2, startY + 7);
        doc.rect(startX + idWidth + 3 * colWidth, startY, colWidth, rowHeight,'S');
        doc.text("Estado", startX + idWidth + 3 * colWidth + 2, startY + 7);
        doc.rect(startX + idWidth + 4 * colWidth, startY, colWidth, rowHeight,'S');
        doc.text("Precio", startX + idWidth + 4 * colWidth + 2, startY + 7);
        vehiculos.forEach((vehiculo, index) => {
            const { id, marca, modelo, anio, estado, precio } = vehiculo;
    
            // Establecer colores alternados para las filas
            // Dibujar celdas
            startY += rowHeight;
            doc.rect(startX, startY, idWidth, rowHeight);
            doc.text(id.toString(), startX + 2, startY + 7);
            doc.rect(startX + idWidth, startY, colWidth, rowHeight);
            doc.text(marca, startX + idWidth + 2, startY + 7);
            doc.rect(startX + idWidth + colWidth, startY, colWidth, rowHeight);
            doc.text(modelo, startX + idWidth + colWidth + 2, startY + 7);
            doc.rect(startX + idWidth + 2 * colWidth, startY, colWidth, rowHeight);
            doc.text(anio.toString(), startX + idWidth + 2 * colWidth + 2, startY + 7);
            doc.rect(startX + idWidth + 3 * colWidth, startY, colWidth, rowHeight);
            doc.text(estado, startX + idWidth + 3 * colWidth + 2, startY + 7);
            doc.rect(startX + idWidth + 4 * colWidth, startY, colWidth, rowHeight);
            doc.text(precio.toString(), startX + idWidth + 4 * colWidth + 2, startY + 7);
        });
        // Guardar el PDF con el nombre especificado
        doc.save("listado_vehiculos.pdf");
   
    }
  
    return (
       <div className="DownloadButton ">
            <button className="p-4 border  rounded-xl  bg-gray-800 " onClick={()=> generarPdf()} ><FaFileDownload className="text-white" /></button>
       </div>
    );
};

export default DownloadButton;