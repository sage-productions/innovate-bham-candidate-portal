//@ts-nocheck
import React, { useState, useEffect, Fragment } from "react";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/js/app.worker.js`;
import '../scss/resume.scss'

const Resume: React.FC<ResumeProps> = (props) => {
    const [file, setFile] = useState("/assets/Junior_software_developer.pdf");
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);

    const sampleComments = [
        {
            id: 1,
            name: "Salma Khan",
            message: "I updated my key skills section. I also fixed some formatting issues I was having. "
        },
        {
            id: 2,
            name: "Innovate Administrator",
            message: "Great job! This is a well done resume. You should now look to shorten the length of your document a little."
        },
        {
            id: 3,
            name: "Salma Khan",
            message: "Will do. What types of soft skills do employers like to see on our resume for the IT field?"
        }
    ]


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
        <Fragment>
        <main className="container-fluid">

            <div className="row title-row">
                <div className="col-12 text-center bg-midnight">
                    <h2 className="text-white text-center">Candidate Resume</h2>
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


            <div className="container border p-3 mt-3 page-row">
                <div className="container">
                    {sampleComments.map(comment => (
                        <div className="row mt-3 mb-3">
                            <div className="card shadow" style={{ width: '18rem' }}>
                                <div className="card-body mt-3">
                                    <h5 className="card-title">{comment.name}</h5>
                                    <p className="card-text">{comment.message}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="container-sm mt-3">
                    <div className="row">
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Leave a comment?" />
                            <div className="input-group-append">
                                <button className="btn btn-outline-dark inputBtn">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </main>
        </Fragment>
    );
};

interface ResumeProps { }

export default Resume;
