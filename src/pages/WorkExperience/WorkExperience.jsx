import { useState } from 'react';
import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import DownloadCv from '../../components/DownloadCv/DownloadCv'
import { useTranslation } from 'react-i18next';
import './WorkExperience.css'

const WorkExperience = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);
  const { t } = useTranslation()
  const data = t('experience.data', { returnObjects: true });

  const toggleItem = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <>
      <h2>{t("experience.title")}</h2>
      <div className='accordion-container'>
        {Object.entries(data).map(([category, jobs], index) => (
          <ExperienceAccordion
            key={index}
            category={category}
            jobs={jobs}
            index={index}
            onToggle={toggleItem}
            expandedIndex={expandedIndex}
          />
        ))}
      </div>
      <div className='cv-container'>
        <p>{t("experience.CV")}</p>
        <div className='home-contact-button cv-button-container'>
          <DownloadCv />
        </div>
      </div>
    </>
  )
}

export default WorkExperience