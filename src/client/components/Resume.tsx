//@ts-nocheck
import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import sampleResume from './assets/Combination-Resume.pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const Resume: React.FC<ResumeProps> = props => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    let onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    }

    return (
        <main className="container-fluid">
            <div className="row">
                <Document
                    file={sampleResume}
                    onLoadSuccess={onDocumentLoadSuccess}
                    onLoadError={console.error}
                >
                    <Page pageNumbers={pageNumber} />
                </Document>
                <p>Page {pageNumber} of {numPages}</p>
            </div>
        </main>
        
    )
}

interface ResumeProps { }

export default Resume;
