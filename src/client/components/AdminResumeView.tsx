import React from "react";
import { Link } from "react-router-dom";
import "../scss/admin-resume-view.scss";

const AdminResumeView: React.FC<AdminResumeViewProps> = (props) => {
  return (
    <>
    <main className="container-fluid text-white">

      {/* BACKGROUND IMAGE */}
      <div className="home-img-wrapper">
          <div className="admin-resume-bg-img">
      </div>

      {/* PAGE TITLE */}
      <div className="row title-row">
        <div className="col-12 text-center bg-midnight">
          <h2 className="text-white text-center">Cohort 13 Resumes</h2>
        </div>
      </div>
      <div className="bg-filter-admin">
      <h1 className="webdev font-weight-light text-center pt-3 pb-5">
        ----Web Development----
      </h1>
      {/* <div className="row page-row mt-5"> */}
      <div className="row webdevrow">
        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src="assets/guy.Jpeg"
            alt="profile picture"
          />

          <h4>Kevin Wang</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src="assets/man2.jpg"
            alt="profile picture"
          />
          <h4>Steve Johnson</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/hillary2.jpg"
            alt="profile picture"
          />
          <h4>Hillary Morgan</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <Link to="/resume/:userid">
            <img
              className="admin-page-pic"
              src=" assets/salma.jpeg"
              alt="profile picture"
            />
          </Link>

          <h4>Salma Khan</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src="assets/girl2.jpg"
            alt="profile picture"
          />
          <h4>Melissa Wilson</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/guy1.jpg"
            alt="profile picture"
          />
          <h4>Carl Lewis</h4>
        </div>
      </div>

      <h1 className="data-h1 font-weight-light text-center pb-5">
        ----Data Analytics----
      </h1>

      <div className="row datarow">
        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/guy2.jpg"
            alt="profile picture"
          />
          <h4>Joe Smith</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src="assets/girl3.jpg "
            alt="profile picture"
          />
          <h4>Sarah Stevens</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/woman.jpeg"
            alt="profile picture"
          />
          <h4>Allison Maddux</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/man6.jpg"
            alt="profile picture"
          />
          <h4>Rafael Hernandez</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src="assets/guy4.jpg"
            alt="profile picture"
          />
          <h4>Michael Solomon</h4>
        </div>

        <div className="col text-center font-weight-light pb-5">
          <img
            className="admin-page-pic"
            src=" assets/guy5.jpg"
            alt="profile picture"
          />
          <h4>Carlos Louis</h4>
        </div>
      </div></div>
      {/* </div> */}
    </div>
    </main>

    {/* BACKGROUND IMAGE */}
    {/* <div className="img-wrapper">
        <div className="bg-img"></div>
      </div> */}
</>
  );
};

interface AdminResumeViewProps {}

export default AdminResumeView;
