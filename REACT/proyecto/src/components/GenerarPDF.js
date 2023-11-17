import React from 'react';
import jsPDF from 'jspdf';

const MyPdfComponent = () => {
  const handleDownload = () => {
    // Crear una instancia de jsPDF
    const pdf = new jsPDF();

    // Agregar contenido al PDF (puedes personalizar esto según tus necesidades)
    pdf.text('¡Hola! Este es tu documento PDF.', 20, 30);

    // Guardar el documento PDF
    pdf.save('mi_documento.pdf');
  };

  return (
    <div>
      <h1>Mi Componente PDF</h1>
      <p>Contenido del componente basico</p>
      <button onClick={handleDownload}>Descargar PDF</button>
    </div>
  );
};

export default MyPdfComponent;
