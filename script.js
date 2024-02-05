// Replace 'your-pdf-file.pdf' with the path to your PDF file.
const pdfPath = 'your-pdf-file.pdf';

// Function to render PDF preview.
function renderPDF(url, canvasContainer) {
    const container = document.getElementById(canvasContainer);

    // Fetch PDF file.
    pdfjsLib.getDocument(url).then(pdfDoc => {
        // Loop through each page and render it on canvas.
        for (let pageNum = 1; pageNum <= pdfDoc.numPages; pageNum++) {
            pdfDoc.getPage(pageNum).then(page => {
                const canvas = document.createElement('canvas');
                container.appendChild(canvas);
                const context = canvas.getContext('2d');
                const viewport = page.getViewport({ scale: 1.5 });

                canvas.width = viewport.width;
                canvas.height = viewport.height;

                const renderContext = {
                    canvasContext: context,
                    viewport: viewport
                };

                page.render(renderContext);
            });
        }
    });
}

// Call the function to render PDF preview.
renderPDF(pdfPath, 'pdf-preview');
