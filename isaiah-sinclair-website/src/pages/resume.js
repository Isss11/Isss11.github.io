import React from "react";
import resume from '../assets/isaiahSinclairResume.pdf';
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
	'pdfjs-dist/build/pdf.worker.min.js',
	import.meta.url,
).toString();

const Resume = () => {
	return (
		<div className="row d-flex justify-content-center">
			<Document file={resume} className="col-md-5">
				<Page pageNumber={1} />
			</Document>
		</div>
	);
};

export default Resume;
