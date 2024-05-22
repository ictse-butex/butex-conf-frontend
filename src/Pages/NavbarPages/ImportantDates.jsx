import React, {useState} from 'react';
import HTMLFlipBook from "react-pageflip";
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
import "../../style/pdf-style.css";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

import PresentationSchedule from "../../asset/PresentationSchedule.pdf";

const Page = React.forwardRef(({ pageNumber }, ref) => {
    return (
        <div ref={ref} className="pdf-page">
            <ReactPdfPage pageNumber={pageNumber} width={window.innerWidth * 0.975} />
        </div>
    );
});

const ImportantDates = () => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

    const [numPages, setNumPages] = useState(null);

    const onDocumentLoadSuccess = ({ numPages }) => {
        console.log(numPages);
        setNumPages(numPages);
    };

    return (
        <div className="overflow-auto page-container">
            <Document file={PresentationSchedule} onLoadSuccess={onDocumentLoadSuccess}>
                {[...Array(numPages).keys()].map(pageNumber => (
                    <Page key={pageNumber + 1} pageNumber={pageNumber + 1} />
                ))}
            </Document>
        </div>
    );
};

export default ImportantDates;
