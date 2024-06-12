import './DownloadCv.css'
import { FiDownload } from "react-icons/fi";

const DownloadCv = () => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + 'renzo-demarco-cv.pdf';
    link.download = 'Renzo Demarco - CV.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className='cv-button'>
      <p>Download CV</p>
      <FiDownload className='cv-icon' />
    </button>
  );
};

export default DownloadCv;