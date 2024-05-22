import React, { useEffect, useState, } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Modal from 'react-modal';
import '../../style/speaker.css';

// import '../../asset/speakers.pdf'

 const Speaker = () => {

  const generatePdfDirectory = (start, end) => {
    const pdfDirectory = [];
  
    for (let i = start; i <= end; i++) {
      // Pad the number with leading zeros to ensure it is three digits
      const fileNumber = String(i).padStart(3, '0');
      pdfDirectory.push(`assets/speakers-bio/${fileNumber}.pdf`);
    }
  
    return pdfDirectory;
  };
  

  const pdfDirectory = generatePdfDirectory(1, 44);
  
  // const pdfDirectory = [
  //   'assets/speakers-bio/001.pdf',
  //   'assets/speakers-bio/002.pdf',
  //   'assets/speakers-bio/003.pdf',
  //   'assets/speakers-bio/004.pdf',
  // ]

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);



  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (
    <div className="pdf-grid">
      {pdfDirectory.map((pdf, index) => (
        <div key={index} className="pdf-item" onClick={() => openModal(pdf)}>
          <Document file={pdf}>
            <Page pageNumber={1} width={150} />
          </Document>
        </div>
      ))}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="PDF Modal"
        className="pdf-modal"
        overlayClassName="pdf-modal-overlay"
        key={selectedPdf}
      >
        {selectedPdf && (
          <Document file={selectedPdf}>
            <Page pageNumber={1} />
          </Document>
        )}
      </Modal>
    </div>
  );
 }

 export default Speaker;