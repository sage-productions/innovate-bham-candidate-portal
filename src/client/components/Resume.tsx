//@ts-nocheck
import React, { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/js/app.worker.js`;

const Resume: React.FC<ResumeProps> = (props) => {
    const [file, setFile] = useState("/assets/CombinationResume.pdf");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [comment, setComment] = useState({
        commentName: "",
        commentMessage: "",
        comments: [
            {
                name: "",
                comment: ""
            },
        ]
    })

    let onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
    };

    let changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    let previousPage = () => {
        changePage(-1);
    };

    let nextPage = () => {
        changePage(1);
    };

    return (
        <main className="container-fluid">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-gold text-center"><u>Resume</u></h2>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <div className="row shadow mt-3 justify-content-center">
                    <Document
                        file={file}
                        onLoadSuccess={onDocumentLoadSuccess}
                        onLoadError={console.error}
                        options={{
                            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
                            cMapPacked: true,
                        }}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>

            <div className="row justify-content-center mt-3">
                <p>
                    Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                </p>
            </div>

            <div className="row justify-content-center">
                <button
                    className="btn btn-outline-dark mx-2"
                    type="button"
                    disabled={pageNumber <= 1}
                    onClick={previousPage}
                >
                    Previous
            </button>
                <button
                    className="btn btn-outline-dark mx-2"
                    type="button"
                    disabled={pageNumber >= numPages}
                    onClick={nextPage}
                >
                    Next
            </button>
            </div>

            <div className="row">
                
            </div>

        </main>
    );
};

interface ResumeProps { }

export default Resume;
