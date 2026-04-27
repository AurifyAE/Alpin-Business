import { useEffect, useRef, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.mjs'

const pdfFile = '/public/document/alpin.pdf'
const zoomLevels = [0.9, 1, 1.1, 1.25, 1.4, 1.6]

export default function App() {
  const stageRef = useRef(null)
  const [numPages, setNumPages] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [zoomIndex, setZoomIndex] = useState(1)
  const [viewerWidth, setViewerWidth] = useState(900)

  const zoom = zoomLevels[zoomIndex]

  useEffect(() => {
    function syncWidth() {
      if (!stageRef.current) {
        return
      }

      const nextWidth = Math.max(stageRef.current.clientWidth - 80, 280)
      setViewerWidth(nextWidth)
    }

    syncWidth()

    const observer = new ResizeObserver(syncWidth)

    if (stageRef.current) {
      observer.observe(stageRef.current)
    }

    window.addEventListener('resize', syncWidth)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', syncWidth)
    }
  }, [])

  function handleLoadSuccess({ numPages: nextNumPages }) {
    setNumPages(nextNumPages)
    setCurrentPage(1)
  }

  function goToPage(nextPage) {
    setCurrentPage(Math.min(Math.max(nextPage, 1), numPages || 1))
  }

  return (
    <main className="viewer-shell">
      <div className="viewer-topbar">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage <= 1}>
          Prev
        </button>
        <span className="viewer-meta">
          {numPages ? `${currentPage} / ${numPages}` : 'Loading'}
        </span>
        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={!numPages || currentPage >= numPages}
        >
          Next
        </button>
        <div className="spacer" />
        <button
          onClick={() => setZoomIndex(Math.max(0, zoomIndex - 1))}
          disabled={zoomIndex === 0}
        >
          -
        </button>
        <span className="viewer-meta">{Math.round(zoom * 100)}%</span>
        <button
          onClick={() => setZoomIndex(Math.min(zoomLevels.length - 1, zoomIndex + 1))}
          disabled={zoomIndex === zoomLevels.length - 1}
        >
          +
        </button>
      </div>

      <section className="viewer-stage" ref={stageRef}>
        <Document
          file={pdfFile}
          onLoadSuccess={handleLoadSuccess}
          loading={<div className="viewer-state">Loading PDF...</div>}
          error={<div className="viewer-state">Unable to load the PDF.</div>}
        >
          <Page
            pageNumber={currentPage}
            width={viewerWidth * zoom}
            renderTextLayer={false}
          />
        </Document>
      </section>
    </main>
  )
}
