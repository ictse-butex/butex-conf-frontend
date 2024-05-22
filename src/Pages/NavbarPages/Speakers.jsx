import React, { useEffect, useState, } from 'react';
import { pdfjs, Document, Page } from 'react-pdf';
import Modal from 'react-modal';
import '../../style/speaker.css';

// import speakers from '../../asset/speakers.pdf'

 const Speaker = () => {
  const generatePdfDirectory = (start, end) => {
    const pdfDirectory = [];
  
    for (let i = start; i <= end; i++) {
      // Pad the number with leading zeros to ensure it is three digits
      const fileNumber = String(i).padStart(3, '0');
      pdfDirectory.push(`assets/speakers-bio/ICTSE24-${fileNumber}.pdf`);
    }
    return pdfDirectory;
  };
  

  const pdfDirectory = generatePdfDirectory(0, 42);
  

  const [selectedPdf, setSelectedPdf] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [numPages, setNumPages] = useState(null);


  const openModal = (pdf) => {
    setSelectedPdf(pdf);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPdf(null);
    setNumPages(null);
  };

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  return (

    <div className='text-center'>
      <div className='bg-[#357f70] text-white p-2'>ICTSE 2024 SPEAKERS</div>
      <div className="pdf-grid">
        {pdfDirectory.map((pdf, index) => (
          <div key={index} className="pdf-item" onClick={() => openModal(pdf)}>
            <Document file={pdf}>
              <Page pageNumber={1} width={window.innerWidth} />
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
            <Document file={selectedPdf} onLoadSuccess={onDocumentLoadSuccess}>
              {Array.from(
                new Array(numPages),
                (el, index) => (
                  <Page key={`page_${index + 1}`} pageNumber={index + 1} />
                )
              )}
            </Document>
          )}
        </Modal>
      </div>
    </div>

  );
 }

 export default Speaker;