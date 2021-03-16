import React from "react";

const Competences = () => {
    const [header] = React.useState({
        subHeader: "Mes compétences",
      });
  return (
    <div className="Competences">
      <div className="container">
        <div className="common">
          <h1 className="mainHeader">{header.subHeader}</h1>
          <div className="commonBorder"></div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
