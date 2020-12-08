// @ts-nocheck

import React, { useState, useEffect, Fragment } from "react";
import { RouteComponentProps } from "react-router-dom";
import { pdfjs, Document, Page } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `/js/app.worker.js`;
import { User } from '../utils/api';
import "../scss/resume.scss";

const ResumeAlt: React.FC<ResumeProps> = (props: ResumeProps) => {
  const [file, setFile] = useState("/assets/samplepdfv2.pdf");
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  const [comments, setComments] = useState<ResumeProps[]>();

  const [newComment, setNewComment] = useState<string>("");

  useEffect(() => {
    if(!User || User.userid === null) {
      props.history.replace('/')
    }
  }, []);

//   const [newComment, setNewComment] = useState<ResumeProps>({
//     id: null,
//     userid: null,
//     resumeid: null,
//     content: "",
//   });


  useEffect(() => {
    setComments();
  }, []);

  useEffect(() => {
    (async () => {
      let res = await fetch(
        `https://quiet-basin-68498.herokuapp.com/routes/api/resumefeedback/${props.match.params.userid}`
      );
      console.log(res);
      let comments = await res.json();
      // comments.reverse();
      setComments(comments);
    })();
  }, []);

  const onCommentChange = (e: React.ChangeEvent<HTMLInputElement>) =>
  setNewComment({ 
    //   userid: newComment.userid,
    //   resumeid: newComment.resumeid,
c    });

  const saveComment = async () => {
    await fetch(
      `https://quiet-basin-68498.herokuapp.com/routes/api/resumefeedback/${props.match.params.userid}`,
      {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            userid: props.match.params.userid,
            resumeid: props.match.params.userid,
            comment: newComment
        }),
      }
    );
    // props.history.push(`/resume/${props.match.params.userid}`);
  };

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
            <h2 className="text-white text-center">Resume</h2>
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
            {comments?.map((comments) => (
              <div className="row mt-3 mb-3" >
                <div className="card shadow" style={{ width: "18rem" }}>
                  <div className="card-body mt-3">
                    <h5 className="card-title">John Doe</h5>
                    <p className="card-text">{comments?.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="container-sm mt-3">
            <div className="row">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Leave a comment?"
                  onChange={onCommentChange}
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-outline-dark inputBtn"
                    onClick={saveComment}
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
};

interface ResumeProps extends RouteComponentProps<{ userid: string }> {
  comment: null;
}

export default ResumeAlt;

