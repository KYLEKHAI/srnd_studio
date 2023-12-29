import React from "react";

const Process: React.FC = () => {
  // PROCESSING LOGIC

  return (
    <div className="container mt-5">
      <h1 className="text-center">Modify your track!</h1>

      {/* DISPLAY FILE NAME */}
      <div className="text-center mt-3" id="selectedFileName"></div>
    </div>
  );
};

export default Process;
