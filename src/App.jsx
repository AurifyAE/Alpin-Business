import "./styles.css";

export default function App() {
  const assetBase = import.meta.env.BASE_URL;
  // Append #navpanes=0 to hide the left sidebar, and view=FitH to fit the width to the viewer
  const pdfFile = `${assetBase}document/alpin.pdf#navpanes=0&view=FitH&scrollbar=0`;

  return (
    <div className="app-container">
      
      
      <main className="viewer-main">
        <div className="viewer-wrapper">
          <iframe 
            src={pdfFile} 
            title="PDF Preview"
            className="pdf-iframe"
          />
        </div>
      </main>
    </div>
  );
}
