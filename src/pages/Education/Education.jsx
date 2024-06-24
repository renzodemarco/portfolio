import { useTranslation } from 'react-i18next'
import './Education.css'

const Education = () => {

  const { t } = useTranslation();

  return (
    <>
      <h2>{t("education.title")}</h2>
      <div className="education-div education-coder">
        <h3>{t("education.coder")}</h3>
        <ul>
          <li>{t("education.coderItem1")}</li>
          <li>{t("education.coderItem2")}</li>
          <li>{t("education.coderItem3")}</li>
          <li>{t("education.coderItem4")}</li>
        </ul>
      </div>
      <div className="education-div education-courses">
        <h3>{t("education.courses")}</h3>
        <ul>
          <li>{t("education.coursesItem1")}</li>
          <li>{t("education.coursesItem2")}</li>
          <li>{t("education.coursesItem3")}</li>
          <li>{t("education.coursesItem4")}</li>
        </ul>
      </div>
      <div className="education-div education-vet">
        <h3>{t("education.vet")}</h3>
        <ul>
          <li>{t("education.vetItem1")}</li>
          <li>{t("education.vetItem2")}</li>
        </ul>
      </div>
      <div className="education-div education-lang">
        <h3>{t("education.lang")}</h3>
        <ul>
          <li><span>{t("education.langES")}</span> ({t("education.langESLevel")})</li>
          <li><span>{t("education.langEN")}</span> ({t("education.langENLevel")})
            <p>IELTS Advanced English Certificate (C1)</p>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Education