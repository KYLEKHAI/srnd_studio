import React, { useState } from "react";
import Process from "./Process";

const Home: React.FC = () => {
  // States
  const [fileName, setFileName] = useState("");
  const [isFileSelected, setIsFileSelected] = useState(false);
  const [isContinuePressed, setIsContinuePressed] = useState(false);
  // Add new state for the selected file
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const displayFileName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setIsFileSelected(true);
      setSelectedFile(file);
    } else {
      setFileName("");
      setIsFileSelected(false);
      setSelectedFile(null);
    }
  };

  const redirectToProcess = () => {
    const fileInput = document.getElementById(
      "audioFileInput"
    ) as HTMLInputElement;

    if (fileInput?.files?.length && fileInput.files.length > 0) {
      setIsContinuePressed(true);
    } else {
      alert("Please choose a file to be processed.");
    }
  };

  if (isFileSelected && isContinuePressed) {
    return <Process selectedFile={selectedFile} />;
  }
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
              onChange={displayFileName}
            />
          </label>

          {/* DISPLAY FILE NAME */}
          <p>{fileName}</p>
        </form>
      </div>

      {/* CONTINUE BUTTON */}
      <div className="text-center mt-3">
        <button
          type="button"
          className="btn btn-success"
          onClick={redirectToProcess}
        >
          Continue
        </button>
      </div>
    </>
  );
};

export default Home;
