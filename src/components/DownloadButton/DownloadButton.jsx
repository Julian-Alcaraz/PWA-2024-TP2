import { FaFileDownload } from "react-icons/fa";
import jsPDF from "jspdf";

const DownloadButton = ({ vehiculo }) => {
    function generarPdf() {
        const doc = new jsPDF();

        // Se establece el color de fondo del PDF
        doc.setFillColor(203, 213, 255);
        doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

        // Se establecen los estilos del texto del PDF
        const textColor = [44, 62, 80];
        const fontSize = 12;

        // Función para dibujar una imagen en el PDF
        function drawImage(img, x, y, width, height) {
            doc.addImage(img, 'JPEG', x, y, width, height);
        }

        // Función para dibujar la información del vehículo
        function drawVehicleInfo() {
            doc.setFontSize(fontSize);
            doc.setTextColor(...textColor);
            // Parte de datos principales
            doc.text(`Año: ${vehiculo.anio ? vehiculo.anio : '---'}`, 10, 160);
            doc.text(`Estado: ${vehiculo.estado ? vehiculo.estado : '---'}`, doc.internal.pageSize.getWidth() - 10, 160, null, null, 'right');
            doc.text(`Categoría/Tipo: ${vehiculo.categoria_tipo ? vehiculo.categoria_tipo : '---'}`, 10, 190);
            doc.text(`Precio: ${vehiculo.precio ? vehiculo.precio : '---'}`, doc.internal.pageSize.getWidth() - 10, 190, null, null, 'right');
            // Parte de especificaciones técnicas
            doc.setFontSize(14);
            doc.setTextColor(100);
            doc.text("Especificaciones técnicas", doc.internal.pageSize.getWidth() / 2, 220, null, null, 'center');
            doc.setFontSize(fontSize);
            doc.setTextColor(...textColor);
            doc.text(`Tamaño del motor: ${vehiculo.motor.tamaño ? vehiculo.motor.tamaño : '---'}`, 10, 240);
            doc.text(`Marca del motor: ${vehiculo.motor.marca ? vehiculo.motor.marca : '---'}`, 10, 250);
            doc.text(`Potencia del motor: ${vehiculo.motor.potencia ? vehiculo.motor.potencia : '---'}`, 10, 260);
            doc.text(`Transmicion: ${vehiculo.transmicion ? vehiculo.transmicion : '---'}`, 10, 270);
            doc.text(`Ancho: ${vehiculo.dimensiones.ancho ? vehiculo.dimensiones.ancho : '---'}`, 10, 280);
            doc.text(`Largo: ${vehiculo.dimensiones.largo ? vehiculo.dimensiones.largo : '---'}`, 10, 290);
            doc.text(`Rodado: ${vehiculo.rodado ? vehiculo.rodado : '---'}`, 10, 300);
        }

        // Se llaman a las funciones especificadas arriba para dibujar los elementos en el PDF
        doc.setFontSize(18);
        doc.setTextColor(...textColor);
        doc.text(`${vehiculo.marca} ${vehiculo.modelo}`, doc.internal.pageSize.getWidth() / 2, 20, null, null, 'center');
        drawImage(vehiculo.images[0].url, 10, 30, 180, 120);
        drawVehicleInfo();

        // Guardar el PDF con el nombre de la marca y modelo del vehiculo
        doc.save(`${vehiculo.marca}${vehiculo.modelo}.pdf`);
    }

    return (
        <div className="DownloadButton">
            <button className="p-4 border rounded-xl bg-gray-800" onClick={generarPdf}><FaFileDownload className="text-white" /></button>
        </div>
    );
};

export default DownloadButton;