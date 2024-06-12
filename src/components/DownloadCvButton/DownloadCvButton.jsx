import React from 'react';

const DownloadCvButton = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + 'renzo-demarco-cv.pdf';
    link.download = 'Renzo Demarco - CV.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload}>
      Download CV
    </button>
  );
};

export default DownloadCvButton;