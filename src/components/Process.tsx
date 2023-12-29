import React from "react";

interface ProcessProps {
  selectedFile: File | null;
}

const Process: React.FC<ProcessProps> = ({ selectedFile }) => {
  // PROCESSING LOGIC

  return (
    <div className="container mt-5">
      <h1 className="text-center">Modify your track!</h1>

      {/* DISPLAY FILE NAME */}
      <div className="text-center mt-3" id="selectedFileName">
        {selectedFile?.name}
      </div>

      {/* AUDIO PLAYER */}
      {selectedFile && (
        <div className="text-center mt-3">
          <audio controls>
            <source
              src={URL.createObjectURL(selectedFile)}
              type={selectedFile.type}
            />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}
    </div>
  );
};

export default Process;
