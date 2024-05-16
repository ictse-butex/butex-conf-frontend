import React, {useState} from 'react';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "../../style/pdf-style.css"
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import PresenrationSchedule from "../../asset/PresentationSchedule.pdf"

const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
      <div ref={ref}>
        <ReactPdfPage pageNumber={pageNumber} width={window.innerWidth} height={window.innerHeight}/>
      </div>
    );
  });

const ImportantDates = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



  return (
    <div className='overflow-auto'>
        <Document file={PresenrationSchedule}>
        <HTMLFlipBook width={window.innerWidth} height={window.innerHeight}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
            <Page pageNumber={3} />
            <Page pageNumber={4} />
        </HTMLFlipBook>
        </Document>    
    </div>
  );
};

export default ImportantDates;