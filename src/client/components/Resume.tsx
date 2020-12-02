//@ts-nocheck
import React, { useState, useEffect } from "react";
import { pdfjs } from "react-pdf";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

const Resume: React.FC<ResumeProps> = (props) => {
  const [file, setFile] = useState("./assets/CombinationResume.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

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
      <div className="row">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={console.error}
          options={{
            cMapUrl: `//cdn.jsdelivr.net/npm/pdfjs-dist@${pdfjs.version}/cmaps/`,
            cMapPacked: true,
          }}
        >
          <Page pageNumbers={pageNumber} />
        </Document>
        <p>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
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
    </main>
  );
};

interface ResumeProps {}

export default Resume;
