import React from "react";
import resume from "../assets/isaiahSinclairResume.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

const Resume = () => {
  return (
    <div>
      <iframe
        src={resume}
        width={"100%"}
        height={"800rem"}
        title="Isaiah's Resume"
      />
    </div>
  );
};

export default Resume;
