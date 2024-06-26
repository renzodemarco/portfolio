import './DownloadCv.css'
import { FiDownload } from "react-icons/fi";
import { useTranslation } from 'react-i18next'

const DownloadCv = () => {

  const { t } = useTranslation()

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = import.meta.env.BASE_URL + t("CV_URL");
    link.download = 'Renzo Demarco - CV.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload} className='cv-button'>
      <p>{t("downloadCV")}</p>
      <FiDownload className='cv-icon' />
    </button>
  );
};

export default DownloadCv;