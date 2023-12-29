import React from "react";

const Home = () => {
  //

  /*
  const displayFileName = (event) => {
    // Handle file selection logic here
    // For example:
    console.log(event.target.files[0].name);
  };

  const redirectToProcess = () => {
    // Handle redirection logic here
  };
  */

  return (
    <>
      {/* NAVBAR */}
      <div className="intro">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand mx-auto" href="#">
              <h1>SRND STUDIO</h1>
            </a>
          </div>
        </nav>
      </div>

      {/* BUTTON TO PROMPT USER FILE SELECT */}
      <div className="text-center mt-3">
        <form>
          <label htmlFor="audioFileInput" className="btn btn-primary">
            Select Audio File
            <input
              type="file"
              id="audioFileInput"
              accept=".mp3, .wav"
              style={{ display: "none" }}
              //onChange={displayFileName}
            />
          </label>
        </form>
      </div>

      {/* CONTINUE BUTTON */}
      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-success"
          //onClick={redirectToProcess}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Home;
