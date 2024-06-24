import { useState } from 'react';
import ExperienceAccordion from '../../components/ExperienceAccordion/ExperienceAccordion'
import DownloadCv from '../../components/DownloadCv/DownloadCv'
import { experiences as experiencesEN } from '../../data/data.en.js';
import { experiences as experiencesES } from '../../data/data.es.js';
import { useTranslation } from 'react-i18next';
import i18n from '../../i18n.js'
import './WorkExperience.css'

const WorkExperience = () => {

  const [expandedIndex, setExpandedIndex] = useState(null);
  const { t } = useTranslation()
  const current = i18n.language
  const experiences = current === 'en' ? experiencesEN : experiencesES;

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
        {Object.entries(experiences).map(([category, jobs], index) => (
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