import { useState } from "react";
import DocuPDF from "./DocuPDF";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";

function App() {
  const [viewPdf, setViewPdf] = useState(false);

  const handleClickViewPDF = () => {
    setViewPdf(!viewPdf);
  };

  return (
    <div>
      <button onClick={handleClickViewPDF}>VER PDF</button>
      <PDFDownloadLink document={<DocuPDF />} fileName="poema.pdf">
        <button>DOWNLOAD PDF</button>
      </PDFDownloadLink>

      <>
        {viewPdf ? (
          <PDFViewer style={{ width: "100%", height: "90vh" }}>
            <DocuPDF CUIT={"30695362036"} cliente={"MORELLI SRL"} fecha={"10/04/23"} domicilio={"OV LAGOS 5839 (Rosario, Santa Fe)"} nroOrden={"30207/23"}/>
          </PDFViewer>
        ) : (
          <></>
        )}
      </>
    </div>
  );
}

export default App;
